import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  
}

const useStyles = (theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

class FilterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state={open:false}
    this.handleClose= this.handleClose.bind(this);
    this.handleOpen= this.handleOpen.bind(this);
  }
  handleOpen = () => {
    this.setState({open:true});
  };

  handleClose = () => {
      this.setState({open:false});
  };
  render() {
    const { classes } = this.props;
    // getModalStyle is not a pure function, we roll the style only on the first render
    

    const body = (
      <div style={getModalStyle()} className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </div>
    );

    return (
      <div>
        <Button type="button" onClick={this.handleOpen}>
          Open Modal
        </Button>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          
              <div style={getModalStyle()} className={classes.paper}>
              <h2 id="simple-modal-title">Text in a modal</h2>
              <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </div>
          
        </Modal>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(FilterModal);
