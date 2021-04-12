import React from 'react';

const Post = ({match}) => {
    return(
        <div>
            <p>
                Post #{match.params.id}
            </p>
        </div>
    )
}

export default Post;