import { PencilLine } from "phosphor-react";

import style from './Sidebar.module.css';

export function Sidebar() {

  return (
    <aside className={style.sidebar}>
      <img className={style.cover}
        src="https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="logo"
      />

      <div className={style.profile}>
        <img className={style.avatar} src="https://github.com/dkzord.png" alt="user" />
        <strong>Fernando Cavalcanti</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
