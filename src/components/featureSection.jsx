import React from 'react';

export function WorkTeamSection(props) {
    // console.log(props.workTeam)
    return (
        <div className="container" style={{ margin: '.4em auto' }}>
            <div className="row d-flex align-items-center" style={{ padding: '4em 0em' }}>
                <div className="col-12 col-md-6 py-4">
                    <h4>{props.workTeam.title}</h4>
                    <p>{props.workTeam.description}</p>
                    <a href="/" className="btn btn-secondary">Start doing</a>
                </div>
                <div className="col-12 col-md-6 py-4" >
                    <img className="img-fluid img-responsive" src={props.workTeam.image} alt="Team Tasks" />
                </div>
            </div>
        </div>
    );
}

export function InfoGlanceSection(props) {
    // console.log(props.infoGlance)
    return (
        <div className="container" style={{ margin: '.4em auto' }}>
            <div className="row d-flex align-items-center" style={{ padding: '4em 0em' }}>
                <div className="col-12 col-md-6 py-4">
                    <img className="img-fluid img-responsive" src={props.infoGlance.image} alt="Team Tasks" />
                </div>
                <div className="col-12 col-md-6 py-4">
                    <h4>{props.infoGlance.title}</h4>
                    <p>{props.infoGlance.description}</p>
                </div>
            </div>
        </div>
    );
}

export function ButlerSection(props) {
    // console.log(props.butler)
    return (
        <div className="container" style={{ margin: '.4em auto' }}>
            <div className="row d-flex align-items-center" style={{ padding: '4em 0em' }}>
                <div className="col-12 col-md-6 py-4">
                    <h4>{props.butler.title}</h4>
                    <p>{props.butler.description}</p>
                    <ul className="list-unstyled">
                        {
                            props.butler.lists.map((list, index) => {
                                return <li key={index} className="pl-3">{ list }</li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-12 col-md-6 py-4">
                    <img className="img-fluid img-responsive" src={props.butler.image} alt="Team Tasks" />
                </div>
            </div>
        </div>
    );
}

