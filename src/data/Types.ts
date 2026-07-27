export interface MenuLink {
  id: number;
  title: string;
  href: string;
  target?: "_self" | "_blank";

  // NEW
  children?: MenuLink[];
}

export interface MenuColumn {
  id: number;
  heading: string;
  links: MenuLink[];
}

export interface NavMenu {
  id: number;
  title: string;
  href?: string;
  hasMegaMenu?: boolean;
  columns?: MenuColumn[];
}