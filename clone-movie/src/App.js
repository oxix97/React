import React from "react";
import AVALON_BETA from "./AVALON_BETA/AVALON_BETA";
import { StrictMode } from "react";
import Card_Flip from "./AVALON_BETA/animation/Card_Flip";
import Motion_Test from "./AVALON_BETA/animation/Motion_Test";
import WaitingView from "./AVALON_BETA/animation/WaitingView";
import WalkAnimation from "./AVALON_BETA/animation/WalkAnimation";

function App() {
  return (
    <div>
      <AVALON_BETA />
      {/*<WalkAnimation/>*/}
      {/*<WaitingView />*/}
    </div>
  );
}

export default App;
