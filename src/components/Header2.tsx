type Header2Props = {
  children: React.ReactNode | JSX.Element
}

const Header2 = ({ children }: Header2Props) => {
  return (
    <h1 className="font-[900] text-3xl md:text-4xl lg:text-6xl xl:text-7xl tracking-[0.02em]">
      {children}
    </h1>
  )
}

export default Header2;
