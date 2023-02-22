interface SubMenuProps {
  name: string;
  href?: string;
  blank?: boolean;
  place?: "nav" | "footer";
}

export interface MenuProps extends SubMenuProps {
  items?: MenuProps[];
}

const mainMenu: MenuProps[] = [
  {
    name: "Termékek",
    items: [
      {
        name: "Sales activity",
        href: "https://aocsystem.com/#/products/sales-activity",
      },
      {
        name: "Business & Office",
        href: "https://aocsystem.com/#/products/business-and-office",
      },
    ]
  },
  {
    name: "Cég",
    items: [
      {
        name: "Rólunk",
        href: "/aboutus"
      },
      {
        name: "Karrier",
        href: "https://aocsystem.com/#/career",
        place: "footer"
      },
      {
        name: "Kapcsolat",
        href: "https://aocsystem.com/#/contact"
      },
      {
        name: "Impresszum",
        href: "https://aocsystem.com/#/imprint"
      },
    ]
  },
  {
    name: "Karrier",
    href: "https://aocsystem.com/#/career",
    place: "nav"
  },
]

export default mainMenu;
