import React, { useState } from "react";
import cx from "classnames";

import {
  FaUserCircle,
  FaRegEdit,
  FaRegTrashAlt,
  FaRegComment,
  FaRegHeart,
  FaRetweet,
} from "react-icons/fa";

import DateMsgPosted from "./DateMsgPosted";

import styles from "./post.module.css";

function Post(props) {
  const [isEditing, setEditing] = useState(false);
  const [editedInput, setEditedInput] = useState("");

  const handleChange = (e) => {
    if (e.target.value !== null) {
      console.log("typing!");
      setEditedInput(e.target.value);
    }

    if (e.target.value === "") return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.editPost(props.id, editedInput);

    setEditing(false);
  };

  const cancelEditing = () => {
    setEditing(false);
    setEditedInput("");
  };

  const editingTemplate = (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            rows="10"
            cols="90"
            value={editedInput}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            value="Submit"
            className={cx(styles.saveButton)}
          >
            Save
          </button>
          <button
            value="Cancel"
            className={styles.cancelButton}
            onClick={cancelEditing}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  const viewTemplate = (
    <div>
      <div className={styles.userInfo}>
        <i className={styles.faUser}>
          <FaUserCircle />
        </i>
        <h4>
          Belle Carrie<span> @Belle</span>
        </h4>
      </div>
      <div className={styles.postText}>
        <p>{props.message}</p>
      </div>
      <div className={styles.postDetail}>
        <div>
          <i
            className={cx(styles.far, styles.blue)}
            onClick={() => {
              setEditing(true);
            }}
          >
            <FaRegEdit />
          </i>
          <i
            className={cx(styles.far, styles.red)}
            onClick={() => props.deletePost(props.id)}
          >
            <FaRegTrashAlt />
          </i>
        </div>
        <div className={styles.postActivity}>
          <i className={styles.blue}>
            <FaRegComment />
          </i>
          <i className={styles.red}>
            <FaRegHeart />
          </i>
          <i>
            <FaRetweet className={styles.retweet} />
          </i>
        </div>
        <div>
          <small className={styles.tweetedDate}>
            <DateMsgPosted />
          </small>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.post}>
      {!isEditing ? viewTemplate : editingTemplate}
    </div>
  );
}

export default Post;
