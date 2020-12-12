import React from "react";

//components
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";

import "./App.css";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
   </div>
  );
};

export default App;