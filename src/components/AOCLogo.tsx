import Image from "next/image";
import Link from "next/link";

const AOCLogo = () => {
  return (
    <Link href="/">
      <Image 
        alt="AOC system logo, Homepage link" 
        src="/aoc-logo.svg" 
        width={63} 
        height={34}
      ></Image>
    </Link>
  )
}

export default AOCLogo;
