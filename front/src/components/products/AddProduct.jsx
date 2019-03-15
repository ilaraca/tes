// components/products/AddProducts.js

import React, { Component } from 'react';
import axios from 'axios';
import AppAppBar from '../../views/AppAppBar.jsx';
import AppFooter from '../../views/AppFooter.jsx';

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
    const styleDiv = {
      width: '30rem'
    }
    const gridDiv = {
      // padding: '10%'
    }
    const gridDivRow = {
      backgroundColor: '#dcdcdc',
      padding: '70px'
    }
    return (
      <div className="container-fluid">
      <React.Fragment>
      <AppAppBar />
	     <div className="row" style={gridDivRow}>
        <form onSubmit={this.handleFormSubmit}>
        <h1>Cadastro de Produto</h1>
        <div class="form-group">
          {/* <label>Nome:</label> */}
          <input type="text" name="name" value={this.state.name} placeholder="Nome" onChange={e => this.handleChange(e)} />        
        </div>
        <div class="form-group">
          {/* <label>Descrição:</label> */}
          <input name="decription" value={this.state.decription} placeholder="Descrição do Produto" onChange={e => this.handleChange(e)} />
        </div>
        <div class="form-group"></div>
          {/* <label>Url da Imagem:</label> */}
          <input name="imgPath" value={this.state.imgPath} placeholder="URL da imagem" onChange={e => this.handleChange(e)} /><hr></hr>
        
          <a href="/products" className="btn btn-primary">Voltar</a>
          <input type="submit" className="btn btn-secondary" value="Salvar" />
        </form>
      </div>
      <AppFooter />
      </React.Fragment>
      </div>
    );
  }
}

export default AddProduct;
