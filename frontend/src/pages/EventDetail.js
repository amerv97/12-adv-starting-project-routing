import { json, useParams, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();
  // const params = useParams();
  return (
    <>
      <EventItem event={data.event} />
      
      {/* <h1>EventDetailPage</h1>
      <p>Event ID: {params.eventId}</p> */}
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
