import { Header } from './components/Header';

import style from './App.module.css'


import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
      
        <Sidebar />

        <main>
          <h1>Componente de post 1</h1>

          <h2>Componente de post 2</h2>
        </main>
      </div>
    </>
  )
}
