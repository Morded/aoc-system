type Props = {
  children: React.ReactNode | JSX.Element
}

const Header3 = ({ children }: Props) => {
  return (
    <h1 className="font-black text-aocDark text-4xl sm:text-6xl md:text-6xl lg:text-7xl tracking-[0.02em]">
      {children}
    </h1>
  )
}

export default Header3;
