import React, { Component } from 'react';


class Product extends Component {
    state = {  
      added: false,
    } 

    handleAdd = () => {
    this.props.onAdd();
    this.setState({ added: true });

    // Nach 1.5 Sekunden das Feedback wieder zurücksetzen
    setTimeout(() => {
      this.setState({ added: false });
    }, 1000);
  };


    render() { 
        return (
        <div className="card" styles={{width: '18rem'}}>
  <img src= {this.props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5> 
    <p className="card-text" style={{whiteSpace: 'pre-line' }}>{this.props.description}</p>
    <button onClick={this.handleAdd} className="btn btn-primary" disabled={this.state.added}>
    {this.state.added ? "Added!" : "Buy"}
    </button>
  </div>
</div>);
    }
}
 
export default Product;