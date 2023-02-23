import Header2 from "./Header2";
import ClientLogos from "./ClientLogos";

const TrustedBy = () => {
  return (
    <div className="my-20 md:my-36 w-full max-w-7xl">
      <div className="px-4 xl:px-0">
        <Header2>
          Trusted By
        </Header2>
      </div>
      <ClientLogos />
      <ClientLogos reverse={true} />
    </div>
  )
}

export default TrustedBy;
