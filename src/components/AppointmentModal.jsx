import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import {
  Button as MUIButton,
  Tooltip,
  Dialog,
  Grid,
  Box,
  styled,
  Fade,
  withStyles,
  CircularProgress,
  DialogContent as MuiDialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Chip,
  Typography,
} from '@material-ui/core';

import { JobStat } from './JobStat';
import EditIcon from '@material-ui/icons/Edit';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../config/material-ui/theme';
import Draggable from 'react-draggable';
import LiveSearch from './LiveSearch';
import Alert from '@material-ui/lab/Alert';
import AppointmentFields from './AppointmentFields';

// const baseUrl = `${location.protocol}//${location.host}`;

const CustomActionBar = styled(Box)({
  marginTop: 40,
  display: 'flex',
  justifyContent: 'flex-end',
});

const CircularProgressWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const NameWrapper = styled(Box)({
  fontSize: '18px',
});

const MarginWrapper = styled(Box)({
  height: 25,
  textAlign: 'end',
  marginBottom:'20px',
  width: '100%',
});

const JobInvoiceTyp = styled(Typography)({
  cursor: 'pointer',
  borderRadius: '3px',
  lineHeight: '2.3',
  margin: '4px',
  textAlign: 'left',
  fontSize: '12px',
  display: 'block',
  padding: '3px 20px',
  clear: 'both',
  fontWeight: '400',
  '&:hover': {
    color: '#262626',
    backgroundColor: '#f5f5f5',
  },
});

const Paragraph = styled(Typography)({
  fontSize: '50px',
  float: 'right'
});


const EditBtnWrapper = styled(Typography)({
  cursor: 'pointer',
  border: '1px solid #E7EAEC',
  height: 31,
  width: 31,
  marginRight: '-1px',
  position: 'relative',
  borderTopLeftRadius: '3px',
  borderBottomLeftRadius: '3px',
  background: 'white',
  '&:hover': {
    background: '#e7eaec',
  },
  '& svg': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
  },
});

const AlertWrapper = styled(Box)({
  marginBottom: 20,
  marginTop: 20,
});

const StyledAlert = withStyles({
  root: { fontSize: '14px' },
  filledWarning: {
    color: '#8a6d3b',
    backgroundColor: '#fcf8e3',
    borderColor: '#faebcc',
  },
  icon: { color: '#f8ac59' },
})(Alert);

const NewInvoiceBtn = withStyles({
  root: {
    fontSize: '13px',
    fontFamily: '"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif',
    height: '35px',
    textTransform:'none',
    marginBottom: '12px'

  },
})(MUIButton);

const Button = withStyles({})(MUIButton);

const DialogContent = styled(MuiDialogContent)({
  minHeight: 100,
});

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} style={{ maxWidth: '750px', minWidth: 750 }} />
    </Draggable>
  );
}

export default function AppointmentModal(props) {
  const { title, invoice_id, job_id, open, setOpen } = props;
  
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
  const [selectedJob, setSelectedJob] = useState(false);
  const [selectedJobID, setSelectedJobID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
    setSelectedJobID(null);
    setSelectedInvoiceId(null);
    invoice_id && setSelectedInvoiceId(invoice_id);
    job_id && setSelectedJobID(job_id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   if (selectedJobID) {
  //     (async () => {
  //       const response = await fetch(
  //         `${baseUrl}/jobs/get_job_details_api?job=${selectedJobID}`
  //       );
  //       const secondData = await response.json();
  //       setSelectedJob(secondData.data);
  //     })();
  //   }
  // }, [selectedJobID]);

  // useEffect(() => {
  //   if (selectedInvoiceId) {
  //     (async () => {
  //       setLoading(true);
  //       const response = await fetch(
  //         `${baseUrl}/jobs/get_job_details_api?invoice=${selectedInvoiceId}`
  //       );
  //       const data = await response.json();
  //       setSelectedJob(data.data);
  //       setLoading(false);
  //     })();
  //   }
  // }, [selectedInvoiceId]);

  // const handleSubmit = () => {
  //   if (
  //     parseInt(selectedJob.invoices.remaining_amount) == 0 ||
  //     selectedJob.invoice.amount == 0
  //   ) {
  //     alert.error("Can't create invoice with $0.00 amount");
  //   } else if (
  //     parseInt(selectedJob.invoice.amount) <=
  //     parseInt(selectedJob.invoices.remaining_amount)
  //   ) {
  //     setWarning('');
  //     if (selectedInvoiceId) {
  //       ajax({
  //         url: `${baseUrl}/update_invoice/${selectedInvoiceId}`,
  //         method: 'PUT',
  //         data: {
  //           amount: selectedJob.invoice.amount,
  //           description: selectedJob.invoice.description,
  //         },
  //         success: (data) => {
  //           if (data) {
  //             alert.error(data.error);
  //           } else {
  //             window.location.reload();
  //             setOpen(false);
  //           }
  //         },
  //         fail: (response) => {
  //           alert.error(response.error);
  //         },
  //       });
  //     } else {
  //       $.ajax({
  //         url: `${baseUrl}/jobs/${selectedJobID}/send_invoice_api`,
  //         method: 'POST',
  //         data: {
  //           amount: selectedJob.invoice.amount,
  //           description: selectedJob.invoice.description,
  //         },
  //         success: (data) => {
  //           if (data) {
  //             alert.error(data.error);
  //           } else {
  //             window.location.reload();
  //             setOpen(false);
  //           }
  //         },
  //         fail: (response) => {
  //           alert.error(response.error);
  //         },
  //       });
  //     }
  //   } else {
  //     setWarning(
  //       `Please enter Amount less than ${selectedJob.invoices.remaining_amount}`
  //     );
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      {invoice_id && (
        <Tooltip
          title="Edit"
          placement="top"
          arrow
          interactive
          TransitionComponent={Fade}
          title="Edit"
        >
          <EditBtnWrapper
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              handleClickOpen();
            }}
          >
            <EditIcon fontSize="small" />
          </EditBtnWrapper>
        </Tooltip>
      )}

      
        {/* <JobInvoiceTyp onClick={handleClickOpen}>New Invoice</JobInvoiceTyp> */}

      
        <NewInvoiceBtn
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
        >
          <AddOutlinedIcon style={{width:'20px', height: '20px'}}/>
          Add An Appointment
        </NewInvoiceBtn>

      
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            <NameWrapper>New Appointment</NameWrapper>
          </DialogTitle>
          
            {/* <DialogContent>
              <CircularProgressWrapper>
                <CircularProgress />
              </CircularProgressWrapper>
            </DialogContent> */}
            <>
              <DialogContent dividers>
                <Grid container>
                  <JobStat
                    label={'Active lead'}
                    content={
                      <LiveSearch
                        selectedJob={selectedJob}
                        onChange={setSelectedJobID}
                        selectedItem={
                          selectedJob.proposal
                            ? selectedJob.proposal.name
                            : false
                        }
                        // apiEndPoint={`${baseUrl}/jobs/get_json_job?term=`}
                      />
                    }
                  />
                  <MarginWrapper>Leave blank to create an availability</MarginWrapper>

                      

                    <React.Fragment>
                      <AppointmentFields
                        selectedJob={selectedJob}
                        setWarning={setWarning}
                        setSelectedJob={setSelectedJob}
                      />
                    </React.Fragment>
                </Grid>
                  <CustomActionBar>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>

                      {/* <Button
                        // onClick={handleSubmit}
                        color="primary"
                        variant="contained"
                      >
                        Update Invoice
                      </Button> */}
                      <Button
                        // onClick={handleSubmit}
                        color="primary"
                        variant="contained"
                      >
                        Save
                      </Button>
                  </CustomActionBar>
              </DialogContent>
            </>
        </Dialog>
    </ThemeProvider>
  );
}

AppointmentModal.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
  title: PropTypes.string.isRequired, // this is passed from the Rails view
};

AppointmentModal.defaultProps = {
  name: 'Editing Invoice',
  title: 'content',
};
