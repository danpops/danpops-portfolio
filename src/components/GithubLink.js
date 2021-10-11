import React from 'react'
import Zoom from 'react-reveal/Zoom'
import { Container, Button } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'

const GithubLink = () => {
  return (
    <section className="page-section bg-dark text-white">
      <Container className="text-center">
        <FaGithub size={90} className="text-white mb-4" />
        <Zoom bottom>
          <h2 className="mb-4">check out my work on github!</h2>
          <Button
            size="xl"
            className="btn-light text-lowercase"
            href="https://github.com/danpops"
          >
            github/danpops
          </Button>
        </Zoom>
      </Container>
    </section>
  )
}

export default GithubLink
