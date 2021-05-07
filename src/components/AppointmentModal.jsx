import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import {
  Button,
  Tooltip,
  Dialog,
  Grid,
  Box,
  styled,
  Fade,
  withStyles,
  CircularProgress,
  DialogContent as MuiDialogContent,
  DialogTitle,
  Paper,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { JobStat } from './JobStat';
import EditIcon from '@material-ui/icons/Edit';
import { theme } from '../config/material-ui/theme';
import Draggable from 'react-draggable';
import LiveSearch from './LiveSearch';
import Alert from '@material-ui/lab/Alert';
import AppointmentFields from './AppointmentFields';
import { getByPlaceholderText } from '@testing-library/dom';

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
  fontWeight:'bold',
  display: 'flex',
  justifyContent: 'space-between'
});

const MarginWrapper = styled(Box)({
  height: 25,
  marginBottom:'30px',
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
  color:'#757575',
  fontSize:15
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

const StyledAddBtn = withStyles({
  root:{
    textTransform: "none", 
    marginBottom:12, 
    height:"35px", 
    fontSize:"13px"
  }
})(Button);

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

const DialogContent = styled(MuiDialogContent)({
  minHeight: 100,
});

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} style={{ maxWidth:750, margin:0, minWidth:'40%'}} />
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

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


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

        <StyledAddBtn
          variant="contained"
          color="primary"
          size="small"
          onClick={handleClickOpen}
          startIcon={<AddIcon style={{fontSize:25}}/>}
        >
          Add an Appointment
        </StyledAddBtn>

      
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            <NameWrapper>New Appointment
              <Button onClick={handleClose} color="primary"><CloseIcon/></Button>
            </NameWrapper>
          </DialogTitle>
          
            {/* <DialogContent>
              <CircularProgressWrapper>
                <CircularProgress />
              </CircularProgressWrapper>
            </DialogContent> */}
            <>
              <DialogContent dividers>
                <Grid container spacing={1} >
                  <JobStat
                    label={'Active lead'}
                    content={
                      <LiveSearch
                        // Placeholder="hamza"
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
                  <React.Fragment>
                    <AppointmentFields
                      selectedJob={selectedJob}
                      setWarning={setWarning}
                      setSelectedJob={setSelectedJob}
                    />
                  </React.Fragment>
                </Grid>
                
                  <CustomActionBar>
                    <Button 
                      onClick={handleClose} 
                      color="primary"
                      style={{fontSize:"14px", fontWeight:"bold"}}
                    >
                      Cancel
                    </Button>
                    <Button
                      // onClick={handleSubmit}
                      style={{fontSize:"14px", fontWeight:"bold"}}
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
