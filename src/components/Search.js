/*
* 上部搜索模块
*/
import React,{Component} from 'react';

class Search extends Component{

	constructor(){
		super();
		this.state = {
			searchName:''
		};
	}
	changeSearchName(event){
		this.setState({
		   searchName:event.target.value
		});
	}

	handleSearch() {
		let name = this.state.searchName;
		this.props.searchName(name);
	}

	render(){
		return(
		  <div>
        	<input type="text" placeholder="enter the name you search"
        			value={this.state.searchName} onChange={this.changeSearchName.bind(this)}/>
        	<button onClick={this.handleSearch.bind(this)}>Search</button>
      	  </div>
			);
	};
}

export default Search;