import React, { Component } from 'react'
class Content extends Component {
   

  render () {
      const jobdata=this.props.data
      return (
        <div className='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>FullName</th>
                <th>Phone</th>
                <th>User Name</th>
                <th>Company Name</th>
              </tr>
            </thead>
            <tbody>
            { jobdata.map((data,index) => {
                return(
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.username}</td>
                <td>{data.company.name}</td>
              </tr>
            )})}
            </tbody>
          </table>
        </div>
      )
    
  }
}

export default Content