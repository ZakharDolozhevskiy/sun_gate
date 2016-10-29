import Product                                  from '../components/product';
import Paper                                    from 'material-ui/Paper';
import Divider                                  from 'material-ui/Divider';
import TextField                                from 'material-ui/TextField';
import { connect }                              from 'react-redux';
import ReactPaginate                            from 'react-paginate';
import CircularProgress                         from 'material-ui/CircularProgress';
import ProductEditModal                         from '../components/product-modal';
import { createSelector }                       from 'reselect';
import React, { Component, PropTypes }          from 'react';
import { getProducts, delProduct, saveProduct } from '../actions';

const productsSelector = createSelector(
  [state => state.products],
  products => products && products.toJS()
);

const mapStateToProps = state => productsSelector(state);

const dispatchToProps = (dispatch) => ({
  delProduct:  (id) => dispatch(delProduct(id)),
  getProducts: (page) => dispatch(getProducts(page)),
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

  onSave(payload) {
    const id = this.state.editableProduct._id;
    this.setState({ modalOpen: false, editableProduct: {} });
    this.props.saveProduct(id, payload);
  }

  render() {
    if (this.props.loading) {
      return <CircularProgress style = {{ left: '50vw', top: '50vh' }} />;
    }

    const { title, color, size, price, image_link } = this.state.editableProduct;

    return (
      <section className="products">
        <div style={{ width: '100%', padding: '20px 56px' }}>
          <Paper zDepth={2}>
            <TextField hintText="Search products" style={{ width: '100%', padding: '0 20px' }} underlineShow={false} />
            <Divider />
          </Paper>
        </div>
        {this.props.items.map(product =>
          <Product
            key={product._id}
            product={product}
            onEdit={this.onProductEdit(product)}
            onDelete={this.onProductDelete(product._id)}
          />)}
        <div className="pagination-wrapper">
          <ReactPaginate
            pageNum={this.props.pages}
            clickCallback={i => this.props.getProducts(i.selected + 1)}
            nextLabel='next'
            forceSelected={this.props.page - 1}
            pageRangeDisplayed={5}
            activeClassName='active'
            previousLabel='previous'
            marginPagesDisplayed={2}
            breakClassName='break-me'
            breakLabel={<span>...</span>}
            containerClassName='pagination'
            subContainerClassName='pages pagination'
          />
        </div>
        <ProductEditModal
          size={size}
          title={title}
          color={color}
          price={price}
          img={image_link}
          modalTitle={`Editing "${title}" product`}
          onChange={this.onSave}
          isOpen={this.state.modalOpen}
          closeModal={this.closeModal}
        />
      </section>
    );
  }
}

Products.propTypes = {
  page:        PropTypes.number,
  items:       PropTypes.array,
  pages:       PropTypes.number,
  loading:     PropTypes.bool,
  delProduct:  PropTypes.func.isRequired,
  saveProduct: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired
};

export default connect(mapStateToProps, dispatchToProps)(Products);
