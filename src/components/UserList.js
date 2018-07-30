/*
* 下部用户列表模块
*/
import React,{Component} from 'react';
import axios from 'axios';

class UserList extends Component{

	constructor(){
		super();
		this.state = {
			firstView:true,
			users:null,
			error:null
		};
	}

	componentWillReceiveProps(nextProps){
		let userName = nextProps.userName;
		console.log('发送ajax请求',userName);
		const url = `https://api.github.com/search/users?q=${userName}`;

		axios.get(url)
  			.then((response) => {
    		// handle success
   			console.log(response);
   			this.setState({firstView:false,users:response.data.items});
  			})
  			.catch((error) => {
    		// handle error
    		console.log(error);
    		this.setState({error:error.toString()});
  			})
	}

	render(){
		if(this.state.firstView){
			return <h2>Enter name to search</h2>;
		}else {
			return (
		  <div className="row">
		  {
		  	this.state.users.map((user) => (
		  	  <div className="card" key={user.html_url}>
        	    <a href={user.html_url} target="_blank">
          	    <img src={user.avatar_url} style={{width: '100px'}}/>
        	    </a>
        	    <p className="card-text">{user.login}</p>
      		  </div>
		  	))
		  }      		
      	  </div>
		);
	  }
		
	}
}

export default UserList;