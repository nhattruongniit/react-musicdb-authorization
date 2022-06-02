import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    color: theme.palette.primary.contrastText,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,

    '& img': {
      marginRight: 15,
    },
  },

  /* app bar */
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.dark,
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: `${process.env.REACT_APP_DRAWER_WIDTH}px`,
    width: `calc(100% - ${process.env.REACT_APP_DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuLanguage: {
    color: '#fff',
  },
  hide: {
    display: 'none',
  },
  appBarTool: {
    paddingLeft: 73,
  },
  appBarGrow: {
    flexGrow: 1,
  },

  /* drawer */
  drawer: {
    width: `${process.env.REACT_APP_DRAWER_WIDTH}px`,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: `${process.env.REACT_APP_DRAWER_WIDTH}px`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
  },
  drawerCollapse: {
    backgroundColor: theme.palette.background.paper,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',

    '& span': {
      marginLeft: 8,
    },
    '& svg': {
      display: 'flex',
    },
  },
  drawerCollapseSvg: {
    minWidth: 'auto',
    '&.show': {
      transform: 'rotate(180deg)',
    },
  },
  drawerList: {
    height: 'calc(100vh - 110px)',

    '& li': {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  drawerBgToolbar: {
    backgroundColor: theme.palette.secondary.main,
    textDecoration: 'none',
  },
  drawerActive: {
    color: theme.palette.secondary.light,
    '& svg': {
      fill: theme.palette.secondary.light,
    },
  },
  buttonLeaf: {
    display: 'flex',
    padding: '8px 16px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  drawerNested: {
    paddingLeft: theme.spacing(8),
  },
  drawerRouterLink: {
    '& a': {
      width: '100%',
      display: 'block',
      paddingLeft: 70,
      textTransform: 'capitalize',
    },
  },
}));

export default useStyles;
