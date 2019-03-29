import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      search:'',
      posts:[]
    }
  }

  textChange=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }
  
  formSubmit=(e)=>{
    e.preventDefault();
    axios.get(`https://www.reddit.com/search.json?q=${this.state.search}&limit=15`)
      .then((response)=> {
        console.log(response.data);
        const data = response.data.data.children.map(data=>data.data)
        var newarr = this.state.posts.concat(data);
        this.setState({ posts: newarr })
        console.log(data)

        
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='App'>
        <div>
          <form onSubmit={e=>this.formSubmit(e)}>
            <input
            name='search' type='text' placeholder='Search'
            onChange={this.textChange}
            />
          </form>
        </div>
       <div>{ this.state.posts.map((val, index)=>{
        return(
      <div>        
        <ul>
          <li key={index}>
            <p>
              {val.title}
            </p>
            <a href={val.url}>See more..</a>
            <hr />
          </li>
        </ul>
      </div>  
        );
       })       
       }
      </div>
    </div>
    );
  }
}

export default App;
