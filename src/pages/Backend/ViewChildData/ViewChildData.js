import React, { Component } from 'react';

class ViewChildData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedChildage: '',
            scheduleDates: '',
        }
      }


        // Get Data from LocalStorage ..
        componentDidMount() {
            let dd  = this.childData = JSON.parse(localStorage.getItem('childdetails'));
    
            if (localStorage.getItem('childdetails')) {
                this.setState({
                    selectedChildage: this.childData.selectedChildage
                })
            } else {
                this.setState({
                    selectedChildage: ''
                })
            }
        }

    

    render() {

        return (

          
            <section className="kids-schedule py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                   
                    </div>
                </div>
            </div>
            </section>
           
        )
    }
}

export default ViewChildData;
