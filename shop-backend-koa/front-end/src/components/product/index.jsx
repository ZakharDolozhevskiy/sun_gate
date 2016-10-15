import SizeIcon from 'material-ui/svg-icons/action/label-outline';
import FontIcon from 'material-ui/FontIcon';
import EditIcon from 'material-ui/svg-icons/content/create';
import TitleIcon from 'material-ui/svg-icons/action/bookmark-border';
import MoneyIcon from 'material-ui/svg-icons/editor/attach-money';
import ColorIcon from 'material-ui/svg-icons/action/invert-colors';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { List, ListItem } from 'material-ui/List';
import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const Product = ({ product, onEdit, onDelete }) => (
  <Card className="product">
    <CardText>
      <List>
        <ListItem primaryText={product.title} leftIcon={<TitleIcon />} />
        <ListItem primaryText={`$ ${product.price}`} leftIcon={<MoneyIcon />} />
        <ListItem primaryText={product.size} leftIcon={<SizeIcon />} />
        <ListItem primaryText={product.color} leftIcon={<ColorIcon />} />
      </List>
    </CardText>
    <CardActions>
      <FlatButton onTouchTap={onEdit} label="Update" icon={<EditIcon />} />
      <FlatButton onTouchTap={onDelete} label="Remove" icon={<DeleteIcon />} />
    </CardActions>
  </Card>
);

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    size:  PropTypes.string
  }).isRequired,
  onEdit:   PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Product;
