import styles from './Post.module.css';

export function Post() {

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/dkzord.png"
            alt="post avatar"
          />
          <div className={styles.authorInfo}>
            <strong>Fernando Cavalcanti</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="29 de outubro às 23:16"
          dateTime="2022-10-29 23:16:00"
        >
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="https://github.com/dkzord">github.com/dkzord</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
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

    </article>
  );
}
