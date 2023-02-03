import SinglePost from "../SinglePost/SinglePost"
import styles from "./PostList.module.scss"

const PostList = ({postList}) => {

  return (
    <div className={styles.PostList}>
      {
        postList.map((post) => (
          <SinglePost data={post} />
          ))
      }
   
    </div>
  )
}

export default PostList