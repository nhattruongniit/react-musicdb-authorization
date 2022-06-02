import React from 'react';

// material core
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

// material icon
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// component
import RoleTable from './RoleTable';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      textTransform: 'uppercase',
      fontSize: theme.typography.pxToRem(15),
    },
  }),
);

function createData(name: string) {
  return { name };
}

const rowsUser = [createData('View User'), createData('Update User')];

const rowsApp = [
  createData('Create App'),
  createData('View App'),
  createData('Update App'),
  createData('Update song status in app from PROD to REVIEW'),
  createData('Update song status in app from REVIEW to PROD'),
];

const rowsLicense = [
  createData('Create License'),
  createData('View License List'),
  createData('View License Detail'),
  createData('View License information in edit Track'),
];

const rowsSong = [
  createData('View Song'),
  createData('Update Song'),
  createData('Remove song has PROD status in app'),
  createData('Remove song has REVIEW status in app'),
];

const rowsContent = [
  createData('View Content'),
  createData('Update Content'),
  createData('Remove content of PROD song in app'),
  createData('Remove song of REVIEW song in app'),
];

export default function Role() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography className={classes.heading}>User</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RoleTable rows={rowsUser} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography className={classes.heading}>App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RoleTable rows={rowsApp} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography className={classes.heading}>License</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RoleTable rows={rowsLicense} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography className={classes.heading}>Song</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RoleTable rows={rowsSong} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography className={classes.heading}>Content</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RoleTable rows={rowsContent} />
        </AccordionDetails>
      </Accordion>
      <br />
      <Grid container justify="flex-end">
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Grid>
    </div>
  );
}
