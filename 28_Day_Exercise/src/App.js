import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Post from "./components/Post";

import styles from "./App.module.css";

function App(props) {
  const [messages, setMessages] = useState(props.messages);

  function deletePost(id) {
    const remainingPosts = messages.filter((item) => id !== item.id);
    setMessages(remainingPosts);
  }

  function addPost(message) {
    const newMessage = {
      id: "post-" + nanoid(),
      message: message,
    };
    setMessages([...messages, newMessage]);
  }

  function editPost(id, editedInput) {
    const editedPostList = messages.map((item) => {
      if (id === item.id) {
        return { ...item, message: editedInput };
      }
      return item;
    });
    console.log(editedPostList);
    setMessages(editedPostList);
  }

  const messageList = messages.map((item) => (
    <Post
      id={item.id}
      message={item.message}
      key={item.id}
      deletePost={deletePost}
      editPost={editPost}
    />
  ));

  return (
    <div className={styles.app}>
      <Form addPost={addPost} />
      {messageList}
    </div>
  );
}

export default App;
