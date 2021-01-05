import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Axios from 'axios';


class SelectSchool extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // selectedChildage: '',
            groupContents: {},
        }
        
      }

        // Get Data from LocalStorage ..
        componentDidMount() {

            let dd  = this.childData = JSON.parse(localStorage.getItem('childdetails'));
    
            if (localStorage.getItem('childdetails')) {
                this.setState({
                    selectedChildage: this.childData.selectedChildage
                })
            } else {
                this.setState({
                    selectedChildage: ''
                })
            }

    
            Axios.get('https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents.json')
            .then(response => {
                // console.log(response);
                this.setState({
                    groupContents: response.data
                })
            })
                .catch(error => {console.log(error)});
         
         
            }

    render() {
        let dd  = JSON.parse(localStorage.getItem('childdetails'));
        const isLoggedIn = dd.selectedChildage;

        return (

            <div className="step3">
            <div className="card col-lg-12">
                <div className="card-body">
                <h1 className="py-3">Select the best learning option for <span>{this.props.childfname}</span></h1>
                <div className="form-row">
                <div className="form-group col-md-12">
                <div className="card-deck">
                    <div className="card free-trial">
                        <div className="bg-primary text-center p-5"><h4 className="text-white pb-5">1 Week Free Trial</h4></div>
                        <div className="card-body">
                        <div className="card-text">
                            <ul>
                                <li>Experience the power of Kido Home through free trial classNames for an entire week - <strong>2 Years To 6 Years</strong></li>
                                <li>Trial classNamees are 50-60 minutes</li>
                                <li>Batches are held in small groups</li>
                                <li>Absolutely free and with no obligations.</li>
                                <li>All aspects of our program will be covered.</li>
                            </ul>
                        </div>
                        </div>
                        {Object.entries(this.state.groupContents).map((item) => (
                        <div key={item[1].ageGroup}>
                        {item[1].ageGroup == isLoggedIn ? (
                                <div className="card-footer text-center" >
                                <Link className="btn btn-primary1 btn-sm"
                                    to={{
                                        pathname: "/schedule/" + item[1].ageGroup,
                                        state: {
                                            groupId: item[0],
                                        },
                                        }}
                                >Book Now</Link>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        ))}
                    </div>
                    <div className="card virtual">
                        <div className="bg-success text-center p-5"><h4 className="text-white">The Virtual Preschool  @ ₹ 4000 for the first month (50% off)</h4></div>
                        <div className="card-body">
                        <div className="card-text">
                            <ul>
                                <li>India’s first virtual preschool- Online learning - <strong>2 Years To 6 Years</strong></li>
                                <li>5 days a week live classNamees with access to qualified teachers.</li>
                                <li>Customized and Personalized teaching.</li>
                                <li>Monthly progress report  with certification.</li>
                                <li>Smart Kit included (Engagement kit).</li>
                            </ul>
                        </div>
                        </div>
                        <div className="card-footer text-center">
                        <button className="btn btn-success btn-sm" onClick={this.props.next}>Book Now</button>
                        </div>
                    </div>
                    <div className="card smartkit">
                        <div className="bg-warning text-center p-5"><h4 className="text-white pb-4">Smart Kit Program <br/>@ ₹ 4,000 only</h4></div>
                        <div className="card-body">
                        <div className="card-text">
                            <ul>
                                <li>Parent driven program at your own pace and time - <strong>18 Months To 6 Years</strong></li>
                                <li>2 days a week live classNamees for personal and social development</li>
                                <li>Access to Smart kit monthly activities and worksheets which Includes Music, Yoga and a foreign language</li>
                                <li>Access to qualified teachers 8 hours a month</li>
                                <li>Guidance and Support based on the activity box.</li>
                            </ul>
                        </div>
                        </div>
                        <div className="card-footer text-center">
                        <button className="btn btn-warning btn-sm" onClick={this.props.next}>Book Now</button>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="d-flex justify-content-between">
                    <button  type="submit" className="btn btn-danger" onClick={this.props.prev}>Back</button>
                    {/* <button type="submit" onClick={this.props.next} className="btn btn-primary">Submit</button> */}
                    </div>
                </div>
            </div>
            </div>

        )
    }
}

export default SelectSchool;
