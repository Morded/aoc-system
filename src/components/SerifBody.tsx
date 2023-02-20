type SerifBodyProps = {
  children: React.ReactNode
}

const SerifBody = ({ children }: SerifBodyProps) => {
  return (
    <h1 className="font-serif text-2xl md:text-3xl text-aocDark">
      {children}
    </h1>
  )
}

export default SerifBody;
