import React, {Component} from 'react';
import {Container, Row, Col, Card, CardBody} from "reactstrap";

class StarterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        {title: "Nigerian Army", link: "#"},
        {title: "Dashboard", link: "#"},
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
                      <i className="ri-survey-line" style={{fontSize: "38px", fontWeight: "regular"}}/>
                      <h6 className="font-weight-bolder">Inventory</h6>
                      <p className="mb-2" style={{fontSize: "12px"}}>Inventory record and schedule for all battle assets
                        and equipment</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col md={6} lg={3}>
                <Card>
                  <CardBody>
                    <div>
                      <i className="ri-truck-line" style={{fontSize: "38px", fontWeight: "regular"}}/>
                      <h6 className="font-weight-bolder">Vehicle/Equipment</h6>
                      <p className="mb-2" style={{fontSize: "12px"}}>Track maintenance and battle-worthiness of vehicles
                        & equipment</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col md={6} lg={3}>
                <Card>
                  <CardBody>
                    <div>
                      <i className="ri-bar-chart-line" style={{fontSize: "38px", fontWeight: "regular"}}/>
                      <h6 className="font-weight-bolder">Technicians</h6>
                      <p className="mb-2" style={{fontSize: "12px"}}>Manage Technicians and their maintenance activities
                        on assets</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Row>
                  <Col xs={12}>
                    <div className="d-flex mb-2"
                         style={{position: "relative", height: "auto", background: "rgba(255,61,96,.15)"}}>
                      <h6 className="d-block m-0 px-3 py-2 bg-danger text-white"
                          style={{fontWeight: "bolder", fontSize: "12px", borderTopLeftRadius: "4px"}}>
                        SUMMARY
                      </h6>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} lg={6}>
                    <Card>
                      <CardBody>
                        <div className="d-flex d-inline-flex align-items-center mb-3">
                          <div className="bg-success mr-2"
                               style={{height: "10px", width: "10px", borderRadius: "50%"}}/>
                          <h6 className="m-0" style={{fontWeight: "bold"}}>Battle Worthiness Status</h6>
                        </div>

                        <table className="small-datatable">
                          <tbody>
                          <tr style={{background: "rgba(116,120,141,0.2)"}}>
                            <td>Total Count</td>
                            <td>11397</td>
                          </tr>
                          <tr style={{background: "rgb(69,176,192,0.2)"}}>
                            <td>On Hand</td>
                            <td>101</td>
                          </tr>
                          <tr style={{background: "rgba(252,185,44,0.2)"}}>
                            <td>On Loan</td>
                            <td>6(0.8%)</td>
                          </tr>
                          </tbody>
                        </table>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md={12} lg={6}>
                    <Card>
                      <CardBody>
                        <div className="d-flex d-inline-flex align-items-center mb-3">
                          <div className="bg-danger mr-2" style={{height: "10px", width: "10px", borderRadius: "50%"}}/>
                          <h6 className="m-0" style={{fontWeight: "bold"}}>Serviceable Status</h6>
                        </div>

                        <table className="small-datatable">
                          <tbody>
                          <tr style={{background: "rgba(255,61,96,0.2)"}}>
                            <td>Item Lines</td>
                            <td>11397</td>
                          </tr>
                          <tr style={{background: "rgb(52,58,64,0.2)"}}>
                            <td>Low Stock</td>
                            <td>0</td>
                          </tr>
                          <tr style={{background: "rgba(74,163,255,0.2)"}}>
                            <td>No Stock</td>
                            <td>6(0.8%)</td>
                          </tr>
                          </tbody>
                        </table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <Card>
                      <CardBody>
                        <div className="d-flex justify-content-between mb-3">
                          <h6>Recent Activity Feed</h6>
                          <i className="ri-menu-5-line"/>
                        </div>

                        <div className="d-flex justify-content-start mb-4">
                          <div className="d-block mt-1 mr-2" style={{height: "100%"}}>
                            <i className="ri-bar-chart-line rounded-circle" style={{padding: "10px 10px", background: "rgba(116,120,141,0.3)"}}></i>
                          </div>
                          <div>
                            <p className="m-0 font-weight-bold font-family-serif mb-1" style={{lineHeight: "1"}}>
                              22 April, 2021
                            </p>
                            <p className="m-0 mb-2 font-weight-bold" style={{lineHeight: "1"}}>
                              Sent battle worthiness report on Truck 891 & Radio TCH90
                            </p>
                            <p className="m-0" style={{fontSize: "11px", lineHeight: "1"}}>
                              Status: Completed
                            </p>
                          </div>
                        </div>

                        <div className="d-flex justify-content-start mb-4">
                          <div className="d-block mt-1 mr-2" style={{height: "100%"}}>
                            <i className="ri-bar-chart-line rounded-circle" style={{padding: "10px 10px", background: "rgba(116,120,141,0.3)"}}></i>
                          </div>
                          <div>
                            <p className="m-0 font-weight-bold font-family-serif mb-1" style={{lineHeight: "1"}}>
                              22 April, 2021
                            </p>
                            <p className="m-0 mb-2 font-weight-bold" style={{lineHeight: "1"}}>
                              Sent battle worthiness report on Truck 891 & Radio TCH90
                            </p>
                            <p className="m-0" style={{fontSize: "11px", lineHeight: "1"}}>
                              Status: Completed
                            </p>
                          </div>
                        </div>

                        <div className="d-flex justify-content-start mb-4">
                          <div className="d-block mt-1 mr-2" style={{height: "100%"}}>
                            <i className="ri-bar-chart-line rounded-circle" style={{padding: "10px 10px", background: "rgba(116,120,141,0.3)"}}></i>
                          </div>
                          <div>
                            <p className="m-0 font-weight-bold font-family-serif mb-1" style={{lineHeight: "1"}}>
                              22 April, 2021
                            </p>
                            <p className="m-0 mb-2 font-weight-bold" style={{lineHeight: "1"}}>
                              Sent battle worthiness report on Truck 891 & Radio TCH90
                            </p>
                            <p className="m-0" style={{fontSize: "11px", lineHeight: "1"}}>
                              Status: Completed
                            </p>
                          </div>
                        </div>

                        <div className="p-2">
                          <a href="" className="font-family-serif font-weight-bold" style={{fontSize: "12px"}}>See More</a>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>

              <Col md={6}>
                <Row>
                  <Col xs={12}>
                    <div className="d-flex mb-2"
                         style={{position: "relative", height: "auto", background: "rgba(255,61,96,.15)"}}>
                      <h6 className="d-block m-0 px-3 py-2 bg-danger text-white"
                          style={{fontWeight: "bolder", fontSize: "12px", borderTopLeftRadius: "4px"}}>
                        INVENTORY STOCK
                      </h6>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Card>
                      {/*<div className="d-flex d-inline-flex align-items-center mb-3 p-4">*/}
                      {/*  <div className="bg-success mr-2" style={{height: "10px", width: "10px", borderRadius: "50%"}}/>*/}
                      {/*  <h6 className="m-0" style={{fontWeight: "bold"}}>Battle Worthiness Status</h6>*/}
                      {/*</div>*/}


                      <table className="table table-bordered m-0">
                        <thead>
                          <tr>
                            <th className="font-weight-bolder text-white bg-secondary">Part Number</th>
                            <th className="font-weight-bolder">Manufacturer</th>
                            <th className="font-weight-bolder">In Stock</th>
                            <th className="font-weight-bolder">Reorder Point</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-white bg-secondary">GL8-FG-UV</td>
                            <td>Fluke</td>
                            <td>820</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td className="text-white bg-secondary">GL8-FG-UV</td>
                            <td>Fluke</td>
                            <td>820</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td className="text-white bg-secondary">GL8-FG-UV</td>
                            <td>Fluke</td>
                            <td>820</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td className="text-white bg-secondary">GL8-FG-UV</td>
                            <td>Fluke</td>
                            <td>820</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td className="text-white bg-secondary">GL8-FG-UV</td>
                            <td>Fluke</td>
                            <td>820</td>
                            <td>50</td>
                          </tr>

                          <tr>
                            <td className="text-white bg-secondary">GL8-FG-UV</td>
                            <td>Fluke</td>
                            <td>820</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td className="text-white bg-secondary">GL8-FG-UV</td>
                            <td>Fluke</td>
                            <td>820</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td className="text-white bg-secondary">GL8-FG-UV</td>
                            <td>Fluke</td>
                            <td>820</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td className="text-white bg-secondary">GL8-FG-UV</td>
                            <td>Fluke</td>
                            <td>820</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td className="text-white bg-secondary">GL8-FG-UV</td>
                            <td>Fluke</td>
                            <td>820</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td className="text-white bg-secondary">GL8-FG-UV</td>
                            <td>Fluke</td>
                            <td>820</td>
                            <td>50</td>
                          </tr>
                        </tbody>
                      </table>
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
