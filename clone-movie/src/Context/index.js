import React from "react";
import { themes } from "./HomePageComponent";
import { Users } from "../Mafia/meetingFrame/Users";

const test = () => {
  console.log(themes.user1.nickname);
  themes.user1.nickname = "changeUser";
  console.log(themes.user1.nickname);
};

function Index() {
  return <div>{}</div>;
}

export default Index;
