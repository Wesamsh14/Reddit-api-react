import React, { Component } from 'react';
import axios from 'axios';
import ShowPosts from './ShowPosts';
import './assets/App.css'

//search parameter for API link
let SEARCH_PARAMETER = '';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      query: '',
      //for the output if no results found
      queryFinal: null
    };
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit = e => {
    SEARCH_PARAMETER = (this.state.query).replace(' ', '%20');
    e.preventDefault();
    axios
      .get(`https://www.reddit.com/r/subreddits/search.json?q=${SEARCH_PARAMETER}`)
      .then(res => {
        this.setState({
          result: res.data.data.children,
          queryFinal: this.state.query
        })
      });
      
    }


  render() {
    return (
      <div className="App">
        <h2>Search on Reddit</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}  
            value={this.state.query} 
            placeholder="Search in reddit world!"></input>
          <input type='submit' value='searsh' /> 
        </form>
        <ShowPosts posts={this.state.result} query={this.state.queryFinal} />

      </div>
    );
  }
}

export default App;
