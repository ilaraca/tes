// components/produtcs/ProductList.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetail.jsx'

import AddProduct from './AddProduct.jsx'; // <== !!!
import { grey } from '@material-ui/core/colors';

class ProductList extends Component {
  constructor(){
      super();
      this.state = { listOfProducts: [] };
  }

  getAllProducts = () => {
    axios.get(`http://localhost:5000/products/all`)
    .then(responseFromApi => {
      this.setState({
        listOfProducts: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllProducts();
  }

  render(){
    const styleDiv = {
      width: '18rem'
    }
    const gridDiv = {
      padding: '10%'
    }
    const gridDivRow = {
      backgroundColor: '#dcdcdc',
      padding: '70px'
    }
    return(

<div className="container-fluid" style={gridDiv}>
	<div className="row" style={gridDivRow}>
  <div>
  <h1> Lista de Produtos</h1>
  </div>
		<div className="col-md-12">
			<div className="row">
          { this.state.listOfProducts.map( product => {
            return (
              <div className="col-md-4">
              <div className="card" style={styleDiv} key={product._id}>
              <img className="card-img-top" src={product.imgPath} alt="Card image cap"/>
              <div className="card-body">
              <h5> {product.name}</h5>
              <Link to={`/products/detail/${product._id}`}>
                <h5 className="card-title">Ver mais</h5>
              </Link>
              </div>
              </div>
            </div>
            )})
          }
        </div>
        <div>
            {/* <AddProduct getData={() => this.getAllProducts()}/> */}
        </div>
        </div>
      </div>
      </div>
    )
  }
}
export default ProductList;
