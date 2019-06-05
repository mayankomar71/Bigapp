import React, { Component } from 'react';
import Content from './content'
import axios from 'axios'
import Filters from './filters'
import Header from './Header'

class HomeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arr: [],
      currentuser: localStorage.getItem('Currentuser'),
      isloggedIn: localStorage.getItem('isLoggedIn'),
  
    }
}
 
  componentWillMount(){
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    res.data.sort((a,b) => a["name"].localeCompare(b["name"]))
    this.setState({
        arr:res.data,
        jobs:res.data
    })
    console.log(res)
    }).catch((err) => {
        return err;
    })

  }



  filterdata = (filterarray) => {
    this.setState({
      arr: filterarray
    })


  }

  render() {

 
    return (
      <div className="App">
        <Header></Header>
        <Filters Mydata={this.filterdata} jobData={this.state.jobs}></Filters>
        <Content  data={this.state.arr}></Content>

      </div>
    );

  }

}

export default HomeComponent;
