import React from 'react';

// material core
import { Typography } from '@material-ui/core';

// atomic
// import PaginationBase from 'components/molecules/PaginationBase';

// hooks
// import usePagination from 'hooks/usePagination';

import UserList from './UserList';

function Users() {
  // const { page, perPage, _changePage, _changePerPage } = usePagination();

  // useEffect(() => {
  //   console.log('change page', perPage, page);
  // }, [perPage, page]);

  return (
    <div>
      <Typography variant="h2" component="h2">
        Users
      </Typography>
      <br />
      <UserList />
      <br />
      {/* <PaginationBase perPage={10} totalPage={10} pageIndex={1} changePage={_changePage} changePerPage={_changePerPage} /> */}
    </div>
  );
}

export default Users;
