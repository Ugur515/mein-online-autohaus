import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    showFahrzeugeDropdown: false,
    showMobileMenu: false,
  };

  toggleDropdown = () => {
    this.setState(prevState => ({ showFahrzeugeDropdown: !prevState.showFahrzeugeDropdown }));
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ showMobileMenu: !prevState.showMobileMenu }));
  };

  closeMobileMenu = () => {
    this.setState({ showMobileMenu: false, showFahrzeugeDropdown: false });
  };

  render() {
    const { showFahrzeugeDropdown, showMobileMenu } = this.state;

    return (
      <nav className="navbar">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            onClick={e => {
              e.preventDefault();
              window.location.reload();
              this.closeMobileMenu();
            }}
          >
            Samuel AUTOHAUS
          </a>

          {/* Hamburger Button sichtbar nur mobil */}
          <button className="hamburger" onClick={this.toggleMobileMenu} aria-label="Menü umschalten">
            ☰
          </button>

          {/* Menü: sichtbar oder versteckt je nach Bildschirm und State */}
          <ul className={`navbar-menu ${showMobileMenu ? 'active' : ''}`}>
            <li>
              <a
                href="/"
                onClick={e => {
                  e.preventDefault();
                  window.location.reload();
                  this.closeMobileMenu();
                }}
              >
                Home
              </a>
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => !showMobileMenu && this.toggleDropdown()}
              onMouseLeave={() => !showMobileMenu && this.toggleDropdown()}
              style={{ position: 'relative' }}
            >
              <a
                href="#!"
                onClick={e => {
                  e.preventDefault();
                  this.setState(prevState => ({ showFahrzeugeDropdown: !prevState.showFahrzeugeDropdown }));
                }}
              >
                Fahrzeuge ▼
              </a>
              {showFahrzeugeDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="/neuwagen"
                      onClick={e => {
                        e.preventDefault();
                        window.location.href = '/neuwagen';
                        this.closeMobileMenu();
                      }}
                    >
                      Neuwagen
                    </a>
                  </li>
                  <li>
                    <a
                      href="/gebrauchtwagen"
                      onClick={e => {
                        e.preventDefault();
                        window.location.href = '/gebrauchtwagen';
                        this.closeMobileMenu();
                      }}
                    >
                      Gebrauchtwagen
                    </a>
                  </li>
                  <li>
                    <a
                      href="/elektro-hybrid"
                      onClick={e => {
                        e.preventDefault();
                        window.location.href = '/elektro-hybrid';
                        this.closeMobileMenu();
                      }}
                    >
                      Elektro & Hybrid
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="/service"
                onClick={e => {
                  e.preventDefault();
                  window.location.href = '/service';
                  this.closeMobileMenu();
                }}
              >
                Service
              </a>
            </li>

            <li>
              <a
                href="/finanzierung"
                onClick={e => {
                  e.preventDefault();
                  window.location.href = '/finanzierung';
                  this.closeMobileMenu();
                }}
              >
                Finanzierung & Leasing
              </a>
            </li>

            <li>
              <a
                href="/angebote"
                onClick={e => {
                  e.preventDefault();
                  window.location.href = '/angebote';
                  this.closeMobileMenu();
                }}
              >
                Angebote
              </a>
            </li>

            <li>
              <a
                href="/ueber-uns"
                onClick={e => {
                  e.preventDefault();
                  window.location.href = '/ueber-uns';
                  this.closeMobileMenu();
                }}
              >
                Über uns
              </a>
            </li>

            <li>
              <a
                href="/kontakt"
                onClick={e => {
                  e.preventDefault();
                  window.location.href = '/kontakt';
                  this.closeMobileMenu();
                }}
              >
                Kontakt
              </a>
            </li>

            <li>
              <a
                href="/konto"
                onClick={e => {
                  e.preventDefault();
                  window.location.href = '/konto';
                  this.closeMobileMenu();
                }}
              >
                Mein Konto
              </a>
            </li>

            <li
              className="warenkorb-icon"
              style={{ fontSize: '1.5rem', marginLeft: '10px', cursor: 'pointer' }}
            >
              <a
                href="#!"
                title="Warenkorb"
                onClick={e => {
                  e.preventDefault();
                  this.props.toggleCart();
                  this.closeMobileMenu();
                }}
              >
                🛒 {this.props.itemsCount > 0 && <span>({this.props.itemsCount})</span>}
              </a>
            </li>
          </ul>
        </div>

        {/* Overlay, wenn Menü mobil offen ist */}
        {showMobileMenu && <div className="overlay" onClick={this.closeMobileMenu}></div>}
      </nav>
    );
  }
}

export default Navbar;
