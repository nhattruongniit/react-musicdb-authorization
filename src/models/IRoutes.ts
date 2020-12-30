type ICommon = {
  exact?: boolean;
  path?: string;
  guard?: any;
  layout?: any;
  component?: any;
};

export type INavBarItem = {
  title: string;
  href: string;
};

export type IRoutes = ICommon & {
  routes?: ICommon[];
};

export type INavBar = {
  subheader: string;
  href: string;
  icon: any;
  item?: INavBarItem[];
};
