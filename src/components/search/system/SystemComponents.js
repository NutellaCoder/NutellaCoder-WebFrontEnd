import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Button,
  Card,
  Row,
  Col,
  Modal,
  Container,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import { BsGear } from 'react-icons/bs';
import Graph from './Graph';
import 'react-vis/dist/style.css';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../data/chartCards/actions.js';
const SystemItemHead = ({ cards }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [title, setTitle] = useState(cards[0]);
  const dispatch = useDispatch();
  const handleCreate = () => {
    setShow(false);
    dispatch(Actions.addSystemChart(title));
  };

  const handleSelect = (id) => {
    setTitle(id);
  };
  return (
    <>
      <Navbar
        style={{
          marginTop: '2rem',
          backgroundColor: 'white',
          marginLeft: '2rem',
          marginRight: '2rem',
          borderTopRightRadius: '0.7rem',
          borderTopLeftRadius: '0.7rem',
        }}
      >
        <Navbar.Brand style={{ fontWeight: 'bold' }}>SYSTEMS</Navbar.Brand>
        <Button variant="light">
          <BsGear />
        </Button>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Button variant="dark" onClick={handleShow}>
              NEW PANEL
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Container>
            <Col>
              <Modal.Title>New Chart</Modal.Title>
            </Col>
            <Col>
              <p>Select the Indicator for Xais</p>
            </Col>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <p>Select the Indicator for Xais</p>

          <DropdownButton
            id="dropdown-basic-button"
            title={title ? title : cards[0]}
          >
            {cards.map((v, index) => (
              <Dropdown.Item key={index} eventKey={v} onSelect={handleSelect}>
                {v}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleCreate}>
            CREATE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const SystemComponents = ({ models, graph, isLoading = true }) => {
  const cards = useSelector((state) => state.cards.systemCardsName);
  return (
    <div style={{ borderRadius: '0.7rem' }}>
      <SystemItemHead cards={cards}></SystemItemHead>
      <Row
        style={{
          marginLeft: '2rem',
          marginRight: '2rem',
          backgroundColor: 'white',
          borderBottomLeftRadius: '0.7rem',
          borderBottomRightRadius: '0.7rem',
        }}
      >
        {cards.map((card, index) => (
          <Col
            key={index}
            sm={4}
            style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
          >
            <Card
              style={{ height: '20rem', width: 'auto', borderColor: 'white' }}
            >
              <h5>{card}</h5>
              {isLoading && <p>Loading</p>}
              {!isLoading && (
                <Graph models={models} graph={graph[cards.indexOf(card)]} />
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SystemComponents;
