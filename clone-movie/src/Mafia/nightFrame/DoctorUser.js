import React, { useState } from "react";
import { Game } from "../meetingFrame/Users";
function DoctorUser() {
  const [index, setIndex] = useState(0);
  const [vote, setVote] = useState(Game.users[index].nickname);
  const [isClick, setIsClick] = useState(false);
  return <div></div>;
}

export default DoctorUser;
