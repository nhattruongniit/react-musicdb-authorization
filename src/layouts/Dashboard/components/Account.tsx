import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

// material core
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// material icon
import AccountCircle from '@material-ui/icons/AccountCircle';

// configs
import { PATH_NAME } from 'configs';

// actions
import { logout } from 'redux/auth.action';

function Account() {
  const { t: translate } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const _handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const _handleClose = () => {
    setAnchorEl(null);
  };

  const _handleLogout = () => {
    dispatch(logout());
    history.push(PATH_NAME.LOGIN);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={_handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={_handleClose}
      >
        <MenuItem>Tony Nguyen</MenuItem>
        <MenuItem onClick={_handleLogout}>{translate('LOGOUT')}</MenuItem>
      </Menu>
    </>
  );
}

export default memo(Account);
