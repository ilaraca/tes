import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditProduct from './EditProduct.jsx';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getSingleProduct();
  }

  getSingleProduct = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/products/detail/${params.id}`)
      .then((responseFromApi) => {
        const theProduct = responseFromApi.data;
        this.setState(theProduct);
        console.log('product', theProduct);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderEditForm = () => {
    if(!this.state.name){
      this.getSingleProduct();
    } else {
    //                                                    {...props} => so we can have 'this.props.history' in Edit.js
    //                                                                                          ^
    //                                                                                          |
      return <EditProduct theProduct={this.state} gettheProduct={this.getSingleProduct} {...this.props} />
    }
  }

  // DELETE Product:
  deleteProduct = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:8080/products/detail/${params.id}`)
    .then( () =>{
        this.props.history.push('/projects'); // !!!
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  ownershipCheck = (product) => {
    if(this.props.loggedInUser && product.owner === this.props.loggedInUser._id){
      return (
        <div>
          <div>{this.renderEditForm()} </div>
          <button onClick={() => this.deleteProduct(this.state._id)}>Delete Product</button>
        </div>
      )
    }
  }

  render() {
    console.log('kkkkkk', this.state);
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
    const card = {
      margin: '0 auto',
      float: 'none',
      marginBottom: '10px'
    }
    return (
      <div className="container-fluid" style={gridDiv}>
	<div className="row" style={gridDivRow}>
  <div>
  </div>
		<div style={card}>
			<div className="row">
      <div className="card" style={styleDiv}>
       <img className="card-img-top" src={this.state.imgPath} alt="Card image cap" />
       <div className="card-body">
          <h5 className="card-title">{this.state.name}</h5>
          <p className="card-text">{this.state.decription}</p>
          {/* <div>
            {this.ownershipCheck(this.state)}
          </div> */}
          <a href="/products" className="btn btn-primary">Voltar</a>
          <Link to={`/products/edit/${this.state._id}`}>
            <button type="button" className="btn btn-secondary">Editar</button>
          </Link>
          {/* <a href="/products/edit" className="btn btn-secondary">Editar</a> */}
          <button type="button" onClick={() => this.deleteProduct(this.state._id)} className="btn btn-danger">Excluir</button>
        </div>
     </div>
        </div>
        <div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}
export default ProductDetails;
