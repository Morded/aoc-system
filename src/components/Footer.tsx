import Link from "next/link";
import footerMenu from "../../public/footermenu";
import mainMenu, { MenuProps } from "../../public/mainmenu";
import socialMedia from "../../public/socialmedia";
import AOCLogo from "./AOCLogo";
import PaymentMethods from "./PaymentMethods";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="px-4 xl:px-0 pt-6 pb-2 flex flex-col items-center">
      <div className="max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:mb-20">
          {
            [...mainMenu, ...footerMenu]
              .filter(item => item.place === undefined || item.place === "footer")
              .map((menu, index) => (
                <MenuCol key={index} name={menu.name} items={menu.items} />
              ))
          }
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between w-full mb-2">
          <div className="my-10 lg:my-0 flex gap-6 flex-wrap justify-center items-center">
            <AOCLogo />
            {
              socialMedia.map((social, index) => 
                <SocialMedia 
                  key={index} 
                  logo={social.logo} 
                  name={social.name} 
                  href={social.href} 
                />
              )
            }
          </div>
          <PaymentMethods />
          <div className="w-full lg:w-auto flex justify-center items-center mt-4 md:mt-0">
            <span className="text-sm">&copy; {new Date().getFullYear()} Copyright AOC System Zrt.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

const MenuCol = ({ name, items }: MenuProps) => {
  return (
    <div className="flex flex-col gap-5 lg:gap-10">
      <h1 className="font-sans text-aocGray">
      {name}
      </h1>
      <div className="flex flex-col gap-4 lg:gap-5">
        {items && items.map((item, index) => (
          <Link 
            href={item.href ?? "#"} 
            key={index} 
            className="font-bold text-aocDark hover:opacity-60 transition-opacity"
            target={item.blank ? "_blank" : ""}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}


