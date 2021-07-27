import React, { createContext } from "react";
import UserContext from "./UserContext";

export const PostsContext = createContext("");

function Post() {
  const post = [
    {
      title: "useContext 확인하기",
      content: "이번 편에서는 React Context...",
    },
  ];
  return (
    <PostsContext.Provider value={post}>
      <UserContext />
    </PostsContext.Provider>
  );
}

export default Post;
