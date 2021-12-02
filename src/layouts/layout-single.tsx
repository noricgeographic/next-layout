import { NextPage } from "next";
import { ReactNode } from "react";
import Footer from "../components/footer"
import Header from "../components/header"

interface Props {
  children: ReactNode;
}

const LayoutSingle = ({children}: Props) => {
  return (
    <>
      <Header></Header>

      <main>{children}</main>

      <Footer></Footer>
    </>
  )
}

export default LayoutSingle
