import React, { Component } from 'react';

import './assets/css/styles.css';

import { Navigation, Header, About, Skills, Portfolio, Contact, Footer } from './components/Index';

class App extends Component {
    
    render() {

        return (

            <div className="App">
                
                <Navigation></Navigation>
                <Header></Header>
                <About></About>
                <Skills></Skills>
                <Portfolio></Portfolio>
                <Contact></Contact>
                <Footer></Footer>

            </div>
        );
    }
}

export default App;
