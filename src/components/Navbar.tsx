import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const MENU = [
  "Termékek  +",
  "Cég  +",
  "Karrier",
]

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl absolute w-full p-8 flex justify-between items-center z-50 mx-auto">
        <Link href="/">
          <Image 
            alt="AOC system logo, Homepage link" 
            src="/aoc-logo.svg" 
            width={63} 
            height={34}
          ></Image>
        </Link>

        <div className="flex gap-12 items-center">
          <nav>
            <ul className="flex gap-10 items-center">
              {MENU.map((item, i) => 
                <li key={i}>
                  <Link href="#">{item}</Link>
                </li>
              )}
            </ul>
          </nav>
          <Button href="#" text="Bejelentkezés" />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
