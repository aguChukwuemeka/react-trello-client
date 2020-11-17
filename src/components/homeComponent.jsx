import React from "react";
import HomeCardImG from "../assets/homeCard.svg";
import RedCArd from "../assets/crud6.jpg";
import { BiPlus } from "react-icons/bi";

// import RedCArd from '../assets/crud6.jpg';

export default function HomeComponent() {
  return (
    <div className="row">
      <div className="col-8">
        <div className="card px-5 mx-4">
          <div className="shadow">
            <img src={HomeCardImG} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <h3 className="">Recently Viewed</h3>
        <ul className="list-group">
          <li
            className="list-group-item list-group-item-action pointer_cursor border-none"
            style={{ width: "", height: "", alignItems: "center" }}
          >
            <img
              src={RedCArd}
              className="img-thumbnail mr-3"
              style={{ width: "4em", height: "3em" }}
              alt="..."
            />
            Startev Projects
          </li>
        </ul>
        <div style={{ marginTop: "4em" }}>
          <h3 className="text-uppercase">Links</h3>
          <ul className="list-group">
            <li
              className="list-group-item list-group-item-action pointer_cursor border-none"
              style={{ width: "", height: "", alignItems: "center" }} >
              <BiPlus
                className="mr-3 p-2"
                style={{ background: "lightgrey", width: "2em", height: "2em" }}
              />
              Create a board
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
