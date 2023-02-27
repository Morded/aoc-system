type Props = {
  children: React.ReactNode
  color: string
}

const ColoredText = ({ children, color }: Props) =>
  <span className={`${color} opacity-30`}>{children}</span>

export default ColoredText;
