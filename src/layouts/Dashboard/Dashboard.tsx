import React, { useState, FC } from 'react';

// material core
import CssBaseline from '@material-ui/core/CssBaseline';

// containers
import ErrorBoundary from 'containers/ErrorBoundary';

// components
import DashboardDrawer from './DashboardDrawer';
import DashboardAppBar from './DashboardAppBar';

// styles
import useStyles from './styles';

const Dashboard: FC = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  function _toggleDrawer() {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <DashboardAppBar open={open} toggleDrawer={_toggleDrawer} />
      <DashboardDrawer open={open} toggleDrawer={_toggleDrawer} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
    </div>
  );
};

export default Dashboard;
