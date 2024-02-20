import Link from "next/link"

interface HeaderProps {
  title: string
  tags?: boolean
}

const Header = ({ title, tags = false }: HeaderProps) => {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b dark:border-purple-900">
      <h2 className="uppercase text-2xl mx-auto max-w2xl font-bold">{title}</h2>

      {tags && (
        <div className="text-xs mt-2 hover:text-purple-500">
          <Link href="/tags">#tags</Link>
        </div>
      )}
    </header>
  )
}

export default Header
