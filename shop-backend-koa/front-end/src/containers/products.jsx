import Dialog from 'material-ui/Dialog';
import serialize from 'form-serialize';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import React, { Component, PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Product from '../components/product';
import { getProducts, delProduct, saveProduct } from '../actions';

const productsSelector = createSelector(
  [state => state.products],
  products => products && products.toJS()
);

const mapStateToProps = (state) => ({
  products: productsSelector(state)
});

const dispatchToProps = (dispatch) => ({
  delProduct:  (id) => dispatch(delProduct(id)),
  getProducts: () => dispatch(getProducts()),
  saveProduct: (id, serialized) => dispatch(saveProduct(id, serialized))
});

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, editableProduct: {} };
    this.closeModal = () => this.setState({ modalOpen: false });
    this.onSave = this::this.onSave;
  }

  componentDidMount() {
    this.props.getProducts();
  }

  onProductEdit(product) {
    return () => this.setState({ modalOpen: true, editableProduct: product });
  }

  onProductDelete(id) {
    return () => this.props.delProduct(id);
  }

  onSave() {
    const id = this.state.editableProduct._id;
    const serialized = serialize(this.form, { hash: true });
    this.setState({ modalOpen: false, editableProduct: {} });
    this.props.saveProduct(id, serialized);
  }

  render() {
    if (!this.props.products) { return <CircularProgress />; }

    const { title, color, size, price } = this.state.editableProduct;

    return (
      <section className="products">
        {this.props.products.map(product =>
          <Product
            key={product._id}
            product={product}
            onEdit = {this.onProductEdit(product)}
            onDelete = {this.onProductDelete(product._id)}
          />)
        }
        <Dialog
          title={`Editing "${title}" product`}
          actions={[<FlatButton label="Save" primary={true} onTouchTap={this.onSave} />]}
          open={this.state.modalOpen}
          onRequestClose={this.closeModal}
        >
          <form ref={(ref) => { this.form = ref; }}>
            <TextField name="title" floatingLabelText={<strong>Title</strong>} defaultValue={title}/><br/>
            <TextField name="size" floatingLabelText={<strong>Size</strong>} defaultValue={size}/><br/>
            <TextField name="color" floatingLabelText={<strong>Color</strong>} defaultValue={color}/><br/>
            <TextField name="price" floatingLabelText={<strong>Price</strong>} defaultValue={price}/><br/>
            <DatePicker hintText="Set update date" />
          </form>
        </Dialog>
      </section>
    );
  }
}

Products.propTypes = {
  products:    PropTypes.array,
  delProduct:  PropTypes.func.isRequired,
  saveProduct: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired
};

Products.defaultProps = {};

export default connect(mapStateToProps, dispatchToProps)(Products);
