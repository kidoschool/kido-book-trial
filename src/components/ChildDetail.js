import React, { Component } from 'react';
import child1 from '../assets/child-icon1.png';
import child2 from '../assets/child-icon2.png';
import child3 from '../assets/child-icon3.png';
import child4 from '../assets/child-icon4.png';
import child5 from '../assets/child-icon5.png';
import $ from "jquery";


class ChildDetail extends Component {
    

    componentDidMount() {
        
        $('#next1').click(function () {
            $('.next-1').css("visibility","hidden");
        });

        $('#next2').click(function () {
            $('.next-2').css("visibility","hidden");
        });


        $('#next1').click(function () {
            
            $('#back1').css("visibility","hidden");
            $('html, body').animate({ scrollTop: $(document).height() }, 500);
            
        });

        $('#next2').click(function () {
            
            $('#back2').css("visibility","hidden");
            $('html, body').animate({ scrollTop: $(document).height() }, 500);
            
        });
        
    }
    

    render() {
        return (

        <section className="step2">    
        <div className="card col-lg-12">
            <div className="card-body">
            <h1 className="py-3">Let’s get to know your child</h1>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="childfname">First Name</label>
                        <input type="text" className="form-control" id="childfname" name="childfname" 
                        value={this.props.childfname}
                        onChange={this.props.onChange} 
                        placeholder="Enter Your First Name"/>
                        <span className="text-danger"><small>{this.props.childfnameError}</small></span>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="childlname">Last Name</label>
                        <input type="text" className="form-control" id="childlname" name="childlname" 
                        value={this.props.childlname} 
                        onChange={this.props.onChange} 
                        placeholder="Enter Your Last Name"/>
                        <span className="text-danger"><small>{this.props.childlnameError}</small></span>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                        <button  type="submit" id="back1" className="btn btn-danger" onClick={this.props.prev1}>Back</button>
                        <button  className="next-1 btn btn-primary" id="next1" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Next &darr;</button>
                </div>

                <div className="how-old collapse pt-4" id="collapseExample">
                    <h2>How old is <span>{this.props.childfname}</span></h2>
                    <div className="form-row">
                        <div className="form-group col-md-2 text-center">
                            <img src={child1} className="img-responsive" alt="child"/>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="child1" 
                                    value="15mthto2yrs" 
                                    checked={this.props.selectedChildage === '15mthto2yrs'}
                                    onChange={this.props.onCheck}  
                                />
                                <label className="form-check-label" htmlFor="child1">
                                        15 mth to 2 yrs
                                </label>
                            </div>
                        </div>
                        <div className="form-group col-md-2 text-center">
                            <img src={child2} className="img-responsive" alt="child"/>
                             <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="child2" 
                                    value="2yrsto3yrs"
                                    checked={this.props.selectedChildage === '2yrsto3yrs'}
                                    onChange={this.props.onCheck}  
                                />
                                <label className="form-check-label" htmlFor="child2">
                                    2 yrs to 3 yrs
                                </label>
                            </div>
                        </div>
                        <div className="form-group col-md-2 text-center">
                            <img src={child3} className="img-responsive" alt="child"/>
                             <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="child3" 
                                    value="3yrsto4yrs" 
                                    checked={this.props.selectedChildage === '3yrsto4yrs'}
                                    onChange={this.props.onCheck}  
                                />
                                <label className="form-check-label" htmlFor="child3">
                                    3 yrs to 4 yrs
                                </label>
                            </div>
                        </div>
                        <div className="form-group pl-4 col-md-3 text-center">
                            <img src={child4} className="img-responsive" alt="child"/>
                             <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="child4" 
                                    value="4yrsto5yrs" 
                                    checked={this.props.selectedChildage === '4yrsto5yrs'}
                                    onChange={this.props.onCheck}  
                                />
                                <label className="form-check-label" htmlFor="child4">
                                    4 yrs to 5 yrs
                                </label>
                            </div>
                        </div>
                        <div className="form-group col-md-3 text-center">
                           <img src={child5} className="img-responsive" alt="child"/>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="child5" 
                                    value="5yrsto6yrs" 
                                    checked={this.props.selectedChildage === '5yrsto6yrs'} 
                                    onChange={this.props.onCheck}  
                                />
                                <label className="form-check-label" htmlFor="child5">
                                    5 yrs to 6 yrs
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button  type="submit" id="back2" className="btn btn-danger" onClick={this.props.prev1}>Back</button>
                        <button  className="next-2 btn btn-primary" id="next2" type="button"  data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">Next &darr;</button>
                    </div>
                </div>

                

                <div className="collapse pt-4" id="collapseExample1">
                <div className="d-flex"><h2>When is <span>{this.props.childfname}</span>’s birthday</h2><i className="birth-date pl-4 fas fa-birthday-cake"></i></div>
                <div className="form-row">
                    <div className="form-group col-md-8">
                    <label htmlFor="childfname">Enter <span>{this.props.childfname}</span>’s Birthdate</label>
                    <input type="date" id="dateofbirth" name="dateofbirth" className="form-control"
                     value={this.props.dateofbirth} 
                     onChange={this.props.onChange}/>
                    {/* <input className="form-control start_date" type="text" placeholder="start date" id="startdate_datepicker"></input> */}
                    <small className="text-danger">{this.props.dateofbirthError}</small>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                <button  type="submit" className="btn btn-danger" onClick={this.props.prev}>Back</button>
                <button type="submit" onClick={this.props.next} className="btn btn-primary">Submit</button>
                </div>
                </div>
             
            </div>
        </div>
        </section>
        
        )

    }


  
}

export default ChildDetail;
