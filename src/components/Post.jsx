import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from "./Comment";
import { Avatar } from './Avatar';

import styles from './Post.module.css';

export function Post({ data }) {
  const publishedDateFormatted = format(data.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

  const publishedDateRelativeToNoew = formatDistanceToNow(data.publishedAt, { locale: ptBR, addSuffix: true });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={data.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{data.author.name}</strong>
            <span>{data.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={data.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNoew}
        </time>
      </header>

      <div className={styles.content}>
        {data.content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p><a href={line.content}>{line.content}</a></p>;
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
