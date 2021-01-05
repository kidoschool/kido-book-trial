import React, { Component } from 'react';
import child1 from '../../assets/child1.jpg';
import child2 from '../../assets/child2.jpg';
import child3 from '../../assets/child3.jpg';
import child4 from '../../assets/child4.jpg';
import child5 from '../../assets/child5.jpg';
import $ from "jquery";

class ChildDetail extends Component {
    

    componentDidMount() {
        
     
        $('#next1').click(function () {
            if($('input[name="childfname"]').val().length === 0){
                alert("Child first name is required");
                return false;
            }
            if($('input[name="childlname"]').val().length === 0){
                alert("Child last name is required");
                return false;
            }
            $('.next-1').css("visibility","hidden");
            $('#back1').css("visibility","hidden");
            $('html, body').animate({ scrollTop: $(document).height() }, 500);
            
        });

        $('#next2').click(function () {
            if($('input[name="exampleRadios"]:checked').length === 0){
                alert("Please select age group of your child");
                return false;
            }
            $('.next-2').css("visibility","hidden");
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
                        <label htmlFor="childfname">Child First Name</label>
                        <input type="text" className="form-control" id="childfname" name="childfname" 
                        value={this.props.childfname}
                        onChange={this.props.onChange} 
                        placeholder="Enter child first name"/>
                        <span className="text-danger"><small>{this.props.childfnameError}</small></span>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="childlname">Child Last Name</label>
                        <input type="text" className="form-control" id="childlname" name="childlname" 
                        value={this.props.childlname} 
                        onChange={this.props.onChange} 
                        placeholder="Enter child last name"/>
                        <span className="text-danger"><small>{this.props.childlnameError}</small></span>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                        <button  type="submit" id="back1" className="btn btn-danger" onClick={this.props.prev1}>Back</button>
                        <button  className="next-1 btn btn-primary" id="next1" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Next &darr;</button>
                </div>

                <div className="how-old collapse pt-4" id="collapseExample">
                    <h2>How old is <span>{this.props.childfname}</span></h2>
                    <div className="form-row justify-content-center">
                        <div className="form-group col-md-2 text-center pt-4">
                            <img src={child1} className="img-responsive" alt="child"/>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="child1" 
                                    value="15Months-2Years" 
                                    checked={this.props.selectedChildage === '15Months-2Years'}
                                    onChange={this.props.onCheck}  
                                />
                                <label className="form-check-label" htmlFor="child1">
                                    <small>15 Months - 2 Years</small>
                                </label>
                            </div>
                        </div>
                        <div className="form-group col-md-2 text-center">
                            <img src={child2} className="img-responsive" alt="child"/>
                             <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="child2" 
                                    value="2Years-3Years"
                                    checked={this.props.selectedChildage === '2Years-3Years'}
                                    onChange={this.props.onCheck}  
                                />
                                <label className="form-check-label" htmlFor="child2">
                                    <small>2 Years - 3 Years</small>
                                </label>
                            </div>
                        </div>
                        <div className="form-group col-md-2 text-center">
                            <img src={child3} className="img-responsive" alt="child"/>
                             <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="child3" 
                                    value="3Years-4Years" 
                                    checked={this.props.selectedChildage === '3Years-4Years'}
                                    onChange={this.props.onCheck}  
                                />
                                <label className="form-check-label" htmlFor="child3">
                                    <small>3 Years - 4 Years</small>
                                </label>
                            </div>
                        </div>
                        <div className="form-group pl-4 col-md-2 text-center pt-3">
                            <img src={child4} className="img-responsive" alt="child"/>
                             <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="child4" 
                                    value="4Years-5Years" 
                                    checked={this.props.selectedChildage === '4Years-5Years'}
                                    onChange={this.props.onCheck}  
                                />
                                <label className="form-check-label" htmlFor="child4">
                                    <small>4 Years - 5 Years</small>
                                </label>
                            </div>
                        </div>
                        <div className="form-group col-md-2 text-center pt-3">
                           <img src={child5} className="img-responsive" alt="child"/>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="child5" 
                                    value="5Years-6Years" 
                                    checked={this.props.selectedChildage === '5Years-6Years'} 
                                    onChange={this.props.onCheck}  
                                />
                                <label className="form-check-label" htmlFor="child5">
                                    <small>5 Years - 6 Years</small>
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
                     <div className="input-group">
                        <select className="form-control" id="birthdate" 
                        value={this.props.birthdate} onChange={this.props.onChange}>
                            <option value="">Birth Date</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select className="form-control" id="birthmonth"
                        value={this.props.birthmonth} onChange={this.props.onChange}>
                            <option value="">Birth Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        <select className="form-control" id="birthyear"
                        value={this.props.birthyear} onChange={this.props.onChange}>
                            <option value="">Birth Year</option>
                            <option>2014</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                        </select>
                    </div>
                    <small className="text-danger px-2">{this.props.dateofbirthError}</small>
                    <small className="text-danger px-2">{this.props.monthofbirthError}</small>
                    <small className="text-danger px-2">{this.props.yearofbirthError}</small>
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
