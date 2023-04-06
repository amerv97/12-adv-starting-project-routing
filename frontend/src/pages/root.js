import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
// defines where shoud content of children pages gonna be rendered
import { useNavigation } from "react-router-dom";
// lets us find out whether we're currently in an active transition, or we are loading data or if we have no active transition going on 


function RootLayout() {
  // const navigation = useNavigation();
  // navigation.state === ''

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
