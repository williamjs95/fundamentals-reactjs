import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrpper}>
        <Sidebar />
        <main>
          <Post
            author="William Silva"
            content="fkdakjaçl ajkdaçfassdjk ç adkfjkadkça dkjfdkça dasjfkaçdjskasfad"
          />
          <Post
            author="Gabriel Buzzi"
            content="lorekkf afjkdaç kaldfjk hfhglça"
          />
        </main>
      </div>
    </div>
  )
}

