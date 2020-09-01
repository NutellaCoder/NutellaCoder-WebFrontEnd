import React, { Component } from "react";
import "./ProjectItem.css";
import { Card, Badge, Form, Button, Table } from "react-bootstrap";

import { BsGear } from "react-icons/bs";
class ProjectItem extends Component {
  render() {
    const {
      name,
      description,
      userNumber,
      runsNumber,
      hoursNumber,
    } = this.props;

    return (
      <div>
        <a href="/workspace">
          <Card className="card">
            <Card.Body>
              <Form inline>
                <Card.Title className="title">{name}</Card.Title>

                <Badge className="badge">Public</Badge>
                <Button variant="light" className="ml-auto">
                  <BsGear />
                </Button>
              </Form>
              <Card.Text>{description}</Card.Text>

              <Table
                borderless
                style={{ color: "#8a8a8a", borderTop: "0.06rem solid #ededed" }}
              >
                <thead style={{ textAlign: "center" }}>
                  <tr>
                    <th style={{ borderRight: "0.06rem solid #ededed" }}>
                      {userNumber} user
                    </th>
                    <th style={{ borderRight: "0.06rem solid #ededed" }}>
                      {runsNumber} runs
                    </th>
                    <th> {hoursNumber} hours</th>
                  </tr>
                </thead>
              </Table>
            </Card.Body>
          </Card>
        </a>
      </div>
    );
  }
}

export default ProjectItem;
