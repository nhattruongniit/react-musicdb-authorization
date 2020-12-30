import React, { Fragment } from 'react';
import clsx from 'clsx';
import { matchPath } from 'react-router';
import { NavLink as RouterLink, Link, useLocation } from 'react-router-dom';

// material core
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// material icon
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';

// types
import { IDashboard } from 'models/ICommon';
import { INavBar } from 'models/IRoutes';

// configs
import { PATH_NAME } from 'configs';

// route
import { navbar } from 'routes/navbar';

// components
import NavBarCollapse from './components/NavBarCollapse';

// styles
import useStyles from './styles';

function DashboardDrawer({ open, toggleDrawer }: IDashboard) {
  const classes = useStyles();
  const location = useLocation();

  function renderNavItem(nav: INavBar, pathname: string) {
    const Icon = nav.icon;

    if (nav.item) {
      const open = matchPath(pathname, {
        path: nav.href,
        exact: false,
      });

      return <NavBarCollapse open={Boolean(open)} item={nav.item} />;
    }

    return (
      <ListItem key={nav.href} disableGutters>
        <Button
          activeClassName={classes.drawerActive}
          className={clsx(classes.buttonLeaf)}
          component={RouterLink}
          exact
          to={nav.href}
        >
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={nav.subheader} />
        </Button>
      </ListItem>
    );
  }

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <Link to={PATH_NAME.HOME} className={clsx(classes.toolbar, classes.drawerBgToolbar)}>
        <img src="/assets/images/logo.png" title="Logo" alt="Logo" height="40" />
        <div>
          <Typography variant="h4" component="h4">
            ACM - CMS
          </Typography>
          <Typography variant="caption" component="div">
            Version 1.0.0
          </Typography>
        </div>
      </Link>
      <Divider />
      <List className={classes.drawerList}>
        {navbar.map((nav) => (
          <Fragment key={nav.subheader}>{renderNavItem(nav, location.pathname)}</Fragment>
        ))}
      </List>
      <ListItem button className={classes.drawerCollapse} onClick={toggleDrawer}>
        <ListItemIcon className={clsx(classes.drawerCollapseSvg, open ? 'show' : 'hide')}>
          <KeyboardTabIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="caption" component="span">
            {open ? 'Collapse sidebar' : ''}
          </Typography>
        </ListItemText>
      </ListItem>
    </Drawer>
  );
}

export default DashboardDrawer;
