import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsPersonFill } from "react-icons/bs";
import CreateProjectComponent from "./createProjectComponent";
import { Link } from 'react-router-dom';

export default function PersonalProject(props) {

  // const [eachProject, setEachProject] = useState([]);
  const [projects, setProject] = useState([]);
  // const [currentProTemp, setCurrentProTemp] = useState('');

  
  useEffect(() => {
    async function fetchData() {
      const userId = props.userId;
      try {
        await axios.get("/api/all_project", { userId }).then((res) => {
          setProject(res.data);
        })
      } catch (ex) {
        console.error(ex);
      }
    }
    fetchData();
  });
  

  return (
    <div>
      <h3>
        <BsPersonFill className="mr-2" />
        Personal Boards
      </h3>
      <div className="row">
        {
          projects.map( project => {
            return (
              <div className="col-3 mb-3" key={project.id}>
                <Link className="card card_radius cursor_pointer" to={ `/project/${ project.id }` } 
                  style={{ height: '09rem', backgroundColor: `${project.color}` }} >
                  <h6 className="card-text text-white m-3">{project.name}</h6>
                </Link>
              </div>
            )
          })
        }
        <CreateProjectComponent user_id={props.userId} />
      </div>
      {/* {currentProTemp} */}
    </div>
  )
}