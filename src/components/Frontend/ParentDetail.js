import React, { Component } from 'react';

class ParentDetail extends Component {

    render() {
        return (
            <>
                <section className="step1">
                    <div className="card col-lg-12">
                        <div className="card-body">
                        <h1 className="py-3">Help us get in touch with you</h1>
                        <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="parentfname">First Name</label>
                                    <input type="text" className="form-control" id="parentfname" name="parentfname" 
                                    value={this.props.parentfname} 
                                    onChange={this.props.onChange} 
                                    placeholder="Enter your first name"/>
                                    <span className="text-danger"><small>{this.props.parentfnameError}</small></span>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="parentfname">Last Name</label>
                                    <input type="text" className="form-control" id="parentlname" name="parentlname" 
                                    value={this.props.parentlname} 
                                    onChange={this.props.onChange} 
                                    placeholder="Enter your last name"/>
                                    <span className="text-danger"><small>{this.props.parentlnameError}</small></span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="number" className="form-control" id="phone" name="phone" 
                                    value={this.props.phone} 
                                    onChange={this.props.onChange} 
                                    placeholder="Enter your phone number"/>
                                    <span className="text-danger"><small>{this.props.phoneError}</small></span>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" className="form-control" id="email" name="email" 
                                    value={this.props.email} 
                                    onChange={this.props.onChange} 
                                    placeholder="Enter your email address"/>
                                    <span className="text-danger"><small>{this.props.emailError}</small></span>
                                </div>
                            </div>
                            <button type="submit" onClick={this.props.next} className="btn btn-primary float-right">Submit</button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ParentDetail;
