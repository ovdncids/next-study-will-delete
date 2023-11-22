import type {Metadata} from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "next-study-will-delete",
  description: "next-study-will-delete"
}

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
