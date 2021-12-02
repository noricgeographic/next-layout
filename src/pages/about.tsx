import type { NextPage } from 'next'
import LayoutSingle from "../layouts/layout-single"
import styles from "../../styles/About.module.css"

const About: NextPage = () => {
  return (
    <>
      <LayoutSingle>
        this is <span className={styles.about}>About</span> page.
      </LayoutSingle>
    </>
  )
}

export default About;
