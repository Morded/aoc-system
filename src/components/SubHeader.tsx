type SubHeaderProps = {
  children: React.ReactNode
}

const SubHeader = ({ children }: SubHeaderProps) => {
  return (
    <h1 className="font-serif text-4xl tracking-[0.02rem] mb-4">
      {children}
    </h1>
  )
}

export default SubHeader;
