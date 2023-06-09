import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Another event",
  },
];

function EventsPage() {
  return <>
  <h1>EventsPage</h1>
  <ul>
    {DUMMY_EVENTS.map(event => <li key={event.id}>
        <Link to={event.id}>{event.title}</Link>
        {/* absolute path = to={`/events/${event.id}} */}
    </li>)}
  </ul>
  </>
}

export default EventsPage;
// NE KORISIT SE
