type Props = {
  children: React.ReactNode
}

function HorizontalTile({ children }: Props) {
  return (
    <section className="w-[200vw] flex justify-start items-center flex-none feature-set ns-horizontal-section__item relative">
      <div className="w-screen flex justify-center items-center text-center px-4 z-20">
        <div className='max-w-2xl xl:max-w-7xl tansition-opacity'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default HorizontalTile
