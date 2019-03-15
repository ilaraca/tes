import React, { Component } from 'react';
import uniqueId from 'react-html-id';
import service from '../components/upload/service.jsx';

class Settings extends Component {
  constructor(props) {
    super(props);
    uniqueId.enableUniqueIds(this);
    this.state = {
      name: '',
      description: '',
      imageUrl: ''
      // message: '',
      // products: [{
      //   key: this.nextUniqueId(),
      //   nameProduct: 'notebook',
      //   descriptionProduct: 'descrição 1'
      // },
      // {
      //   key: this.nextUniqueId(),
      //   nameProduct: 'celular',
      //   descriptionProduct: 'descrição 2'
      // },
      // {
      //   key: this.nextUniqueId(),
      //   nameProduct: 'caneta',
      //   descriptionProduct: 'descrição 3'
      // }]
    };
  }
  // console.log(this.state);

  // addItem(e) {
  //   e.preventDefault();
  //   const { products } = this.state;
  //   const newItem = this.newItem.value;
  //   const newDescription = this.newDescription.value;

  //   const isOnTheList = products.includes(newItem);

  //   if (isOnTheList) {
  //     this.setState({
  //       message: 'Este item já está na lista'
  //     });
  //   } else {
  //     newItem !== '' && this.setState({
  //       products: [...this.state.products, { key: 4, nameProduct: newItem, descriptionProduct: newDescription }]
  //     });
  //   }
  //   this.addForm.reset();
  // }

  // removeItem(index) {
  //   const products = Object.assign([], this.state.products);
  //   products.splice(index, 1);
  //   this.setState({ products });
  // }

  // updateItem(idx) {
  //   const newUpdateName = this.newItem.value; // pega o valor do input
  //   const index = this.state.products.findIndex(product => product.key === idx);
  //   const products = Object.assign({}, this.state.products[index]);
  //   products.nameProduct = newUpdateName;
  //   const updatedProducts = Object.assign([], this.state.products);
  //   updatedProducts[index] = products;

  //   this.setState({ products });
  // }

  render() {
    // const { nameProduct, descriptionProduct, message } = this.state;
    const { products, message } = this.state;
    return (
      <div>
        <legend>Configuração do Usuário</legend>
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="textinput">Endereço</label>
        </div>
        <div className="col-md-4">
          <input id="andress" name="andress" type="text" className="form-control input-md" />
        </div>

        {/* table product */}
        <legend>Lista de Produtos</legend>

        <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => { this.addItem(e); }}>
          <div className="form-group">
            <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
            <input
              ref={input => this.newItem = input}
              type="text"
              placeholder="bread"
              className="form-control"
              id="newItemInput"
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="newDescriptionInput">Add New Description</label>
            <input
              ref={input => this.newDescription = input}
              type="text"
              placeholder="descrição 4"
              className="form-control"
              id="newDescriptionInput"
            />
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
        <div className="content">
          {
           message !== '' && <p className="message text-danger">{message}</p>
         }
        </div>

        <div className="bs-example" data-example-id="simple-table">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
              products.map(product => (
                <tr key={product.key}>
                  <th scope="row">1</th>
                  <td>{product.nameProduct}</td>
                  <td>{product.descriptionProduct}</td>
                  <td className="text-right">
                    <button onClick={e => this.updateItem(product.key)} type="button" className="btn btn-default-sm">
                      Update
                    </button>
                  </td>
                  <td className="text-right">
                    <button onClick={e => this.removeItem(product.key)} type="button" className="btn btn-default-sm">
                      Remove
                    </button>
                  </td>
                </tr>
              ))
          }

            </tbody>
          </table>
        </div>
        {/*  */}
        <h2>New Thing</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <input
            type="file"
            onChange={e => this.handleFileUpload(e)}
          />
          <button type="submit">Save new thing</button>
        </form>
        {/* <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="textinput">Produto</label>
        </div>
        <div className="col-md-4">
          <input id="product" name="product" type="text" className="form-control input-md" />
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="textinput">Descrição do Produto</label>
        </div>
        <div className="col-md-4">
          <input id="desproduct" name="desproduct" type="text" className="form-control input-md" />
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="filebutton">Carregar Produto</label>
        </div>
        <div className="col-md-4">
          <input id="filepro" name="filepro" className="input-file" type="file" />
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="textinput">Serviço</label>
        </div>
        <div className="col-md-4">
          <input id="service" name="service" type="text" className="form-control input-md" />
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="textinput">Descrição do Serviço</label>
        </div>
        <div className="col-md-4">
          <input id="desservice" name="textinput" type="text" className="form-control input-md" />
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="filebutton">Carregar Serviço</label>
        </div>
        <div className="col-md-4">
          <input id="fileservice" name="fileservice" className="input-file" type="file" />
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="singlebutton" />
          <div className="col-md-4">
            <button id="singlebutton" name="singlebutton" className="btn btn-primary">Salvar</button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Settings;
