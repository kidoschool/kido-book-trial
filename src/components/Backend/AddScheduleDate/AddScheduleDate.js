import React, { useState, useEffect, useContext } from "react";
import Modal from '../../../common/Modal/Modal';
import Axios from "axios";
import { AuthContext } from '../../../context/Auth';

function AddScheduleDate(props) {
  const { currentUser } = useContext(AuthContext);
  
  const [showModal, setShowModal] = useState(false);
  const [scheduleDate, setScheduleDate] = useState("");
  const [formComplete, setFormComplete] = useState(false);
  const [formIncompleteError, setFormIncompleteError] = useState(false);

  const scheduleDates  = React.useRef();

  const userId = currentUser.uid;

  useEffect(() => {
    modalOpenHandler();
  }, [showModal]);

  const handleAddDateClick = (event) => {
        if(scheduleDates.current.value.length === 0){
          setFormComplete(false);
          setFormIncompleteError(true);
    } else {
      // add column name in firebase
      Axios.post(`https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents/${props.groupId}/scheduleDate.json`, {
        date: scheduleDate,
      })
        .then((response) => {
          alert("Date added succesfully");
          props.setShowDates(true);
        })
        .catch((error) => console.log(error));

      setShowModal(false);
      setScheduleDate("");
    }
  };

  const modalOpenHandler = () => {
    let colBox = document.getElementById("addScheduleDateBox");
    colBox.addEventListener("click", () => {
      setShowModal(true);
    });
  };

  const  modalCloseHandler = () => {setShowModal(false)};

  let modalContent = showModal ? 

  (
      <>
    <div className="container py-4">
      <div className="row">
        <div className="col-md-12 text-left">
        <h1 className="text-primary1 pb-1">Add Schedule Date</h1>
        {formIncompleteError ? <p style={{color : 'red'}}>Kindly complete the form before adding Dates</p> : null}
        <div className="form-group">
          <label htmlFor="Schedule">Enter Date</label>
          <input type="date" id="Schedule" value={scheduleDate} placeholder="Enter a Schedule Date" 
          ref={scheduleDates} onChange={(event) => setScheduleDate(event.target.value)} className="form-control"/>
        </div> 
        <button className="btn btn-info btn-sm"
        disabled={formComplete} onClick={handleAddDateClick}>Add Schedule Date</button>
        </div>
      </div>
    </div>
     
      </>
  )
  :null;

  return (
    <>
      <div className="d-flex justify-content-between p-2">
      <span>Add Schedule Dates</span>
       <div className="btn btn-success btn-sm" id="addScheduleDateBox"><i class="fas fa-plus-square"></i></div>
       </div>
        {showModal && (
        
            <Modal  
                content = {modalContent}
                close = {modalCloseHandler}/> 
        )}
       
    </>
)
}

export default AddScheduleDate;
