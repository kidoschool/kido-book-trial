import React, { Component } from 'react';
import virtualschool from '../../assets/virtual-pre-school.png';
import smartschool from '../../assets/smart-school.png';

class LearningOptions extends Component {

    render() {
        return (

            <div className="step3">
            <div className="card col-lg-12">
                <div className="card-body">
                <h1 className="py-3">Choose the best learning option for <span>{this.props.childfname}</span></h1>
                <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="border shadow select-school">
                                <input className="form-check-input" type="radio" name="school" id="virtualpreschool"  
                                        value="virtualpreschool" 
                                        checked={this.props.selectedLearning === "virtualpreschool"} 
                                        onChange={this.props.onSelect}
                                />
                                <div className="d-flex justify-content-between">
                                <span className="text-success pr-4"><i className="fas fa-chalkboard-teacher fa-2x"></i></span>
                                <h4>The Virtual Preschool</h4>
                                <i>- Online learning</i>
                                <span className="text-info" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-info-circle fa-1x"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="border shadow select-school">
                                <input className="form-check-input" type="radio" name="school" id="smartkitschool" 
                                        value="smartkitschool" 
                                        checked={this.props.selectedLearning === "smartkitschool"} 
                                        onChange={this.props.onSelect}  
                                />
                                <div className="d-flex justify-content-between">
                                <span className="text-warning pr-4"><i className="fas fa-school fa-2x"></i></span>
                                <h4>Smart Kit Program</h4>
                                <i>- Parent driven teaching</i>
                                <span className="text-info" data-toggle="modal" data-target="#exampleModal1"><i className="fas fa-info-circle fa-1x"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <small className="text-danger py-2">{this.props.selectedLearningError}</small>
                    <div className="d-flex justify-content-between">
                    <button  type="submit" className="btn btn-danger" onClick={this.props.prev}>Back</button>
                    <button type="submit" onClick={this.props.next} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
             {/* // <!-- Modal for virtual pre-school --> */}
             <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">The Virtual Preschool</h5>
                    <i><small>- Online learning</small></i>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-12"><div className="modal-img pb-3"><img src={virtualschool} className="img-fluid" alt="vschool" /></div>
                            <ul>
                                <li>India’s first virtual preschool- Online learning - <strong>2 Years To 6 Years</strong></li>
                                <li>5 days a week live classNamees with access to qualified teachers.</li>
                                <li>Customized and Personalized teaching.</li>
                                <li>Monthly progress report  with certification.</li>
                                <li>Smart Kit included (Engagement kit).</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* // <!-- Modal-ends --> */}
            {/* // <!-- Modal for smart kit --> */}
            <div className="modal fade" id="exampleModal1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Smart Kit Program</h5>
                    <i><small>- Parent driven teaching</small></i>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-12"><div className="modal-img pb-3"><img src={smartschool} className="img-fluid" alt="sschool" /></div>
                            <ul>
                                <li>Parent driven program at your own pace and time - <strong>18 Months To 6 Years</strong></li>
                                <li>2 days a week live classNamees for personal and social development</li>
                                <li>Access to Smart kit monthly activities and worksheets which Includes Music, Yoga and a foreign language</li>
                                <li>Access to qualified teachers 8 hours a month</li>
                                <li>Guidance and Support based on the activity box.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* // <!-- Modal-ends --> */}
        </div>


        )
    }
}

export default LearningOptions;
