import React, { Component } from 'react';
import ParentDetail from './ParentDetail';
import ChildDetail from './ChildDetail';
import LearningOptions from './LearningOptions';
import SelectSchool from './SelectSchool';
import Steps from './Steps';
import Confirmation from './Confirmation';

class Registration extends Component {

    constructor(){
        super()
        this.state = {
            step: 1,

            parentfname: '',
            parentfnameError: '',
            parentlname: '',
            parentlnameError: '',
            phone: '',
            phoneError: '',
            email: '',
            emailError: '',

            childfname: '',
            childlname: '',
            selectedChildage: false,
            birthdate: '',
            birthmonth: '',
            birthyear: '',
            dateofbirthError: '',
            monthofbirthError: '',
            yearofbirthError: '',


            selectedLearning: false,

        }
        
    }

    //set value in localStorage
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('childdetails', JSON.stringify(nextState));
    }

    validate = () => {
        let isError = false;
        const errors = {

            emailError: '',
            parentfnameError: '',
            parentlnameError: '',
            phoneError: '',

            dateofbirthError: '',
            monthofbirthError: '',
            yearofbirthError: '',

            selectedLearningError: '',
        
        }

        if(this.state.parentfname.length < 1){
            isError = true;
            errors.parentfnameError = 'First Name cannot be blank';
        }

        if(this.state.parentlname.length < 1){
            isError = true;
            errors.parentlnameError = 'Last Name cannot be blank';
        }

        if(this.state.phone.length !== 10){
            isError = true;
            errors.phoneError = 'Phone Number must be 10 digit only';
        }

        if(this.state.email.indexOf('@') === -1){
            isError = true;
            errors.emailError = 'Please enter a valid email address';
        }

        if(this.state.step > 1){
            if(this.state.birthdate.length <=0){
                isError = true;
                errors.dateofbirthError = 'Plese Select Date';
            }
        }

        if(this.state.step > 1){
            if(this.state.birthmonth.length <=0){
                isError = true;
                errors.monthofbirthError = 'Plese Select Month';
            }
        }

        if(this.state.step > 1){
            if(this.state.birthyear.length <=0){
                isError = true;
                errors.yearofbirthError = 'Plese Select Year';
            }
        }

        if(this.state.step > 2){
            if(this.state.selectedLearning === false){
                isError = true;
                errors.selectedLearningError = 'Please Select any one learning option';
            }
        }

        this.setState({
            ...this.state,
            ...errors
        })

        return isError;
    }

    next(){
        // alert(`You chose the ${this.state.selectedChildage} pizza.`);
        const err = this.validate()
        if(!err){
            this.setState({
                step:this.state.step + 1,
        
                parentfnameError: '',
                parentlnameError: '',
                phoneError: '',
                emailError: '',

                dateofbirthError: '',
                monthofbirthError: '',
                yearofbirthError: '',

                selectedLearningError: '',

            })
        }

    }


    prev(){
        const err = this.validate()
        if(!err){
            this.setState({step:this.state.step - 1})
        }
    }

    prev1(){
        this.setState({step:this.state.step - 1})
    }

    handleOnChange(e){
        this.setState({[e.target.id]: e.target.value})
    }

    handleOnCheck(e){
       this.setState({selectedChildage: e.target.value});
    }
   

    handleOnSelect(e){
        this.setState({selectedLearning: e.target.value});
    }

    render() {
      switch (this.state.step) {
          case 1:
            return <div>
                <Steps step={this.state.step}/>
                <ParentDetail
                   parentfname={this.state.parentfname}
                   parentfnameError={this.state.parentfnameError}
                   parentlname={this.state.parentlname}
                   parentlnameError={this.state.parentlnameError}
                   phone={this.state.phone}
                   phoneError={this.state.phoneError}
                   email={this.state.email}
                   emailError={this.state.emailError}
                   onChange={this.handleOnChange.bind(this)}
                   next={this.next.bind(this)}/>
                </div>
          case 2:
            return <div>
                <Steps step={this.state.step}/>
                <ChildDetail
                   childfname={this.state.childfname}
                   childlname={this.state.childlname}
                   selectedChildage={this.state.selectedChildage}
                   birthdate={this.state.birthdate}
                   birthmonth={this.state.birthmonth}
                   birthyear={this.state.birthyear}
                   dateofbirthError={this.state.dateofbirthError}
                   monthofbirthError={this.state.monthofbirthError}
                   yearofbirthError={this.state.yearofbirthError}
                   onChange={this.handleOnChange.bind(this)}
                   onCheck={this.handleOnCheck.bind(this)}
                   next={this.next.bind(this)}
                   prev={this.prev.bind(this)}
                   prev1={this.prev1.bind(this)}/>
                </div>
          case 3:
            return <div>
                <Steps step={this.state.step}/>
                <LearningOptions
                   selectedLearning={this.state.selectedLearning}
                   selectedLearningError={this.state.selectedLearningError}
                   childfname={this.state.childfname}
                   onChange={this.handleOnChange.bind(this)}
                   onSelect={this.handleOnSelect.bind(this)}
                   next={this.next.bind(this)}
                   prev={this.prev.bind(this)}/>
                </div>
          case 4:
            return <div>
                <Steps step={this.state.step}/>
                <SelectSchool
                   childfname={this.state.childfname}
                   next={this.next.bind(this)}
                   prev={this.prev.bind(this)}/>
                </div>
          case 5:
            return <>
            <Confirmation />
            </>
          default:
            return null
        }
    
    }
}

export default Registration;
