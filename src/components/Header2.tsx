type Props = {
  children: React.ReactNode | JSX.Element
}

const Header2 = ({ children }: Props) => {
  return (
    <h1 className="font-[900] text-3xl md:text-3xl lg:text-5xl xl:text-6xl tracking-[0.02em]">
      {children}
    </h1>
  )
}

export default Header2;
