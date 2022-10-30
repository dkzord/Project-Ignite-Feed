import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import style from './App.module.css';

import './globalStyles.css';

export function App() {

  return (
    <>
      <Header />
      <div className={style.wrapper} >
        <Sidebar />
        <main>
          conteudo do post
        </main>
      </div>
    </>
  )
}

