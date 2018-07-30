import React, { Component } from 'react';
import Search from './Search';
import UserList from './UserList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName:''
    };
  }

  searchName(name){
    let userName = name;
    this.setState({userName});
  }

  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
        </section>
        <Search searchName={this.searchName.bind(this)}/>
        <UserList userName={this.state.userName}/>
      </div>  
    );
  }
}

export default App;
