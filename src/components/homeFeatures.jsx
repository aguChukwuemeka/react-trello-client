import React, { Component } from 'react';
import teamTasks from "../assets/trello-example111.png";
import infoGlance from "../assets/card-back.svg";
import Butler from "../assets/butler.png";
import { WorkTeamSection, InfoGlanceSection, ButlerSection } from './featureSection';



export default class HomeFeatures extends Component {
    state = {
        features:[
            {
                title: "Work with any team",
                description: "Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.",
                image: teamTasks
            },
            {
                title: "Information at a glance",
                description: "Dive into the details by adding comments, attachments, due dates, and more directly to Trello cards. Collaborate on projects from beginning to end.",
                image: infoGlance
            },
            {
                title: "Built-In Workflow Automation With Butler",
                description: "Let the robots do the work! Boost productivity by unleashing the power of automation across your entire team with Butler, and remove tedious tasks from your to-do lists with:",
                image: Butler,
                lists: [
                    'Rule-Based Triggers',
                    'Custom Card & Board Buttons',
                    'Calendar Commands',
                    'Due Date Commands'
                ]
            }
        ]
    };
    render() {
        return (
            <div>
                <WorkTeamSection workTeam={this.state.features[0]} />
                <InfoGlanceSection infoGlance={this.state.features[1]} />
                <ButlerSection butler={this.state.features[2]} />
            </div>
        )
    }
}


export function Planing() {
    return (
        <div className="planning p-3" style={{ margin: '6em auto'}}>
            <div className="container d-flex justify-content-center align-items-end" style={{ backgroundImage: "url('../assets/board-back.jpg')", height: '20rem' }}>
                <div className="text-center">
                    <h3>Start Planning Today</h3>
                    <p>Sign up and join over 1,000,000 teams worldwide who are using Trello to get more done.</p>
                    <button className="btn btn-success btn-lg">Get Started - It's Free!</button>
                </div>
            </div>
        </div>
    )
}
