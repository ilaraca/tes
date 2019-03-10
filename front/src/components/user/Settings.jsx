import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addProduct: ['notebook', 'celular', 'caneta'],
      message: ''
    };
  }


  addItem(e) {
    e.preventDefault();
    const newItem = this.newItem.value;
    const { addProduct } = this.state;
    const isOnTheList = addProduct.includes(newItem);
    if (isOnTheList) {
      this.setState({
        message: 'Este item já está na lista'
      });
    } else {
      newItem !== '' && this.setState({
        addProduct: [...this.state.addProduct, newItem],
        message: ''
      });
    }

    this.addForm.reset();
  }

  removeItem(item) {
    const newAddProduct = this.state.addProduct.filter(addProduct => addProduct !== item);
    this.setState({
      addProduct: [...newAddProduct]
    });
  }

  render() {
    const { addProduct, message } = this.state;
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

        <div className="card card-settings col-md-8">

        <legend>Lista de Produtos</legend>

        <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => { this.addItem(e); }}>
          <div className="form-group">
            <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
            <input
              ref={input => this.newItem = input}
              type="text"
              placeholder="notebook"
              className="form-control"
              id="newItemInput"
            />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
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
                <th>Descrição</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
          addProduct.map(item => (
            <tr key={item}>
              <th scope="row">1</th>
              <td>{item}</td>
              <td>{}</td>
              <td className="text-left">
                <button onClick={e => this.removeItem(item)} type="button" className="btn btn-default-sm">
                  Remove
                </button>
              </td>
            </tr>
          ))
        }
            </tbody>
          </table>
        </div>
        </div>
        {/*  */}

        <div className="form-group">
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
        </div>
      </div>
    );
  }
}

export default Settings;
