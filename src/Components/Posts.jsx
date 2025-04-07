/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import Post from './Post';

function Posts() {
    const [post, usePost] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data =>  usePost(data))
    }, [])

  return (
    <div>
        <h3>Posts: {post.length}</h3>
       {
        post.map((p) => <Post post={p}></Post>)
       }
    </div>
  )
}

export default Posts