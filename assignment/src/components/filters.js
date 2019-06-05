import React, { Component } from 'react'
import '../Styles/content.css'

class Filters extends Component {
    constructor(props) {
        super(props)

        this.state = {
            SearchData: ''
           }

    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value.toLowerCase() });
    }
    submitData = (event) => {

        event.preventDefault();

        const job_data = this.props.jobData;
        if (this.state.SearchData === '') {
            var data = job_data;
        }
        else {
            data = (job_data.filter((element) => {
                
                if (this.state.SearchData && (element.name.toLowerCase().includes(this.state.SearchData)||element.username.toLowerCase().includes(this.state.SearchData)||element.company.name.toLowerCase().includes(this.state.SearchData)||element.phone.toLowerCase().includes(this.state.SearchData))) {
                    return true;
                }
                return false;
            }));

        }

        this.props.Mydata(data);
    }

    render() {
        const divstyle = {
            marginBottom: "20px"
        }

        return (

            <section style={divstyle} className="search-sec">
                <div className="container">
                    <form onSubmit={this.submitData}  method="post" >
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input name="SearchData" type="text" value={this.state.location} onChange={this.handleChange} className="form-control search-slt" placeholder="Search"></input>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <button type="submit" className="btn btn-success wrn-btn">Search</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>
            </section>


        )
    }

}
export default Filters

