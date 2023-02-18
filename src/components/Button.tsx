import Link from "next/link";

type ButtonProps = {
  href: string;
  text: string;
  bgColor?: string;
  textColor?: string;
}

const Button = ({ href, text, bgColor, textColor }: ButtonProps) => {
  return (
    <Link 
      href={href} 
      className={`
        bg-aocDark text-base tracking-widest rounded-full w-fit py-2 px-8 
        uppercase font-bold font-sans flex justify-center items-center h-10
        hover:opacity-60 transition-all
        ${bgColor ? bgColor : 'bg-aocDark'}
        ${textColor ? textColor : 'text-aocLight'}
      `}
    >
      {text}
    </Link>
  )
}

export default Button;
