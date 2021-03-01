import React, { Component } from 'react'
import ScriptTag from 'react-script-tag';

export default class About extends Component {
  render() {
      return (
            <div>
                <footer className="bg-light py-5">
                    <div className="container"><div className="small text-center text-muted">© 2021 - danpops.github.io</div></div>
                </footer>
                
                <ScriptTag src="https://code.jquery.com/jquery-3.5.1.slim.min.js" />
                <ScriptTag src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" />
                
                <ScriptTag src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js" />
                <ScriptTag src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js" />
               
                <ScriptTag src="js/scripts.js" />
            </div>
        )
    }   
}