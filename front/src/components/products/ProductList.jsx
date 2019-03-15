// components/produtcs/ProductList.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  constructor(){
      super();
      this.state = { 
        listOfProducts: [],
        search: "" 
      };
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

  updateSearch(event){
    this.setState({search: event.target.value.substr(0, 20)});
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
    const gridDivCard = {
      marginTop: '30px'
    }
    let filteredProducts = this.state.listOfProducts.filter(
      (product) => {
         return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return(

<div className="container-fluid" style={gridDiv}>
	<div className="row" style={gridDivRow}>
    <div>
      <h1> Lista de Produtos</h1>
      <Link to={`/`} >
        <h3>Voltar para Home</h3>
      </Link>
      <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
    </div>
		<div className="col-md-12">
		<div className="row">
      { filteredProducts.map( product => {
        return (
          <div className="col-md-4" style={gridDivCard} key={product._id}>
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
        <Link to={`/products/add`} >
          <h3>Adicionar um Produto</h3>
        </Link>
          </div>
      </div>
      </div>
    )
  }
}
export default ProductList;
