import { Header } from "./components/Header"
import { Post } from "./Post"
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="William Silva" 
        content="fkdakjaçl ajkdaçfassdjk ç adkfjkadkça dkjfdkça dasjfkaçdjskasfad" 
      />
      <Post
        author="Gabriel Buzzi"
        content="lorekkf afjkdaç kaldfjk hfhglça"
      />
    </div>
  )
}

