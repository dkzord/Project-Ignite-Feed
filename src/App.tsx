import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import style from './App.module.css';

import './globalStyles.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/dkzord.png",
      name: "Fernando Cavalcanti",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "github.com/dkzord"},
    ],
    publishedAt: new Date('2022-11-01 00:05:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Manelitu.png",
      name: "ManUel",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Pessoa blz?" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "github.com/dkzord"},
    ],
    publishedAt: new Date('2022-11-11 14:05:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/TicianneDias.png",
      name: "Tici",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala meu bom!" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "github.com/dkzord"},
    ],
    publishedAt: new Date('2023-01-01 20:05:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper} >
        <Sidebar />
        <main>
        {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

