import styles from "./MainLayout.module.scss"
import Navbar from "../../components/Navbar/Navbar"

const MainLayout = ({children}) => {
  return (
    <div className={styles.MainLayout}>
        <Navbar />
        {children}
    </div>
  )
}

export default MainLayout