import React from 'react';
import { Col, Row, Container as BootStrapContainer } from 'react-bootstrap';
import {
  BsFillAwardFill,
  BsHouseDoorFill,
  BsLayoutSplit,
  BsSearch,
  BsThreeDots,
  BsInfoCircleFill,
  BsPlusSquare
} from 'react-icons/bs';
const AppBoard = () => {
  return (
    <nav className="navbar-board">
      <BootStrapContainer fluid={true}>
        <Row>
          <Col className="col" xs={12} md={9}>
            <ul className="list-nav">
              <li className="nav-item">
                <BsFillAwardFill className="nav-item__icon" />
                <span>Trello Clone - MERN STACK</span>
              </li>
              <li className="nav-item">
                <span>Private WorkSpace</span>
              </li>
              <li className="nav-item-acc">
                <img
                  src="https://lh3.googleusercontent.com/ogw/ADea4I5sgu4mCPsb6CevnQx6C6Xzeo8J8XFBWNOJK98w=s32-c-mo"
                  alt=""
                  className="account-avtar"
                />
                <img
                  src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
                  alt=""
                  className="account-avtar"
                />
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81BES%2BtsVvL.png"
                  alt=""
                  className="account-avtar"
                />
                <img
                  src="https://cdn.britannica.com/q:60/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg"
                  alt=""
                  className="account-avtar"
                />
                <div className="acc-count">+7</div>
              </li>
              <li className="nav-item">
                <span>Invite</span>
              </li>
            </ul>
          </Col>
          <Col className="col" xs={12} md={3}>
            <ul className="list-nav right">
              <li className="nav-item">
                <BsThreeDots className="nav-item__icon" />
                <span>Show menu</span>
              </li>
            </ul>
          </Col>
        </Row>
      </BootStrapContainer>
    </nav>
  );
};

export default AppBoard;
