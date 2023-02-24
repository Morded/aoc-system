type SerifBodyProps = {
  children: React.ReactNode
}

const SerifBody = ({ children }: SerifBodyProps) => {
  return (
    <p className="font-serif text-2xl md:text-3xl text-aocDark">
      {children}
    </p>
  )
}

export default SerifBody;
