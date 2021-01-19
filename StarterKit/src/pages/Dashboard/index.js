import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from "reactstrap";

class StarterPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Nazox", link : "#" },
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
                          <Col md={3}>
                            <Card>
                                <CardBody>
                                    <div>
                                        <i className="ri-survey-line" style={{fontSize: "38px", fontWeight: "regular"}}></i>
                                    </div>
                                </CardBody>
                            </Card>
                          </Col>
                        </Row>


                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default StarterPage;
