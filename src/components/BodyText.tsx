type Props = {
  children: React.ReactNode
}

const BodyText = ({children}: Props) => {
  return (
    <p className="font-serif text-aocDark font-medium text-2xl sm:text-3xl leading-[110%]">{children}</p>
  )
}

export default BodyText;
