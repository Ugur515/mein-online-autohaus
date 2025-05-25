import React, { Component } from 'react';

class ShoppingCart extends Component {
    state = {} 

    constructor(props) {
    super(props);
    this.successSound = new Audio(process.env.PUBLIC_URL +"/assets/sound/samuel-autohaus-gleggmire.mp3");
}

    handleCheckout = () => {
    this.successSound.play();
    this.setState({ showModal: true });
    this.props.onClearCart();
    }

        closeModal = () => {
        this.setState({ showModal: false });
    };


    render() { 
        return (<div className='shopping-cart'>
            <h2>Warenkorb 🛒</h2>
             {this.props.items.length === 0 && <p>Der Warenkorb ist leer.</p>}
            {this.props.items.map(item => (
                <div key= {item.name}className="cart-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                   {/* Minus-Button ganz links */}
                <button 
                onClick={() => this.props.onDecrease(item.name)} 
                className="btn btn-danger btn-sm"
                style={{ marginRight: '10px' }}
                >
                 -
                </button>

            {/* Item-Beschreibung in der Mitte */}
            <span style={{ flexGrow: 1 }}>
            {item.amount} × <strong>{item.name}</strong> — {item.price}€
            </span>

        {/* Plus-Button ganz rechts */}
         <button 
        onClick={() => this.props.onIncrease(item.name)} 
        className="btn btn-success btn-sm"
        style={{ marginLeft: '10px' }}
         >
            +
        </button>
    </div>))}

    {/* Checkout Button */}
                {this.props.items.length > 0 && (
                    <button 
                        onClick={this.handleCheckout} 
                        className="btn btn-success" 
                        style={{ marginTop: '20px' }}
                    >
                        Jetzt kaufen
                    </button>
                )}

                 {/* Modal */}
                {this.state.showModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <img 
                                src={process.env.PUBLIC_URL + "/assets/img/glegg.png"} 
                                alt="Danke" 
                                style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
                            />
                            <h2>Danke für Ihren Einkauf!</h2>
                            <p>Ihr Auto wird bald geliefert.</p>
                            <button onClick={this.closeModal} className="btn btn-secondary" style={{ marginTop: '20px' }}>
                                Schließen
                            </button>
                        </div>
                    </div>
                )}
    
</div>);
    }
}
 
export default ShoppingCart;