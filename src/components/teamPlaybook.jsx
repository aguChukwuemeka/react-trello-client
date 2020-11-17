import React from 'react';
import Appstore from "../assets/btn-appstore-black.png"
import Playstore from "../assets/btn-playstore-black.png"
import Sync from '../assets/updated-layouts-sync.png';
import Platform from '../assets/updated-layouts-platform.png';
import Collab from '../assets/updated-layouts-collab.png';


const items = (
    [
        {
            head: 'A Productivity Platform',
            text: 'It’s easy to get your team up and running with Trello. We’ve collected all of the boards and tools your team needs to succeed in one handy resource.',
            image: Collab,
            button: 'Make A Game Plan',
        },
        {
            head: 'Always In Sync',
            text: 'Integrate the apps your team already uses directly into your workflow.Power - Ups turn Trello boards into living applications to meet your team\'s unique business needs.',
            image: Platform,
            button: 'Power-up Your Workflow',
        },
        {
            head: 'Card title',
            text: 'No matter where you are, Trello stays in sync across all of your devices. Collaborate with your team anywhere, from sitting on the bus to sitting on the beach.',
            image: Sync,
            button: 'Make A Game Plan',
        }
    ]
);

export default function TeamPlaybook() {
    return (
        <div className="container" style={{margin: '4em auto'}}>
            <div className="col-10 offset-1">
                <div className="text-center pb-4">
                    <h2>The Team Playbook</h2>
                    <p>Use Trello the way your team works best. We’ve got the flexibility & features to fit any team’s style.</p>
                </div>
            </div>
            <div className="row">
                {
                    items.map((item, index) => {
                        return(
                            <div className="col-12 col-md-4" key={index}>
                                <div className="card text-center">
                                    <img src={ item.image } className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.head}</h5>
                                        <p className="card-text">{item.text}</p>
                                        {
                                            item.head === 'Card title' ?
                                                (<span className="d-flex justify-content-between">
                                                    <a href="/" className="btn">
                                                        <img src={ Appstore } className="card-img-top" alt="..." />
                                                    </a>
                                                    <a href="/" className="btn">
                                                        <img src={ Playstore } className="card-img-top" alt="..." />
                                                    </a>                            
                                                </span>) : (<a href="/" className="btn btn-info w-75">{item.button}</a>)
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })  
                }
            </div>
        </div>
    )
}


