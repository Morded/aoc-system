type Header1Props = {
  children: React.ReactNode
}

const Header1 = ({ children }: Header1Props) => {
  return (
    <h1 className="font-[900] text-[3rem] md:text-7xl lg:text-8xl leading-none tracking-[0.02em] text-aocDark">
      {children}
    </h1>
  )
}

export default Header1;
