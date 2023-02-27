import Header2 from "./Header2";
import ClientLogos from "./ClientLogos";

const TrustedBy = () => {
  return (
    <div className="my-20 md:my-48 w-full flex flex-col justify-center items-center">
      <div className="px-4 xl:px-0 w-full max-w-6xl mb-6">
        <Header2>Trusted By</Header2>
      </div>
      <ClientLogos />
      <ClientLogos reverse={true} />
    </div>
  )
}

export default TrustedBy;
