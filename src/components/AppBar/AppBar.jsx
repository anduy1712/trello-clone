import React from 'react';
import {
  Col,
  Row,
  Container as BootStrapContainer,
  Form,
  Button
} from 'react-bootstrap';
import {
  BsGrid3X3Gap,
  BsHouseDoorFill,
  BsLayoutSplit,
  BsSearch,
  BsBell,
  BsInfoCircleFill,
  BsPlusSquare
} from 'react-icons/bs';

const AppBar = () => {
  return (
    <nav className="navbar-app">
      <BootStrapContainer fluid={true}>
        <Row>
          <Col className="col" xs={12} md={5}>
            <ul className="list-nav">
              <li className="nav-item">
                <BsGrid3X3Gap className="nav-item__icon" />
              </li>
              <li className="nav-item">
                <BsHouseDoorFill className="nav-item__icon" />
              </li>
              <li className="nav-item">
                <BsLayoutSplit className="nav-item__icon" />
                <span>Boards</span>
              </li>
              <li className="nav-item">
                <input type="text" placeholder="Jump to..." />
                <BsSearch className="nav-item__icon" />
              </li>
            </ul>
          </Col>
          <Col className="col" xs={12} md={2}>
            <div className="logo_bar">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1200px-Trello_logo.svg.png"
                alt=""
              />
            </div>
          </Col>
          <Col className="col" xs={12} md={5}>
            <ul className="list-nav right">
              <li className="nav-item">
                <BsPlusSquare className="nav-item__icon" />
              </li>
              <li className="nav-item">
                <BsInfoCircleFill className="nav-item__icon" />
              </li>
              <li className="nav-item">
                <BsBell className="nav-item__icon" />
              </li>
              <li className="nav-item-acc">
                <img
                  src="https://lh3.googleusercontent.com/ogw/ADea4I5sgu4mCPsb6CevnQx6C6Xzeo8J8XFBWNOJK98w=s32-c-mo"
                  alt=""
                  className="account-avtar"
                />
              </li>
            </ul>
          </Col>
        </Row>
      </BootStrapContainer>
    </nav>
  );
};

export default AppBar;
