type SubHeaderProps = {
  children: React.ReactNode
}

const SubHeader = ({ children }: SubHeaderProps) => {
  return (
    <h1 className="font-serif text-3xl md:text-4xl tracking-[0.02rem] mb-8 md:mb-4">
      {children}
    </h1>
  )
}

export default SubHeader;
