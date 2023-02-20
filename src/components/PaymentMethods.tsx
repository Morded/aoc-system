import Image from "next/image";
import paymentMethods from "../../public/paymentMethods";

const PaymentMethods = () => {
  return (
    <div className="flex gap-2 lg:gap-6 justify-evenly lg:items-center my-6 mb-2 lg:my-0 lg:mb-0">
      {paymentMethods.map((method, index) => 
        <Image 
          key={index}
          alt="Payment method" 
          src={`/${method}`}
          width={250}
          height={250}
          className="w-auto h-[1.2rem]"
        />
      )}
    </div>
  )
}

export default PaymentMethods;
