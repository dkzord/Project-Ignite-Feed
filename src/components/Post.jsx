import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from "./Comment";
import { Avatar } from './Avatar';

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ data }) {
  const [comments, setComments] = useState(['Post dahora!']);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(data.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

  const publishedDateRelativeToNoew = formatDistanceToNow(data.publishedAt, { locale: ptBR, addSuffix: true });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href={line.content}>{line.content}</a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  );
}
