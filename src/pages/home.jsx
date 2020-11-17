import React, { useState, useEffect } from 'react';
import axios from "axios";
import { DashBoardNavbar } from "../components/navbar";
import { DiTrello } from 'react-icons/di';
import { CgIfDesign } from 'react-icons/cg';
import { AiFillBank } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import RecentView from '../components/recentView';
import PersonalProject from '../components/personalProject';
import HomeComponent from '../components/homeComponent';
// import { useParams } from "react-router-dom";

export default function Home( { match } ) {
    const user_id = match.params.id;
    const [projects, setProject] = useState([]);
    const [homeBoard, setHomeBoard] = useState(false);
   


    // const handleChange = async () => {
    //     try {
    //         await axios.get("/api/all_project").then((res) => {
    //             setProject(res.data);
    //             // console.log(res.data);
    //         });
    //     } catch (ex) {
    //         console.error(ex);
    //     }
    // };

    // console.log(user_id)

    useEffect(() => {
        async function fetchData() {
            try {
                await axios.get("/api/review_project", { user_id }).then((res) => {
                    setProject(res.data);
                    // console.log(res.data);
                });
            } catch (ex) {
                console.error(ex);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <DashBoardNavbar />
            <div className="container" style={{ paddingTop: '10em' }}>
                <div className="row">
                    <div className="col-2">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action pointer_cursor  border-none active" onClick={() => setHomeBoard(!homeBoard)}><DiTrello className="mr-2" />Boards</li>
                            <li className="list-group-item list-group-item-action pointer_cursor  border-none"><CgIfDesign className="mr-2" />Templates</li>
                            <li className="list-group-item list-group-item-action pointer_cursor  border-none" onClick={() => setHomeBoard(true)}><AiFillBank className="mr-2" />Home</li>
                        </ul>
                        <div className="my-3">
                            <h5>TEAMS</h5>
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action pointer_cursor border-none">
                                    <BiPlus className="mr-2" />
                                    Create a team
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-10">
                        { !homeBoard ?
                            <>
                                <RecentView data={projects} />
                                <PersonalProject userId={user_id} />
                            </> :
                            <HomeComponent />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}