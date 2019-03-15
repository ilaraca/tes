// components/products/AddProducts.js

import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', decription: '', imgPath: '' };
  }

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const name = this.state.name;
  //   const decription = this.state.decription;
  //   const imgPath = this.state.decription;
  //   axios.post("http://localhost:5000/products/products/add", { name, decription, imgPath }
  //   .then( () => {
  //       this.props.getData();
  //       this.setState({name: "", decription: "", imgPath: ""});
  //   })
  //   .catch( error => console.log(error) )
  // }

  // handleChange = (event) => {
  //     const {name, value} = event.target;
  //     this.setState({[name]: value});
  // }

  render() {
    return (
      <div>
        <h1>lala</h1>
        {/* <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          <label>Description:</label>
          <textarea name="decription" value={this.state.decription} onChange={e => this.handleChange(e)} />
          <textarea name="imgPath" value={this.state.imgPath} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form> */}
      </div>
    );
  }
}

export default AddProduct;
