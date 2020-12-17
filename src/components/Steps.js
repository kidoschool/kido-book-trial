import React, { Component } from 'react';

class Steps extends Component {

    render() {
        return (
            <div className="row form-steps pt-4">
                <div className={"col-lg-3 col-3 " + (this.props.step > 0 ? 'active' : '')}>
                <i className="far fa-address-book" aria-hidden="true"></i><br/><small>Parent Details</small></div>
                <div className={"col-lg-3 col-3 " + (this.props.step > 1 ? 'active' : '')}>
                    <i className="fas fa-child" aria-hidden="true"></i><br/><small>Child Details</small></div>
                <div className={"col-lg-3 col-3 " + (this.props.step > 2 ? 'active' : '')}>
                    <i className="fas fa-graduation-cap" aria-hidden="true"></i><br/><small>Choose Learning</small></div>
                <div className={"col-lg-3 col-3 " + (this.props.step > 3 ? 'active' : '')}>
                    <i className="fas fa-check-circle" aria-hidden="true"></i><br/><small>Select Program</small></div>
            </div>
        )
    }
}

export default Steps;
