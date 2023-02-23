type UnderlinedTextProps = {
  children: React.ReactNode;
}

function UnderlinedText({ children }: UnderlinedTextProps) {
  return (
    <div className="relative w-fit inline-block">
      {children}
      <div className={`bg-aocOrange absolute w-full  z-[-1] bottom-2 h-3 md:h-5 lg:h-7`}></div>
    </div>
  )
}

export default UnderlinedText
