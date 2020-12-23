import React, { Component } from 'react';
import Axios from 'axios';

class Schedule extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedChildage: '',
            scheduleDates: '',
            ageGroups: {},
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

    
            Axios.get('https://kido-book-trial-default-rtdb.firebaseio.com/ageGroups.json')
            .then(response => {
                // console.log(response);
                this.setState({
                    ageGroups: response.data
                })
            })
                .catch(error => {console.log(error)});
         
            


            Axios.get(`https://kido-book-trial-default-rtdb.firebaseio.com/ageGroups/${dd.selectedChildage}/scheduleDates.json`)
            .then(response => {
                console.log(response);
                this.setState({
                    scheduleDates: response.data
                })
            })
                .catch(error => {console.log(error)});
         
            }
    

    render() {

        // let data = Object.entries(this.state.ageGroups).map((item) => {
        //     return (
        //         <>
               
        //         </>
        //     )
        // })

        return (

          
            <section className="kids-schedule py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                    <div className="scheduler border bg-white p-4">
                        <h5>Schedule a Trial className for Age Group - <span className="childage-text">{this.state.selectedChildage}</span></h5>
                        <p>Select a Date</p>
                       
                            <div className="available-dates pb-4">
                            {Object.entries(this.state.scheduleDates).map((item) => {
                                return (
                                    <>
                            <div className="dynamic-dates">
                                <input type="radio" id="dateselect1" name="schedule_date"  className="inputdates" 
                                value=""/>
                                <label className="" htmlFor="dateselect1">
                                    <div className="sdday">{item[0]}</div>
                                    <div className="sddate">21</div>
                                    <div className="sdmonth">Dec</div>
                                </label>
                            </div>
                            </>
                              )
                            })}
                            </div>

                            <p>Select a Time For <span className="childage-text"><b>Mon 11 Jan</b></span></p>

                            <div className="timeslotselect">
                            {Object.entries(this.state.ageGroups).map((item) => {
                                return (
                                <>			
                                <div className="timeslotdiv">
                                    <input type="radio" required="" className="timeslotinput" name="schedule_time" id="timdateslot1" value="10:30" data-time="10:30 AM"/>
                                    <label htmlFor="timdateslot1"></label>
                                </div>
                                </>
                                )
                            })}
                            </div>
                           

                        <div className="selecteddate mt-3">
							<div className="select-day"><small>Monday</small></div>
							<div className="select-date"><small>11th</small></div>
							<div className="select-month"><small>January</small></div>
							<div className="select-time"><small>04:30 PM</small></div>
						</div>

                        <div className="confirmstaus">
							<p>Due to high demand, it’s difficult to reschedule a trial className. <br/>Please pick your slot carefully.</p>
						</div>

                        <div className="form-group">
							<button className="btn button-confirm-details trialBtn" type="submit" name="submit">
								Confirm Trial className
							</button>
						</div>
                    </div>
                    </div>
                </div>
            </div>
            </section>
           
        )
    }
}

export default Schedule;
