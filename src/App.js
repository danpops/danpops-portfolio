import React, { Component } from 'react';

import './assets/css/styles.css';

import { 
    Navigation, 
    Header, 
    About, 
    Skills, 
    Portfolio, 
    GithubLink, 
    Contact, 
    Footer 
} from './components/Index';

class App extends Component {
    
    render() {

        return (

            <div className="App">
                
                <Navigation />
                <Header />
                <About />
                <Skills />
                <Portfolio />
                <GithubLink />
                <Contact />
                <Footer />

            </div>
        );
    }
}

export default App;
