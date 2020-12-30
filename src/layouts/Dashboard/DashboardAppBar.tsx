import React from 'react';
import clsx from 'clsx';

// material core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// components
import { IDashboard } from 'models/ICommon';
import Language from './components/Language';
import DarkMode from './components/DarkMode';
import Account from './components/Account';

// types

// styles
import useStyles from './styles';

function DashboardAppBar({ open }: IDashboard) {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar
        className={clsx({
          [classes.appBarTool]: !open,
        })}
      >
        <div className={classes.appBarGrow} />
        <Language {...classes} />
        <DarkMode />
        <Account />
      </Toolbar>
    </AppBar>
  );
}

export default DashboardAppBar;
