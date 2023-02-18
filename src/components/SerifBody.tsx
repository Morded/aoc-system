type SerifBodyProps = {
  children: React.ReactNode
}

const SerifBody = ({ children }: SerifBodyProps) => {
  return (
    <h1 className="font-serif text-3xl">
      {children}
    </h1>
  )
}

export default SerifBody;
