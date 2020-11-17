import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { DashBoardNavbarTransparent } from "../components/navbar";
import Board from 'react-trello';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';


// import data from "../common/data.json";
// import Board from "react-trello";



const SingleProject = ({ match }) => {

    const id = match.params.id;
    
    const [eachProject, setEachProject] = useState([]);

    //   console.log(id)

    useEffect(() => {
        // console.log(id)
        async function fetchData() {
            try {
                await axios
                    .get(`/api/single_project/${id}`)
                    .then((res) => {
                        setEachProject(res.data);
                    });
                await axios
                    .post('/api/dump_id', {id})
                    .then((res) => {
                        console.log(res.data);
                    });
            } catch (ex) {
                console.error(ex);
            }
        }
        fetchData(id);
    });
    
    return (
        <div>
            <DashBoardNavbarTransparent />
            {
                eachProject.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <div style={{
                                height: '',
                                backgroundColor: `${item.color}`
                            }} className="text-white">
                                <ul className="nav nav-tabs mb-4" style={{ paddingTop: '4.9em' }}>
                                    <li className="nav-item d-flex justify-content-between w-100">
                                        <span className="nav-link pointer_cursor active">{item.name}</span>
                                        <Link to='/home' className="nav-link active"><FaArrowAltCircleLeft /></Link>
                                    </li>
                                </ul>
                                <div className="" style={{}}>
                                    <DataI onHold={item.color} />
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}



// export function CardsProject() {
//     return (
//         <div className="card" style={{ width: "18rem" }}>
//             <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="card-link">Card link</a>
//                 <a href="#" className="card-link">Another link</a>
//             </div>
//         </div>
//     )
// }



export class DataI extends React.Component {


    
    render() {
        
        const data = {
            lanes: [
                {
                    id: 'lane1',
                    title: 'Planned Tasks',
                    label: '2/2',
                    cards: [
                        { _id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins' },
                        { _id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } }
                    ]
                },
                {
                    id: 'lane2',
                    title: 'Ongoing',
                    label: '0/0',
                    cards: [
                        { _id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins' },
                        { _id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } }
                    ]
                },
                {
                    id: 'lane3',
                    title: 'Completed',
                    label: '0/0',
                    cards: []
                }
            ]
        };


        return <Board style={{
            backgroundColor: `${this.props.onHold}`,
            height: '84.3vh'
        }} data={data} />
	}
}

export default SingleProject;