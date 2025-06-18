import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
        <Header />
        <Container>
          <Outlet></Outlet>
        </Container>
        <Footer />
    </>
  )
}

export default Layout