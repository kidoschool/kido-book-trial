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
            child1: '',
            child2: '',
            child3: '',
            child4: '',
            child5: '',
            dateofbirth: '',
            dateofbirthError: '',

            virtualpreschool: '',
            smartkitschool: '',

            // country: '',
            // countryError: '',
            // postcode: '',
            // postcodeError: '',
            // terms: false,
            // termsError: ''
        }
        
    }

    validate = () => {
        let isError = false;
        const errors = {

            emailError: '',
            parentfnameError: '',
            parentlnameError: '',
            phoneError: '',

            dateofbirthError: '',
            // confirmError: '',

            // forenameError: '',
            // surnameError: '',
            // usernameError: '',

            // termsError: ''
        }

        if(this.state.parentfname.length < 1){
            isError = true;
            errors.parentfnameError = 'First Name cannot be blank';
        }

        if(this.state.parentlname.length < 1){
            isError = true;
            errors.parentlnameError = 'Last Name cannot be blank';
        }

        if(this.state.phone.length <= 9){
            isError = true;
            errors.phoneError = 'Phone Number must be 10 digit only';
        }

        if(this.state.email.indexOf('@') === -1){
            isError = true;
            errors.emailError = 'Please enter a valid email address';
        }

        if(this.state.step > 1){
            if(this.state.dateofbirth.length < 1){
                isError = true;
                errors.dateofbirthError = 'Plese Select Date of Birth';
            }
        }

        if(this.state.step > 2){
            // if(this.state.terms === false){
            //     isError = true;
            //     errors.termsError = 'Please accept the Terms and Conditions by ticking the checkbox';
            // }
        }

        if(this.state.step > 3){
            // if(this.state.terms === false){
            //     isError = true;
            //     errors.termsError = 'Please accept the Terms and Conditions by ticking the checkbox';
            // }
        }

        this.setState({
            ...this.state,
            ...errors
        })

        return isError;
    }

    next(){
        const err = this.validate()
        if(!err){
            this.setState({
                step:this.state.step + 1,
        
                parentfnameError: '',
                parentlnameError: '',
                phoneError: '',
                emailError: '',

                dateofbirthError: '',
                // confirmError: '',

                // forenameError: '',
                // surnameError: '',
                // usernameError: '',
            })
        }
    }

    prev(){
        const err = this.validate()
        if(!err){
            this.setState({step:this.state.step - 1})
        }
    }

    handleOnChange(e){
        this.setState({[e.target.id]: e.target.value})
        // this.setState({[e.target.id]: !this.state.virtualpreschool})
        // this.setState({[e.target.id]: !this.state.smartkitschool})
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
                   child1={this.state.child1}
                   child2={this.state.child2}
                   child3={this.state.child3}
                   child4={this.state.child4}
                   child5={this.state.child5}
                   dateofbirth={this.state.dateofbirth}
                   dateofbirthError={this.state.dateofbirthError}
                   onChange={this.handleOnChange.bind(this)}
                   next={this.next.bind(this)}
                   prev={this.prev.bind(this)}/>
                </div>
          case 3:
            return <div>
                <Steps step={this.state.step}/>
                <LearningOptions
                   virtualpreschool={this.state.virtualpreschool}
                   smartkitschool={this.state.smartkitschool}
                   childfname={this.state.childfname}
                   onChange={this.handleOnChange.bind(this)}
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
            return <Confirmation />
          default:
            return null
        }
    }
}

export default Registration;
