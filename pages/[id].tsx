import type { NextPage } from 'next'
import styles from '../styles/Memo.module.css'
import { useRouter } from 'next/router'

const Memo: NextPage = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      メモ一覧 {router.query.id}
    </div>
  )
}

export default Memo
