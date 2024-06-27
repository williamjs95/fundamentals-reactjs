import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src='https://avatars.githubusercontent.com/u/129805046?v=4'
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>William Silva</strong>
              <time
                title='11 de Maio às 08:13h' dateTime='2022-05-08 08:13:30'>Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, William. Parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <spam>20</spam>
          </button>
        </footer>
      </div>
    </div>
  )
}