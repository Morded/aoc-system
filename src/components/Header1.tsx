type Header1Props = {
  children: React.ReactNode
}

const Header1 = ({ children }: Header1Props) => {
  return (
    <h1 className="font-[900] text-7xl xl:text-8xl leading-none tracking-[0.02em]">
      {children}
    </h1>
  )
}

export default Header1;
