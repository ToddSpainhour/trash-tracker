import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    const buildNavbar = () => {
      const { authenticated } = this.props;
      if (authenticated) {
        return (
          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to='/trackmytrash'>Track My Trash</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/learnmore'>Learn More</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={this.logMeOut}>Logout</NavLink>
          </NavItem>
        </Nav>
        );
      }
      return (
        <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/7daychallenge">Why Trash My Trash?</NavLink>
        </NavItem>
        <NavItem>
        <NavLink tag={RRNavLink} to='/learnmore'>Learn More</NavLink>
        </NavItem>
      </Nav>
      );
    };

    return (
      <div className="MyNavbar">
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Trash Tracker</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          {buildNavbar()}
        </Collapse>
      </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
