"use client"
import {usePathname} from "next/navigation"
import Link from "next/link"
import "./main.css"

const MainNav = () => {
  const pathname = usePathname()
  return (
    <nav className="nav">
      <ul>
        <li>
          <h2>
            <Link
              href="/users"
              className={pathname === "/users" ? "active" : ""}
            >Users</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link
              href="/search"
              className={pathname === "/search" ? "active" : ""}
            >Search</Link>
          </h2>
        </li>
      </ul>
    </nav>
  )
}

const MainLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="bg-white">
      <header>
        <h1>Next.js study</h1>
      </header>
      <hr />
      <div className="container">
        <MainNav />
        <hr />
        <section className="contents">{children}</section>
        <hr />
      </div>
      <footer>Copyright</footer>
    </div>
  )
}

export default MainLayout
