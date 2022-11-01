import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment() {

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/dkzord.png" hasBorder={false} />

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

            <button title="delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>


    </div>
  );
}