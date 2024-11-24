import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <p className="text-center">
            &copy; 2023 <ion-icon name="bag"></ion-icon> Negr00 . All rights reserved.</p>
        </Container>
    </footer>
  )
}

export default Footer
