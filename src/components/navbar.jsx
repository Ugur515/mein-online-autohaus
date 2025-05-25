import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    showFahrzeugeDropdown: false,
  };

  toggleDropdown = () => {
    this.setState(prevState => ({ showFahrzeugeDropdown: !prevState.showFahrzeugeDropdown }));
  };

  render() {
    const { showFahrzeugeDropdown } = this.state;

    return (
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Samuel AUTOHAUS</a>
          <ul className="navbar-menu">
            <li><a href="/">Home</a></li>

            <li 
              className="dropdown"
              onMouseEnter={this.toggleDropdown}
              onMouseLeave={this.toggleDropdown}
              style={{ position: 'relative' }}
            >
              <a href="#!" onClick={(e) => e.preventDefault()}>
                Fahrzeuge ▼
              </a>
              {showFahrzeugeDropdown && (
                <ul className="dropdown-menu">
                  <li><a href="/neuwagen">Neuwagen</a></li>
                  <li><a href="/gebrauchtwagen">Gebrauchtwagen</a></li>
                  <li><a href="/elektro-hybrid">Elektro & Hybrid</a></li>
                </ul>
              )}
            </li>

            <li><a href="/service">Service</a></li>
            <li><a href="/finanzierung">Finanzierung & Leasing</a></li>
            <li><a href="/angebote">Angebote</a></li>
            <li><a href="/ueber-uns">Über uns</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
            <li><a href="/konto">Mein Konto</a></li>

            <li className="warenkorb-icon" style={{ fontSize: '1.5rem', marginLeft: '10px', cursor: 'pointer' }}>
            <a href="#!" title="Warenkorb" onClick={(e) => { e.preventDefault(); this.props.toggleCart(); }}>
            🛒 {this.props.itemsCount > 0 && <span>({this.props.itemsCount})</span>}
            </a>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
