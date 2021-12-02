import type { NextPage } from 'next'
import LayoutSingle from "../layouts/layout-single"
import styles from "../../styles/Blog.module.css"

const Blog: NextPage = () => {
  return (
    <>
      <LayoutSingle>
        this is <span className={styles.blog}>Blog</span> page.
      </LayoutSingle>
    </>
  )
}

export default Blog;
