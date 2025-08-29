import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import { Outlet } from "react-router";
import styles from './Layout.module.css'

function Layout( { privado }) {
  return (
    <>
        <Header />
        <main className={styles.main}>
          {privado  && <Aside />}
          <section className={styles.section}>
            <Outlet></Outlet>
          </section>
        </main>
        <Footer />
    </>
  )
}

export default Layout