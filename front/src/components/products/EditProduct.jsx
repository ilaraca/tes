// components/projects/EditProduct.js

import React, { Component } from 'react';
import axios from 'axios';

class EditProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: this.props.theProduct.name, 
        decription: this.props.theProduct.decription,
        imgPath: this.props.theProduct.imgPath
    }
  }

    
  handleFormSubmit = (event) => {
    const name = this.state.name;
    const decription = this.state.decription;
    const imgPath =  this.state.imgPath;

    event.preventDefault();

    axios.put(`http://localhost:5000/products/edit/${this.props.theProduct._id}`, { name, decription, imgPath }, {withCredentials:true})
    // axios.put(`http://localhost:5000/products/edit/${params.id}`, { name, decription, imgPath })
    .then( () => {
        this.props.getTheProducts();
        // after submitting the form, redirect to '/products'
        this.props.history.push('/products');    
    })
    .catch( error => console.log(error) )
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render(){
    console.log('edit', this.state)
    return (
      <div>
        <h5>Editar o Produto</h5>
        <form onSubmit={this.handleFormSubmit}>
          <input className="form-control form-control-sm" type="text" name="imgPath" value={this.state.imgPath} placeholder="URL da Imagem" onChange={e => this.handleChange(e)}/>
          
          <input className="form-control form-control-sm" type="text" name="name" value={this.state.name} placeholder="Nome" onChange={e => this.handleChange(e)}/>
          
          <input className="form-control form-control-sm" name="description" value={this.state.decription} placeholder="Descrição" onChange={e => this.handleChange(e)} />

          <input  className="btn btn-secondary" type="submit" value="Salvar" />

        </form>
      </div>
    )
  }
}

export default EditProduct;