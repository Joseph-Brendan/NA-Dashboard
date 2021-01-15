import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader
} from "../../store/actions";

class SidebarContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
       
    }
    
    componentDidMount() {
        this.initMenu();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
          
            if (this.props.type !== prevProps.type) {
                this.initMenu();
            }

        }
    }

    initMenu() {
            new MetisMenu("#side-menu");

            var matchingMenuItem = null;
            var ul = document.getElementById("side-menu");
            var items = ul.getElementsByTagName("a");
            for (var i = 0; i < items.length; ++i) {
                if (this.props.location.pathname === items[i].pathname) {
                    matchingMenuItem = items[i];
                    break;
                }
            }
            if (matchingMenuItem) {
                this.activateParentDropdown(matchingMenuItem);
            }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add("mm-active");
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");

                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add("mm-active"); // li
                    parent3.childNodes[0].classList.add("mm-active"); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add("mm-active");
                    }
                }
            }
            return false;
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                 <div id="sidebar-menu">

                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li className="menu-title">{this.props.t('')}</li>

                            <li>
                                <Link to="/dashboard" className="waves-effect">
                                    <i className="ri-dashboard-line"></i><span className="badge badge-pill badge-success float-right"></span>
                                    <span className="ml-1">{this.props.t('Nigerian Army')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className=" waves-effect">
                                    {/* <i className="ri-calendar-2-line"></i> */}
                                    <span className="ml-1">{this.props.t('Kanban Board')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className=" waves-effect">
                                    <i className="ri-calendar-2-line"></i>
                                    <span className="ml-1">{this.props.t('Calendar')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className=" waves-effect">
                                    {/* <i className="ri-calendar-2-line"></i> */}
                                    <span className="ml-1">{this.props.t('Notifications')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className=" waves-effect">
                                    {/* <i className="ri-calendar-2-line"></i> */}
                                    <span className="ml-1">{this.props.t('API/Integrations')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className=" waves-effect">
                                    {/* <i className="ri-calendar-2-line"></i> */}
                                    <span className="ml-1">{this.props.t('Location')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className=" waves-effect">
                                    {/* <i className="ri-calendar-2-line"></i> */}
                                    <span className="ml-1">{this.props.t('Authentication')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className=" waves-effect">
                                    {/* <i className="ri-calendar-2-line"></i> */}
                                    <span className="ml-1">{this.props.t('General Auditing')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className=" waves-effect">
                                    {/* <i className="ri-calendar-2-line"></i> */}
                                    <span className="ml-1">{this.props.t('Settings')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="#" className=" waves-effect">
                                    <i className="ri-chat-1-line"></i>
                                    <span className="ml-1">{this.props.t('Chat')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/#" className="has-arrow waves-effect">
                                    <i className="ri-store-2-line"></i>
                                    <span className="ml-1">{this.props.t('Ecommerce')}</span>
                                </Link>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to="#">{this.props.t('Products')}</Link></li>
                                    <li><Link to="#">{this.props.t('Product Detail')}</Link></li>
                                    <li><Link to="#">{this.props.t('Orders')}</Link></li>
                                    <li><Link to="#">{this.props.t('Customers')}</Link></li>
                                    <li><Link to="#">{this.props.t('Cart')}</Link></li>
                                    <li><Link to="#">{this.props.t('Checkout')}</Link></li>
                                    <li><Link to="#">{this.props.t('Shops')}</Link></li>
                                    <li><Link to="#">{this.props.t('Add Product')}</Link></li>
                                </ul>
                            </li>
                
                            <li>
                                <Link to="/#" className="has-arrow waves-effect">
                                    <i className="ri-mail-send-line"></i>
                                    <span className="ml-1">{this.props.t('Email')}</span>
                                </Link>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to="#">{this.props.t('Inbox')}</Link></li>
                                    <li><Link to="#">{this.props.t('Read Email')}</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="#" className=" waves-effect">
                                    <i className="ri-artboard-2-line"></i>
                                    <span className="ml-1">{this.props.t('Kanban Board')}</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return { ...state.Layout };
  };

export default withRouter(connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader
})(withNamespaces()(SidebarContent)));
