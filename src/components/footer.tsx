import { NextPage } from "next";
import Link from 'next/link'

const Footer: NextPage = () => {
  return (
    <>
      <footer>
        <Link href="/">Home</Link>&nbsp;
        <Link href="/blog">Blog</Link>&nbsp;
        <Link href="/about">About</Link>
      </footer>
    </>
  )
}

export default Footer;
