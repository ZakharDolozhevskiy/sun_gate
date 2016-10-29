import React, { Component, PropTypes } from 'react';
import Paper          from 'material-ui/Paper';
import Dialog         from 'material-ui/Dialog';
import serialize      from 'form-serialize';
import TextField      from 'material-ui/TextField';
import FlatButton     from 'material-ui/FlatButton';
import RaisedButton   from 'material-ui/RaisedButton';

class ProductEditModal extends Component {
  constructor(props) {
    super(props);
    this.onSave = () => {
      const formData = new FormData(this.form);
      !this.file.files[0] && formData.delete('photo');
      props.onChange(formData);
      props.closeModal();
    };
  }

  render() {
    const { title, size, color, price, isOpen, closeModal, modalTitle, img } = this.props;
    return (
      <Dialog
        open={isOpen}
        title={modalTitle}
        actions={[<FlatButton label="Save" primary={true} onTouchTap={this.onSave} />]}
        autoScrollBodyContent={true}
        onRequestClose={closeModal}
      >
        {img &&
          <Paper style={{ width: 320, height: 240 }} zDepth={1}>
            <img style={{ maxWidth: '100%' }} src={`http://localhost:3000/public/${img}`} alt="product"/>
          </Paper>}
        <form ref={ref => { this.form = ref; }} onKeyUp = {ev => ev.keyCode === 13 && this.onSave()}>
          <TextField name="title" floatingLabelText={<strong>Title</strong>} defaultValue={title}/><br/>
          <TextField name="size"  floatingLabelText={<strong>Size</strong>}  defaultValue={size}/><br/>
          <TextField name="color" floatingLabelText={<strong>Color</strong>} defaultValue={color}/><br/>
          <TextField name="price" floatingLabelText={<strong>Price</strong>} defaultValue={price}/><br/>
          <input ref={ref => { this.file = ref; }} type="file" name="photo"/>
        </form>
      </Dialog>
    );
  }
}

ProductEditModal.propTypes = {
  img:        PropTypes.string,
  size:       PropTypes.string,
  price:      PropTypes.number,
  title:      PropTypes.string,
  color:      PropTypes.string,
  isOpen:     PropTypes.bool,
  onChange:   PropTypes.func,
  closeModal: PropTypes.func,
};

export default ProductEditModal;
