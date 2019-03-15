// components/products/AddProducts.js

import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', decription: '', imgPath: '' };
  }

   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const decription = this.state.decription;
    const imgPath = this.state.imgPath;
    axios.post("http://localhost:5000/products/add", { name, decription, imgPath }, {withCredentials:true})
    .then( () => {
        this.props.getData();
        this.setState({name: "", decription: "", imgPath: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        <h1>Cadastro de Produto</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          <label>Description:</label>
          <input name="decription" value={this.state.decription} onChange={e => this.handleChange(e)} />
          <label>Url da Imagem:</label>
          <input name="imgPath" value={this.state.imgPath} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Submit" />
          <a href="/products" className="btn btn-primary">Voltar</a>
        </form>
      </div>
    );
  }
}

export default AddProduct;
