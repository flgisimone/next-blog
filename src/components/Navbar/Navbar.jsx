import Link from "next/link"
import styles from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
        <Link className={styles.Home} href={"/"}>HOME</Link>
    </div>
  )
}

export default Navbar