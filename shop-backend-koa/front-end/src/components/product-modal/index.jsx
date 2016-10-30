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
    this.state = {};

    this.onSave = () => {
      const formData = new FormData(this.form);
      !this.file.files[0] && formData.delete('photo');
      props.onChange(formData);
      props.closeModal();
    };

    this.onFileUpload = ev => {
      const reader = new FileReader();
      const file = ev.target.files && ev.target.files[0];
      reader.onload = f => this.setState({ img: f.target.result });
      reader.readAsDataURL(file);
    }
  }

  componentWillReceiveProps() {
    this.state.img && this.setState({ img: null });
  }

  render() {
    const { title, size, color, price, isOpen, closeModal, modalTitle } = this.props;
    const paperStyles = { position: 'absolute', right: 20, top: 100, width: 200, height: 200 };

    return (
      <Dialog
        open={isOpen}
        title={modalTitle}
        style={{ minWidth: 770 }}
        actions={[<FlatButton label="Save" primary={true} onTouchTap={this.onSave} />]}
        autoScrollBodyContent={true}
        onRequestClose={closeModal}
      >
        <Paper style={paperStyles} zDepth={1}>
          <label htmlFor="photo" style={{ cursor: 'pointer' }}>
            <img className="add-product-photo" src={this.state.img || this.props.img}/>
          </label>
        </Paper>
        <form ref={ref => { this.form = ref; }} onKeyUp = {ev => ev.keyCode === 13 && this.onSave()}>
          <TextField name="title" floatingLabelText={<strong>Title</strong>} defaultValue={title}/><br/>
          <TextField name="size"  floatingLabelText={<strong>Size</strong>}  defaultValue={size}/><br/>
          <TextField name="color" floatingLabelText={<strong>Color</strong>} defaultValue={color}/><br/>
          <TextField name="price" floatingLabelText={<strong>Price</strong>} defaultValue={price}/><br/>
          <input
            id="photo"
            type="file"
            name="photo"
            onChange={this.onFileUpload}
            style={{ visibility: 'hidden' }}
            ref={ref => { this.file = ref; }}
          />
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
