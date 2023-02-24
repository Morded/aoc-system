type SubHeaderProps = {
  children: React.ReactNode
}

const SubHeader = ({ children }: SubHeaderProps) => {
  return (
    <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.02rem] mb-8 md:mb-4 text-aocDark">
      {children}
    </h1>
  )
}

export default SubHeader;
