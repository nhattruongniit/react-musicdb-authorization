// material icon
import PeopleIcon from '@material-ui/icons/People';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

// configs
import { PATH_NAME } from 'configs';

// types
import { INavBar } from 'models/IRoutes';

export const navbar: INavBar[] = [
  {
    subheader: 'Users',
    href: PATH_NAME.USERS,
    icon: PeopleIcon,
  },
  {
    subheader: 'Role',
    href: PATH_NAME.ROLE,
    icon: PermIdentityIcon,
    item: [
      {
        title: 'System Admin',
        href: `${PATH_NAME.ROLE}/system-admin`,
      },
      {
        title: 'Product Lead',
        href: `${PATH_NAME.ROLE}/product-lead`,
      },
      {
        title: 'Product Owner',
        href: `${PATH_NAME.ROLE}/product-owner`,
      },
      {
        title: 'Content Lead',
        href: `${PATH_NAME.ROLE}/content-lead`,
      },
      {
        title: 'Content Specialist',
        href: `${PATH_NAME.ROLE}/product-specialist`,
      },
      {
        title: 'Content Collaborator',
        href: `${PATH_NAME.ROLE}/product-collaborator`,
      },
      {
        title: 'Guest',
        href: `${PATH_NAME.ROLE}/guest`,
      },
    ],
  },
];
