import { MenuProps } from "./mainmenu"

const footerMenu: MenuProps[] = [
  {
    name: "AOC System",
    items: [
      {
        name: "Bejelentkezés",
        href: "https://my.aocsystem.com/login",
        blank: true
      },
      {
        name: "Regisztráció",
        href: "https://my.aocsystem.com/products",
        blank: true
      },
    ]
  },
  {
    name: "Információ",
    items: [
      {
        name: "Adatkezelési tájékoztató",
        href: "https://aocsystem.com/#/data-management-information",
        blank: true
      },
      {
        name: "Adatvédelmi szabályzat",
        href: "https://aocsystem.com/#/privacy-policy",
        blank: true
      },
      {
        name: "Általános Szerződési Feltételek",
        href: "https://aocsystem.com/#/terms-and-conditions",
        blank: true
      },
      {
        name: "Cookie tájékoztató",
        href: "https://aocsystem.com/#/privacy",
        blank: true
      },
    ]
  }
]

export default footerMenu;
