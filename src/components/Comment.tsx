import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from './Avatar';
import { useState } from 'react';

import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      console.log(state);
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/dkzord.png" hasBorder={false} alt="Avatar user profile"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>DKzord</strong>
              <time
                title="29 de outubro às 23:16"
                dateTime="2022-10-29 23:16:00"
              >
                Cerca de 1 hora atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>


    </div>
  );
}