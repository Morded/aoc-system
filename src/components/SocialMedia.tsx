import Image from "next/image";
import Link from "next/link";

type SocialMediaProps = {
  logo: string;
  name: string;
  href: string;
}

const SocialMedia = ({ logo, name, href }: SocialMediaProps) => {
  return (
    <Link href={href} target="_blank" className="flex gap-2 items-center hover:opacity-60">
      <Image 
        alt={name} 
        src={`/${logo}`}
        width={25}
        height={25}
      />
      <span className="text-aocDark font-serif">{name}</span>
    </Link>
  )
}

export default SocialMedia;
