import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Script from 'react-load-script'
import { Link } from 'react-scroll'
import links from '../data/navLinks.js'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Script
          url="../js/scripts.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />

        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
        >
          <Container>
            <Link to="page-top" smooth={true} duration={500}>
              <a className="navbar-brand js-scroll-trigger" href="#page-top">
                {'<danpops />'}
              </a>
            </Link>

            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                {links.map((link, index) => (
                  <Link key={index} to={link.to} smooth={true} duration={500}>
                    <li className="nav-item">
                      <a
                        className="nav-link js-scroll-trigger"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </Container>
        </nav>
      </div>
    )
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }
}
