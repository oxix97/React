import React, {useContext} from "react";
import {UsersContext} from "./UserContext";
import {PostsContext} from "./Post";


function Children() {
    const user = useContext(UsersContext)
    const post = useContext(PostsContext)
    let label = 'user'
    if (user.isAdmin) {
        label = 'admin'
    }
    return (
        <div>
            <div>{label}</div>
            <div>{user.nickname}</div>
            <div>{post.map((post, index) => (
                <div key={index}>
                    <div>{post.title}</div>
                    <div>{post.content}</div>
                </div>
            ))}</div>
        </div>
    )
}

export default Children