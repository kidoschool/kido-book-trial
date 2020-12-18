import React, { Component } from 'react';

class SelectSchool extends Component {

    render() {
        return (

            <div className="step3">
            <div className="card col-lg-12">
                <div className="card-body">
                <h1 className="py-3">Select Now the best learning option for <span>{this.props.childfname}</span></h1>
                <div className="form-row">
                <div className="form-group col-md-12">
                <div class="card-deck">
                    <div class="card free-trial">
                        <div className="bg-primary text-center p-5"><h4 className="text-white pb-5">1 Week Free Trial</h4></div>
                        <div class="card-body">
                        <p class="card-text">
                            <ul>
                                <li>Experience the power of Kido Home through free trial classes for an entire week - <strong>2 Years To 6 Years</strong></li>
                                <li>Trial classes are 50-60 minutes</li>
                                <li>Batches are held in small groups</li>
                                <li>Absolutely free and with no obligations.</li>
                                <li>All aspects of our program will be covered.</li>
                            </ul>
                        </p>
                        </div>
                        <div class="card-footer text-center">
                        <button className="btn btn-primary1 btn-sm" onClick={this.props.next}>Book Now</button>
                        </div>
                    </div>
                    <div class="card virtual">
                        <div className="bg-success text-center p-5"><h4 className="text-white">The Virtual Preschool  @ ₹ 4000 for the first month (50% off)</h4></div>
                        <div class="card-body">
                        <p class="card-text">
                            <ul>
                                <li>India’s first virtual preschool- Online learning - <strong>2 Years To 6 Years</strong></li>
                                <li>5 days a week live classes with access to qualified teachers.</li>
                                <li>Customized and Personalized teaching.</li>
                                <li>Monthly progress report  with certification.</li>
                                <li>Smart Kit included (Engagement kit).</li>
                            </ul>
                        </p>
                        </div>
                        <div class="card-footer text-center">
                        <button className="btn btn-success btn-sm" onClick={this.props.next}>Book Now</button>
                        </div>
                    </div>
                    <div class="card smartkit">
                        <div className="bg-warning text-center p-5"><h4 className="text-white pb-4">Smart Kit Program <br/>@ ₹ 4,000 only</h4></div>
                        <div class="card-body">
                        <p class="card-text">
                            <ul>
                                <li>Parent driven program at your own pace and time - <strong>18 Months To 6 Years</strong></li>
                                <li>2 days a week live classes for personal and social development</li>
                                <li>Access to Smart kit monthly activities and worksheets which Includes Music, Yoga and a foreign language</li>
                                <li>Access to qualified teachers 8 hours a month</li>
                                <li>Guidance and Support based on the activity box.</li>
                            </ul>
                        </p>
                        </div>
                        <div class="card-footer text-center">
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
