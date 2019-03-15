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

    // axios.put(`http://localhost:5000/products/edit/${this.props.theProduct._id}`, { name, decription, imgPath })
    axios.put(`http://localhost:5000/products/edit/${params.id}`, { name, decription, imgPath })
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
    return (
      <div>
        <hr />
        <h3>Editar o Produto</h3>
        <form onSubmit={this.handleFormSubmit}>
          
          <input type="text" name="imgPath" value={this.state.imgPath} onChange={e => this.handleChange(e)}/>
          
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)}/>
          
          <label>Description:</label>
          <textarea name="description" value={this.state.decription} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Submit" />

        </form>
      </div>
    )
  }
}

export default EditProduct;