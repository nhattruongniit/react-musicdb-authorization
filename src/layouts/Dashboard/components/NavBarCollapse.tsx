import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

// material core
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

// material icon
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

// types
import { INavBarItem } from 'models/IRoutes';

// styles
import useStyles from '../styles';

type IProps = {
  open: boolean;
  item: INavBarItem[];
};

function NavBarCollapse({ open, item }: IProps) {
  const classes = useStyles();

  const [collapse, setCollapse] = useState(open);

  function handleClick() {
    setCollapse(!collapse);
  }

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText primary="Role" />
        {collapse ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse component={List} in={collapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className={classes.drawerRouterLink}>
          {item.map((role) => (
            <Button key={role.title} activeClassName={classes.drawerActive} component={RouterLink} exact to={role.href}>
              <ListItemText primary={role.title} />
            </Button>
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default NavBarCollapse;
