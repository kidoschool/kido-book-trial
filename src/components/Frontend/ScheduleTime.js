import React, { Component } from 'react';
import Axios from 'axios';
import $ from "jquery";


class ScheduleTime extends Component {

    constructor(props) {
        super(props);

        this.state = {
            schTime : '',
            selectedStime: ''
        }
        this.handleOnCheck = this.handleOnCheck.bind(this);
      }


    componentDidMount() {


    Axios.get(`https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents/${this.props.groupId}/scheduleDate/${this.props.scheduleDateId}/scheduleTime.json`)
    .then((response) => {
        //    console.log(response);
        this.setState({
            schTime: response.data
        })
    })
        .catch((error) => console.log(error));

    }

    handleOnCheck(e){
        this.setState({selectedStime: e.target.value});
     }

     timeSlotClick(e){
        $("#selectedTime").empty().text($(e.target).text());
     }


       //set value in localStorage
       componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('childscheduletime', JSON.stringify(nextState));
    }

    render() {


        return (
            <>
            {Object.entries(this.state.schTime).map((item) => {
                return (
             <div className="timeslotdiv" key={item[0]}>
                <input type="radio" required="" className="timeslotinput" name="schedule_time" id={item[0]} 
                    value={item[1].timeSlot}
                    checked={this.state.selectedStime === item[1].timeSlot}
                    onChange={this.handleOnCheck}/>
                 <label onClick={this.timeSlotClick} htmlFor={item[0]}>{item[1].timeSlot}</label>
            </div>
             )
            }
            )}


            </>
        )}
        
}

export default ScheduleTime;