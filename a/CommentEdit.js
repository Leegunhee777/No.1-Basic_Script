import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Button,
  DialogActions,
  Divider,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  makeStyles,
  Modal,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  textField: {
    margin: theme.spacing(1.5, 0, 3, 0),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    margin: '0 auto',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  datePicker: {
    margin: '1rem 0',
  },
}));

const getModalStyle = () => {
  const top = '50';
  const left = '50';

  return {
    position: 'absolute',
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: 600,
    maxWidth: '100%',
    maxHeight: '100%',
    overflowY: 'auto',
    padding: '1rem',
    borderRadius: 10,
  };
};

const CommentEdit = ({
  staff,
  notice,
  open,
  handleClose,
  editCoachChatNoticeStartAsync,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      disableAutoFocus
    >
      <div style={modalStyle} className={classes.paper}>
        <Formik
          initialValues={{
            text: '',
          }}
          validationSchema={Yup.object({
            text: Yup.string().required('Text is required'),
          })}
          onSubmit={async (value) => {
          console.log(value);
          }}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => {
            return (
              <form>
                <TextField
                  label='Notice Text'
                  name='text'
                  value={values.text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth={true}
                  error={errors.text && touched.text === true}
                  helperText={errors.text && touched.text && errors.text}
                  variant='outlined'
                  multiline
                  rows={10}
                />

                <Divider />
                <DialogActions>
                  <Button variant='outlined' onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button
                    variant='outlined'
                    onClick={handleSubmit}
                    color='secondary'
                  >
                    Submit
                  </Button>
                </DialogActions>
              </form>
            );
          }}
        </Formik>
      </div>
    </Modal>
  );
};

export default CommentEdit ;
