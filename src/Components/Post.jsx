import React from "react";

function Post({ post }) {
  const { id, title, body } = post;

  const style = {
    margin: "15px",
    padding: "15px",
    border: "2px solid red",
    borderRadius: "15px"
  };
  return (
    <div style={style}>
      <div>
        <p>Post-Id: {id}</p>
        <h3>Post-Title: {title}</h3>
        <p>Post-body: {body}</p>
      </div>
    </div>
  );
}

export default Post;
