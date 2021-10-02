import React from 'react'
import Zoom from 'react-reveal/Zoom'

const GithubLink = () => {
  return (
    <section className="page-section bg-dark text-white">
      <div className="container text-center">
        <i className="fab fa-6x fa-github text-white mb-4"></i>
        <Zoom bottom>
          <h2 className="mb-4">check out my work on github!</h2>
          <a
            className="btn btn-light btn-xl text-lowercase"
            href="https://github.com/danpops"
          >
            github/danpops
          </a>
        </Zoom>
      </div>
    </section>
  )
}

export default GithubLink
