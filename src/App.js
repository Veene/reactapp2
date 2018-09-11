import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            robots: robots,
            searchField: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        //DONT DO THIS because it erases our preset robots from robots.js
        // this.setState({ robots: filteredRobots })
        console.log(event.target.value);
        
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots} />
                </div>
                
            )
        }
    }
    
export default App;