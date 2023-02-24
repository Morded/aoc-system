type SerifBodyProps = {
  children: React.ReactNode
}

const BaseText = ({ children }: SerifBodyProps) => {
  return (
    <p className="font-serif text-md md:text-xl text-aocDark">
      {children}
    </p>
  )
}

export default BaseText;
