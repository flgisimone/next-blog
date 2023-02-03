import Image from "next/image"
import Link from "next/link"
import styles from "./SinglePost.module.scss"

const SinglePost = ({data}) => {

    const imgPost = "https://picsum.photos/600/400?"

    const { title, id, body } = data;

  return (
    <div className={styles.SinglePost} key={id}>
        <h2 className={styles.Title}>
            {title}
        </h2 >
        <Link href={`/post/${id}`}>
            <Image src={imgPost + id}
            width={600}
            height={400}
            alt={title}></Image>
            <div className={styles.body}>
              <span>{body.substring(0,80)}...</span>
              <p>Scopri di più...</p>
            </div>
        </Link>
        <hr />
    </div>
  )
}

export default SinglePost