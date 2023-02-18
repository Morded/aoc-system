type Header2Props = {
  children: React.ReactNode
}

const Header2 = ({ children }: Header2Props) => {
  return (
    <h1 className="font-[900] text-[3rem] leading-none tracking-[0.02em]">
      {children}
    </h1>
  )
}

export default Header2;
