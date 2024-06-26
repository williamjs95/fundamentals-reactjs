import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://avatars.githubusercontent.com/u/129805046?v=4'
          />
          <div className={styles.authorInfo}>
            <strong>William Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time 
          title='11 de Maio às 08:13h' dateTime='2022-05-08 08:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          Fala galera!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusamus saepe ea ab quas a odit nulla maiores labore eos eum deleniti dolore illum architecto optio quod, id error facilis.
        </p>
        <p>
          <a href=''>jane.design/doctorcare</a>
        </p>
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#lnw</a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </div>
    </article>
  )
}