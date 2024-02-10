interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b dark:border-purple-900">
      <h2 className="uppercase text-2xl mx-auto max-w2xl font-bold">{title}</h2>
    </header>
  )
}

export default Header
