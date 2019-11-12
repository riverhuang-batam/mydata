import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import RiverPdf from './CVRiverApple.pdf'
import Riverpdfoto from './CVRiverApple.png'
import RiverPhoto from './me.jpg'
import motiveletter from './MotiveLetter.png'
import motiveletterpdf from './MotiveLetter.pdf'

export default class App extends Component{
  render(){
  return (
    <div>
    <Container>
    <div className="text-center mt-4 mb-4">
      <h1>River Data</h1>
      </div>
    <Row>
      <Col sm="4">
    <div className="text-center">
      <h2>CV</h2>
    <img src={Riverpdfoto} alt={Riverpdfoto} width="70%"/>
    <br/>
    <br/>
    <Button color="primary" href={RiverPdf} download>
      Download
    </Button>
    </div>

    </Col>
    <Col sm="4">
    <div className="text-center">
    <h2>Picture</h2>
    <img src={RiverPhoto} alt={RiverPhoto} width="65%"/>
    <br/>
    <br/>
    <Button color="primary" className="align-item-center" href={RiverPhoto} download>Download</Button>
    </div>
    </Col>
    <Col sm="4">
      <div className="text-center mb-4">
      <h2>Motive Letter</h2>
      <img src={motiveletter} alt={motiveletter} width="70%"/>
      <br/>
      <br/>
    <Button color="primary" href={motiveletterpdf} download>Download</Button>
    </div>
    
    </Col>
    </Row>
    </Container>
  </div>
  );
  }
}