import SinglePost from "../SinglePost/SinglePost"
import styles from "./PostList.module.scss"

const PostList = ({postList}) => {

  console.log(postList)

  return (
    <div className={styles.PostList}>
      {
        postList.map((post) => (
          <SinglePost data={post} key={postList.id}/>
          ))
      }
   
    </div>
  )
}

export default PostList