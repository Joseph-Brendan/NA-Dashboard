import React, { Component } from 'react';

import { Row, Col, Input, Button, Alert, Container, Label, FormGroup, Card, CardBody } from "reactstrap";

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { checkLogin, apiError } from '../../store/actions';

// import images
import NALogo from "../../assets/images/NA-logo.png";

class Login extends Component {
    loginUserType = "";

    constructor(props) {
        super(props);
        this.state = {  username : "admin@themesdesign.in", password : "123456" }
        this.handleSubmit = this.handleSubmit.bind(this);

        const pathname = props.location.pathname.split("/").filter(value => value !== "");
        if(pathname.length > 1) {
            this.loginUserType = pathname[0];
        }
    }

    handleSubmit(event, values) {
        this.props.checkLogin(values, this.props.history);
    }

    componentDidMount(){
        this.props.apiError("");
        document.body.classList.add("auth-body-bg");
    }

    componentWillUnmount(){
        document.body.classList.remove("auth-body-bg");
    }

    render() {
        return (
            <React.Fragment>
                <div className="home-btn d-none d-sm-block">
                    <Link to="/"><i className="mdi mdi-home-variant h2 text-white"/></Link>
                </div>

                <Container fluid>
                    <Row className="d-flex justify-content-center mb-3" style={{marginTop: "100px"}}>
                        <Col md={6} lg={4} className="text-center">
                            <Link to="/" className="logo d-block w-100 mb-1">
                                <img src={NALogo} height="60" alt="logo"/>
                            </Link>
                            <h6 className="text-uppercase" style={{fontSize: "12px", marginBottom: "2.5rem"}}>NIGERIAN ARMY</h6>

                            <h6 className="d-block text-uppercase mb-0 font-family-serif font-weight-bolder">
                                {this.loginUserType} Login
                            </h6>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-center">
                        <Col md={6} lg={4}>
                            <Card className="w-100">
                                <CardBody className="p-5">
                                    <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit}>
                                        <FormGroup className="auth-form-group-custom mb-4">
                                            <i className="ri-user-3-line auti-custom-input-icon" />
                                            <Label htmlFor="username" className="text-uppercase">{this.loginUserType ? this.loginUserType: 'Staff'} ID</Label>
                                            <AvField name="username" type="text" className="form-control" id="username" validate={{email: true, required: true}} placeholder="Enter your ID"/>
                                        </FormGroup>

                                        <div className="mt-4 text-center">
                                            <Button block color="success" className="w-md waves-effect waves-light font-weight-bold font-family-serif" type="submit">
                                                CONTINUE
                                            </Button>
                                        </div>
                                    </AvForm>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                {/*<Container fluid className="p-0">*/}
                {/*    <Row className="d-flex justify-content-center">*/}
                {/*        <Col lg={4}>*/}
                {/*            <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">*/}
                {/*                <div className="w-100">*/}
                {/*                    <Row className="justify-content-center">*/}
                {/*                        <Col lg={9}>*/}
                {/*                            <div>*/}
                {/*                                <div className="text-center">*/}
                {/*                                    <div>*/}

                {/*                                    </div>*/}

                {/*                                    <h4 className="font-size-18 mt-4">ADMIN LOGIN</h4>*/}
                {/*                                </div>*/}


                {/*                                {this.props.loginError && this.props.loginError ? <Alert color="danger">{this.props.loginError}</Alert> : null }*/}

                {/*                                <div className="p-2 mt-5">*/}
                {/*                                    <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit} >*/}


                {/*                                        /!*<FormGroup className="auth-form-group-custom mb-4">*!/*/}
                {/*                                        /!*    <i className="ri-lock-2-line auti-custom-input-icon" />*!/*/}
                {/*                                        /!*    <Label htmlFor="userpassword">Password</Label>*!/*/}
                {/*                                        /!*    <AvField name="password" value={this.state.password} type="password" className="form-control" id="userpassword" placeholder="Enter password"/>*!/*/}
                {/*                                        /!*</FormGroup>*!/*/}

                {/*                                        /!*<div className="custom-control custom-checkbox">*!/*/}
                {/*                                        /!*    <Input type="checkbox" className="custom-control-input" id="customControlInline"/>*!/*/}
                {/*                                        /!*    <Label className="custom-control-label" htmlFor="customControlInline">Remember me</Label>*!/*/}
                {/*                                        /!*</div>*!/*/}



                {/*                                        <div className="mt-4 text-center">*/}
                {/*                                            <Link to="/forgot-password" className="text-muted">*/}
                {/*                                                <i className="mdi mdi-lock mr-1" /> Forgot your password?*/}
                {/*                                            </Link>*/}
                {/*                                        </div>*/}
                {/*                                    </AvForm>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </Col>*/}
                {/*                    </Row>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Container>*/}
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { loginError } = state.Login;
    return { loginError };
}

export default withRouter(connect(mapStatetoProps, { checkLogin, apiError })(Login));
