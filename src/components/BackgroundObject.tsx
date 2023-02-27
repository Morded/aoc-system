type Props = {
  color: string
}

const BackgroundObject = ({color}: Props) => 
  <div className={`absolute w-16 h-48 opacity-30 z-[-1] rotate-[135deg] left-[20%] sm:left-1/2 sm:-translate-x-1/2 ${color}`}></div>

export default BackgroundObject
