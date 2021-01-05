import React, { Component } from 'react';
import Axios from 'axios';
import Moment from 'react-moment';
import ScheduleTime from "../../../components/Frontend/ScheduleTime";
import $ from "jquery";


class Schedule extends Component {
  

    constructor(props) {
        super(props);

        this.state = {
            selectedChildage: '',
            scheduleDates: '',
            selectedSdate: '',
        }

        // const name = props.match.params.ageGroup;
        this.handleOnCheck = this.handleOnCheck.bind(this);
      }

        // Get Data from LocalStorage ..
        componentDidMount() {

            this.childData = JSON.parse(localStorage.getItem('childdetails'));
    
            if (localStorage.getItem('childdetails')) {
                this.setState({
                    selectedChildage: this.childData.selectedChildage
                })
            } else {
                this.setState({
                    selectedChildage: ''
                })
            }

                
            Axios.get(`https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents/${this.props.location.state.groupId}/scheduleDate.json`)
            .then(response => {
                // console.log(response);
                this.setState({
                    scheduleDates: response.data
                })
            })
                .catch(error => {console.log(error)});

        }
          

            handleOnCheck(e){
                this.setState({selectedSdate: e.target.value});
                $("#selectedTime").empty();
             }


                //set value in localStorage
            componentWillUpdate(nextProps, nextState) {
                localStorage.setItem('childscheduledetails', JSON.stringify(nextState));
            }


    render() {

        let dt  = JSON.parse(localStorage.getItem('childscheduledetails'));
        // const getdate = dt.selectedChildage;

        return (

            <section className="kids-schedule py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                    <div className="scheduler border bg-white p-4">
                        <h5>Schedule a Trial className for Age Group - <span className="childage-text">{this.state.selectedChildage}</span></h5>
                        <p>Select a Date</p>
                       
                            <div className="available-dates pb-4">
                            {Object.entries(this.state.scheduleDates).map((item,k) => {
                                return (
                                    <div className="dynamic-dates" key={item[0]} >
                                        <input type="radio" id={item[0]} name="schedule_date" className="inputdates" 
                                            value={item[1].date}
                                            checked={this.state.selectedSdate === item[1].date}
                                            onChange={this.handleOnCheck} 
                                            />
                                        <label value={item[1].date} className="" htmlFor={item[0]} >
                                        <div className="sdmonth">
                                            <Moment  format="ddd DD MMM">{item[1].date}</Moment>
                                        </div>
                                        </label>
                                    </div>
                                    )
                                })
                            }
                            </div>

                            <p>Select a Time For <span className="childage-text"><b>{this.state.selectedSdate ? (<Moment  format="ddd DD MMM">{this.state.selectedSdate}</Moment>):("Please select the date above.")}</b></span></p>
                            <div className="timeslotselect">
                            {Object.entries(this.state.scheduleDates).map((item,k) => {
                                return (
                                <div className="d-flex"  key={item[0]}>
                                  {item[1].date === dt.selectedSdate ? (			
                                    <ScheduleTime
                                        scheduleDateId={item[0]}
                                        groupId={this.props.location.state.groupId}>
                                    </ScheduleTime>
                                     ) : (
                                         ""
                                    )}
                                </div>
                                )
                            })}
                            </div>
                           

                        <div className="selecteddate mt-3">
                        {this.state.selectedSdate ? (<div className="select-day"><small><Moment  format="dddd DD MMMM">{this.state.selectedSdate}</Moment></small>&emsp;<small id="selectedTime"></small></div>):(<span className="text-white">Please select the date above</span>)}
						</div>

                        <div className="confirmstaus">
							<p>Due to high demand, it’s difficult to reschedule a trial className. <br/>Please pick your slot carefully.</p>
						</div>

                        <div className="form-group">
							<button className="btn button-confirm-details trialBtn" type="submit" name="submit">
								Confirm Trial Class
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
