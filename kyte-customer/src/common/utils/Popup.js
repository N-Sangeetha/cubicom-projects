import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideModal } from '../../../store/common/actions/common.actions';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  icon: {
    fontSize: 20,
  },
  closeButton: {
      position: 'absolute',
      left: '93%',
      top: '-23px'
  },
  buttonContainer: {
      position: 'relative'
  }
}));

const ModalWrapper = (props) =>{
    const { onClose,content, modal,classes,title } = props;
    
    return (
        <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={modal.open}
          onClose={onClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >

          <Fade in={modal.open}>
            <div className={classes.paper}>
                <div className={classes.buttonContainer}>
                    <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    onClick={onClose}
                    className={classes.closeButton}
                >
                    <CloseIcon className={classes.icon} />
                </IconButton>
                </div>
                <div id="transition-modal-title">
                    {title}
                </div>
                <br/>
                <div id="transition-modal-description">
                     <div dangerouslySetInnerHTML={{ __html:content }}></div>
                </div>
                    
            </div>
          </Fade>
        </Modal>
      </div>
    );
}

  const CustomizedModals = (props) => {
    const { action__hideModal, modal } = props;
    const classes = useStyles();
    const handleClose = (event, reason) => {
        action__hideModal();
    };
  
    return (
        <div>
            {/* <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
          <CloseIcon className={classes.icon} />
          </IconButton> */}
            <ModalWrapper
            onClose={handleClose}
            modal={modal}
            content={modal.content}
            classes={classes}
            title={modal.title}
            />
      </div>
    );
  };


const mapStateToProps = (state) => ({
    modal: { ...state.common.modal },
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        action__hideModal: hideModal,
      },
      dispatch
    );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomizedModals);