import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lucas3g.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Silva</strong>
              <time title='06 de Dezembro às 22:22h' 
                    dateTime="2022-12-06 22:22:34">
                Cerca de 1h atrás
              </time>
            </div>


            <button title='Apagar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devom, parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}