import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from "reactstrap";

class StarterPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Nigerian Army", link : "#" },
                { title : "Dashboard", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Row>
                          <Col md={6} lg={3}>
                            <Card>
                                <CardBody>
                                    <div>
                                        <i className="ri-survey-line" style={{fontSize: "38px", fontWeight: "regular"}}></i>
                                        <h6 className="font-weight-bolder">Inventory</h6>
                                        <p className="mb-2" style={{fontSize: "12px"}}>Inventory record and schedule for all battle assets and equipment</p>
                                    </div>
                                </CardBody>
                            </Card>
                          </Col>

                          <Col md={6} lg={3}>
                            <Card>
                              <CardBody>
                                <div>
                                  <i className="ri-truck-line" style={{fontSize: "38px", fontWeight: "regular"}}></i>
                                  <h6 className="font-weight-bolder">Vehicle/Equipment</h6>
                                  <p className="mb-2" style={{fontSize: "12px"}}>Track maintenance and battle-worthiness of vehicles & equipment</p>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>

                          <Col md={6} lg={3}>
                            <Card>
                              <CardBody>
                                <div>
                                  <i className="ri-nurse-line" style={{fontSize: "38px", fontWeight: "regular"}}></i>
                                  <h6 className="font-weight-bolder">Technicians</h6>
                                  <p className="mb-2" style={{fontSize: "12px"}}>Manage Technicians and their maintenance activities on assets</p>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={6}>
                            <Row>
                              <Col xs={12}>
                                <div className="d-flex mb-2" style={{position: "relative", height: "auto", background: "rgba(255,61,96,.15)"}}>
                                  <h6 className="d-block m-0 px-3 py-2 bg-danger text-white" style={{fontWeight: "bolder", fontSize: "12px", borderTopLeftRadius: "4px"}}>SUMMARY</h6>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={12} lg={6}>
                                <Card>
                                  <CardBody>
                                    <p>Hello</p>
                                  </CardBody>
                                </Card>
                              </Col>

                              <Col md={12} lg={6}>
                                <Card>
                                  <CardBody>
                                    <p>Hello</p>
                                  </CardBody>
                                </Card>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default StarterPage;
