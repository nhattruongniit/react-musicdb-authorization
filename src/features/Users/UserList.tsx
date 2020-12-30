import React from 'react';

// material core
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

// material icons
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id: string, name: string, email: string, role: string) {
  return { id, name, email, role };
}

const rows = [
  createData('1', 'Tony Nguyen', 'truong.nn@amanotes.com', 'SYSTEM_ADMIN'),
  createData('2', 'Sang Phan Thanh', 'thanhsang94@gmail.com', 'PRODUCT_OWNER'),
  createData('3', 'Michael DeMarti', 'michael.demarti@amanotes.com', 'SYSTEM_ADMIN'),
  createData('4', 'Ngo Anh Khoa', 'khoa.ngo@amanotes.com', 'GUEST'),
  createData('5', 'Thu Nguyen Vu Xuan', 'thu.nguyenvu@amanotes.com', 'PRODUCT_OWNER'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell padding="default" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell padding="default">{row.email}</TableCell>
              <TableCell padding="default">{row.role}</TableCell>
              <TableCell padding="none">
                <IconButton aria-label="edit">
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
