import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, Grid } from '@material-ui/core';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: 16,
    flexBasis: '43.5%',
    color: '#333333',
    flexShrink: 0,
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 55,
    wordBreak: 'break-all',
  },
  secondaryHeading: {
    fontSize: 16,
    color: theme.palette.text.secondary,
    paddingTop: 10,
  },
}));

export default function InvoiceDetails(props) {
  const { selectedJob } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {selectedJob.invoice.amount > 0 && (
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              Current Invoice Amount
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {selectedJob.invoice.amount}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.secondaryHeading}>
              This shows the current invoice amount.
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            Total Invoiced Amount
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {selectedJob.invoices.invoiced_amount}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            The total of invoiced amount on the job.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            Un-Invoiced Amount
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {selectedJob.invoices.uninvoiced_amount}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
            The total of un-invoiced amount left on the job.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Total Payement</Typography>
          <Typography className={classes.secondaryHeading}>
            {Object.entries(selectedJob).length < 1
              ? ''
              : selectedJob.payments.totalPayments}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={5}>
              <Typography className={classes.heading}>
                Invoiced Payments
              </Typography>
            </Grid>

            <Grid item xs={5}>
              <Typography className={classes.secondaryHeading}>
                {Object.entries(selectedJob).length < 1
                  ? ''
                  : selectedJob.payments.invoiced_payments}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.heading}>
                Individual Payments
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.secondaryHeading}>
                {Object.entries(selectedJob).length < 1
                  ? ''
                  : selectedJob.payments.individual_payments}
              </Typography>
            </Grid>
            <Typography className={classes.secondaryHeading}>
              {' '}
              The total amount of payments received on the job.
            </Typography>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
