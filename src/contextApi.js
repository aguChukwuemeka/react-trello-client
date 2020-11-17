import React, { Component } from 'react';
import items from "./data";


const Context = React.createContext();


export default class Provider extends Component {

    state = {
        features: []
    };

    componentDidMount() {
        let features = this.formatData(items);
        // const { workTeam, infosGlance, autoButler } = features;
        this.setState({
            features
        });
    }
    
    formatData(items) {
        let tempItems = items.map(item => {
            let features = { ...item };
            return features;
        });
        return tempItems;
    }


    render() {
        // console.log({...this.state});
        return (
            <Context.Provider value={{...this.state,}} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;