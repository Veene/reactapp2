import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            return response.json()
        })
        .then(users => {
            this.setState({ robots:users })
        })
        
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        //DONT DO THIS because it erases our preset robots from robots.js
        // this.setState({ robots: filteredRobots })
        console.log(event.target.value);
        
    }
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(robots.length ===0) {
            return <h1>LOADING</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                    
                </div>
                
            )
        }
        
        }
    }
    
export default App;