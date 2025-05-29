import React, { Component } from 'react';


class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="footer">
                <p>&copy; 2025 Mein Online Autohaus – Alle Rechte vorbehalten.</p>
                <p>
                    <a href="/impressum.html">Impressum</a> | 
                    <a href="/datenschutz.html">Datenschutz</a>
                </p>
            </footer>
        );
    }
}
 
export default Footer;