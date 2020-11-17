import React from 'react';
import Trello_logo from '../assets/trello-logo.png';
import Trello_logo_trs from '../assets/trello-logo1.png';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { FaHome, FaTrello } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import { GrCircleInformation } from 'react-icons/gr';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';

export default function Navbar({ sticky, element }) {
  return (
      <React.Fragment>
          <div ref={element}></div>
          <nav className={sticky ? "navbar navbar-sticky shadow" : "navbar navbar-light"} style={{ backgroundColor: '#0079BF' }}>
              <a href="/" className="navbar-brand mr-auto">
                <img className="navbar--logo" src={ Trello_logo } style={{ width: "11rem", height: "3.4rem" }}  alt="Trello_logo.png format" />
              </a>
              <span className="">
                <Link className="btn btn-link text-white" to="/login">Log In</Link>
                <Link className ="btn btn-light text-primary" to="/sign-up" >Sign up</Link>
            </span>
          </nav>
      </React.Fragment>
    );
}


export function DashBoardNavbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light navbar-fixed-top" style={{ backgroundColor: '#0079BF', color: '#fff' }}>
        <form className="form-inline search_div">
          <div className="d-flex" >
            <button type="button" className=" mr-2 btn btn-light"><FaHome /></button>
            <button type="button" className=" m-auto btn btn-light"><CgMenuGridR /></button>
            <button type="button" className=" mx-2 btn btn-light"><FaTrello className="mr-2" />Boards</button>
          </div>
          <span className="d-flex sm-mt-2 search_form">
            <input className="form-control mr-sm-2 navSearch" type="search" aria-label="Search" />
            <BiSearchAlt className="search_icon" />
          </span>
        </form>
        <a href="/" className="navbar-brand ">
          <img className="navbar--logo" src={ Trello_logo } style={{ width: "11rem", height: "3.4rem" }}  alt="Trello_logo.png format" />
        </a>
        <div className="d-flex">
          <button type="button" className=" mr-2 btn btn-light"><GoPlus /></button>
          <button type="button" className=" m-auto btn btn-light"><GrCircleInformation /></button>
          <button type="button" className=" mx-2 btn btn-light"><IoMdNotificationsOutline /></button>
          <button type="button" className="btn btn-warning rounded-circle d-flex align-items-center px-2">AC</button>
        </div>
      </nav>
    </React.Fragment>
    );
}



export function DashBoardNavbarTransparent() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light navbar-fixed-top"
        style={{ backgroundColor: 'rgba(18, 18, 0, 0.75)', color: '#fff' }}>
        <form className="form-inline search_div">
          <div className="d-flex" >
            <button type="button" className=" mr-2 btn btn-light"><FaHome /></button>
            <button type="button" className=" m-auto btn btn-light"><CgMenuGridR /></button>
            <button type="button" className=" mx-2 btn btn-light"><FaTrello className="mr-2" />Boards</button>
          </div>
          <span className="d-flex sm-mt-2 search_form">
            <input className="form-control mr-sm-2 navSearch" type="search" aria-label="Search" />
            <BiSearchAlt className="search_icon" />
          </span>
        </form>
        <a href="/" className="navbar-brand ">
          <img className="navbar--logo" src={ Trello_logo_trs } style={{ width: "11rem", height: "3.4rem" }}  alt="Trello_logo.png format" />
        </a>
        <div className="d-flex">
          <button type="button" className=" mr-2 btn btn-light"><GoPlus /></button>
          <button type="button" className=" m-auto btn btn-light"><GrCircleInformation /></button>
          <button type="button" className=" mx-2 btn btn-light"><IoMdNotificationsOutline /></button>
          <button type="button" className="btn btn-warning rounded-circle d-flex align-items-center px-2">AC</button>
        </div>
      </nav>
    </React.Fragment>
    );
}