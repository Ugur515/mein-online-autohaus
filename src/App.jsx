import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/products';
import ShoppingCart from './components/shopping-cart';

class App
 extends Component {
    state = { 
        items: [],
        showCart: false,
     } 
    
    addItem = (amount, name, price) => {
        let currentItems = this.state.items;

        let existingItem = this.state.items.find(item => item.name == name);
        if(existingItem){
            existingItem.amount++;
        }else{
            currentItems.push({
            amount, name, price
            });
        }
        this.setState({items: currentItems})
        console.log(this.state)
    }

    toggleCart = () => {
    this.setState(prevState => ({ showCart: !prevState.showCart }));
  };

    //warenkorb anzahl erhöhen per knopfdruck
    increaseItem = (name) => {
        let items = [...this.state.items];
        let item = items.find(i => i.name === name);
        if(item) item.amount++;
        this.setState({ items });
    }

    decreaseItem = (name) => {
        let items = [...this.state.items];
        let item = items.find(i => i.name == name);
        if(item && item.amount >1){
        item.amount--;
    }else{
        // Optional: Entferne Artikel bei 1→0
        items = items.filter(i => i.name !== name);
    }
    this.setState({items});
    }

    clearCart = () => {
    this.setState({ items: [] });
    };


    render() { // zeigt die Produkte auf der Webseite an 
        return <React.Fragment>
            <Navbar toggleCart={this.toggleCart} itemsCount={this.state.items.length} />
            <div className = 'app-container'>
                <div className='product-container'>
                    <Product 
                    onAdd={() => this.addItem(1, 'Audi R8', 100000)} 
                    img={process.env.PUBLIC_URL + "/assets/img/audi_r8.jpg"} 
                    title="Audi R8" 
                    description={"Leistung: 570 PS\nDrehmoment: 550 Nm\n0–100 km/h: 3,4 s\nHöchstgeschwindigkeit: 324 km/h\nAntrieb: Allrad\nGetriebe: 7-Gang S tronic"} 
                    />

                    <Product 
                      onAdd={() => this.addItem(1, 'Porsche 911 GT2 RS', 200000)} 
                      img={process.env.PUBLIC_URL + "/assets/img/porsche_911_gt2rs.jpg"}
                      title="Porsche 911 GT2 RS" 
                      description={"Leistung: 700 PS\nDrehmoment: 750 Nm\n0–100 km/h: 2,8 s\nHöchstgeschwindigkeit: 340 km/h\nAntrieb: Heckantrieb\nGetriebe: 7-Gang Doppelkupplung"} 
                    />
                        
                    <Product 
                      onAdd={() => this.addItem(1, 'Nissan R34 Skyline', 50000)} 
                      img={process.env.PUBLIC_URL + "/assets/img/Nissan_R34_Skyline.jpg"}  
                      title="Nissan R34 Skyline" 
                      description={"Leistung: ca. 280 PS\nDrehmoment: ca. 392 Nm\n0–100 km/h: ca. 5,0 s\nHöchstgeschwindigkeit: ca. 250 km/h\nAntrieb: Allrad\nGetriebe: 5-Gang Schaltgetriebe"} 
                    />

                   

                    <Product 
                      onAdd={() => this.addItem(1, 'BMW M5 F10', 40000)} 
                      img={process.env.PUBLIC_URL + "/assets/img/BMW_M5.jpg"}
                      title="BMW M5 F10" 
                      description={"Leistung: 560 PS\nDrehmoment: 680 Nm\n0–100 km/h: 4,3 s\nHöchstgeschwindigkeit: 305 km/h\nAntrieb: Hinterrad\nGetriebe: 7-Gang Doppelkupplung"} 
                    />

                    <Product 
                      onAdd={() => this.addItem(1, 'Corvette C7', 55000)} 
                      img={process.env.PUBLIC_URL + "/assets/img/corvette_C7.jpg"} 
                      title="Corvette C7" 
                      description={"Leistung: 466 PS\nDrehmoment: 630 Nm\n0–100 km/h: 4,2 s\nHöchstgeschwindigkeit: 290 km/h\nAntrieb: Hinterrad\nGetriebe: 7-Gang manuell"} 
                    />

                    <Product 
                      onAdd={() => this.addItem(1, 'Dodge SRT Demon', 90000)} 
                      img={process.env.PUBLIC_URL + "/assets/img/Dodge_srt_demon.jpg"} 
                      title="Dodge SRT Demon" 
                      description={"Leistung: 852 PS\nDrehmoment: 1044 Nm\n0–100 km/h: 2,3 s\nHöchstgeschwindigkeit: 270 km/h\nAntrieb: Hinterrad\nGetriebe: 8-Gang Automatik"} 
                    />

                    <Product 
                      onAdd={() => this.addItem(1, 'Ford GT', 400000)} 
                      img={process.env.PUBLIC_URL + "/assets/img/ford_GT.jpg"} 
                      title="Ford GT" 
                      description={"Leistung: 656 PS\nDrehmoment: 746 Nm\n0–100 km/h: 3,0 s\nHöchstgeschwindigkeit: 348 km/h\nAntrieb: Hinterrad\nGetriebe: 7-Gang Doppelkupplung"} 
                    />

                    <Product 
                      onAdd={() => this.addItem(1, 'Lamborghini Huracán SVJ', 350000)} 
                      img={process.env.PUBLIC_URL + "/assets/img/lamborghini_huracan_svj.jpg"} 
                      title="Lamborghini Huracán SVJ" 
                      description={"Leistung: 770 PS\nDrehmoment: 720 Nm\n0–100 km/h: 2,9 s\nHöchstgeschwindigkeit: 325 km/h\nAntrieb: Allrad\nGetriebe: 7-Gang Doppelkupplung"} 
                    />

                    <Product 
                      onAdd={() => this.addItem(1, 'McLaren 720S GT', 300000)} 
                      img={process.env.PUBLIC_URL + "/assets/img/mclaren_720s_GT.jpg"} 
                      title="McLaren 720S GT" 
                      description={"Leistung: 720 PS\nDrehmoment: 770 Nm\n0–100 km/h: 2,9 s\nHöchstgeschwindigkeit: 341 km/h\nAntrieb: Hinterrad\nGetriebe: 7-Gang Doppelkupplung"} 
                    />

                    <Product 
                      onAdd={() => this.addItem(1, 'Smart Fortwo', 15000)} 
                      img={process.env.PUBLIC_URL + "/assets/img/smart_fortwo.jpg"} 
                      title="Smart Fortwo" 
                      description={"Leistung: 82 PS\nDrehmoment: 160 Nm\n0–100 km/h: 11,6 s\nHöchstgeschwindigkeit: 130 km/h\nAntrieb: Hinterrad\nGetriebe: 1-Gang Automatik"} 
                    />

                    <Product 
                      onAdd={() => this.addItem(1, 'BMW i8', 60000)} 
                      img={process.env.PUBLIC_URL + "/assets/img/BMW_i8.jpg"}  
                      title="BMW i8" 
                      description={"Leistung: 374 PS (kombiniert)\nDrehmoment: 570 Nm\n0–100 km/h: 4,4 s\nHöchstgeschwindigkeit: 250 km/h\nAntrieb: Allrad (Hybrid)\nGetriebe: 6-Gang Automatik"} 
                    />         

                    {/*
                     <Product 
                      onAdd={() => this.addItem(1, 'Audi A5 S-Line', 45000)} 
                      img={process.env.PUBLIC_URL + "/assets/img/audi_a5_S-line.jpg"} 
                      title="Audi A5 S-Line" 
                      description={"Leistung: 265 PS\nDrehmoment: 370 Nm\n0–100 km/h: 5,5 s\nHöchstgeschwindigkeit: 250 km/h\nAntrieb: Allrad\nGetriebe: 7-Gang S tronic"} 
                    />
                    <Product 
                      onAdd={() => this.addItem(1, 'BMW M2 Competition', 60000)} 
                      img={process.env.PUBLIC_URL + "/assets/img/bmw_m2_comp.jpg"}  
                      title="BMW M2 Competition" 
                      description={"Leistung: 410 PS\nDrehmoment: 550 Nm\n0–100 km/h: 4,2 s\nHöchstgeschwindigkeit: 280 km/h\nAntrieb: Hinterrad\nGetriebe: 7-Gang Doppelkupplung"} 
                    />         
                    <Product 
                      onAdd={() => this.addItem(1, 'Mercedes CLS AMG', 75000)} 
                     img={process.env.PUBLIC_URL + "/assets/img/mercedes_cls.jpg"} 
                      title="Mercedes CLS AMG" 
                      description={"Leistung: 612 PS\nDrehmoment: 850 Nm\n0–100 km/h: 3,7 s\nHöchstgeschwindigkeit: 250 km/h (abgeregelt)\nAntrieb: Allrad\nGetriebe: 9-Gang Automatik"} 
                    />*/}
                </div>   
                {this.state.showCart && (
                <ShoppingCart 
                items={this.state.items}
                onIncrease={this.increaseItem}
                onDecrease={this.decreaseItem}
                onClearCart={this.clearCart}
                />
                )}

            </div>
        </React.Fragment>;
    }
}
 
export default App
;