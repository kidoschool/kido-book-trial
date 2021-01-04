import React, { useState, useEffect, useContext } from "react";
import style from "./TimeSlot.module.css";
import Modal from '../../../common/Modal/Modal';
import Axios from "axios";
import { AuthContext } from '../../../context/Auth';
import $ from "jquery";

function TimeSlot(props) {
  const { currentUser } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const { teachersName, scheduleDateId, groupId, childAgeGroup} = props;
  const [cardData, setCardData] = useState("");

  // to handle details of card
  const [showDetails, setShowDetails] = useState(false);
  const [cardTimeSlot, setCardTimeSlot] = useState("");
  const [teacherListDetail, setTeacherList] = useState([]);
  const [editDetails, setEditDetails] = useState(false);
  const [scheduleTimeId, setScheduleTimeId] = useState("");

  const [isCardAdded, setIsCardAdded] = useState(false);
  const [isCardDelete, setIsCardDelete] = useState(false);
  const [isCardEdited, setIsCardEdited] = useState(false);

  const [timeSlot, SetTimeSlot] = useState("");
  const [teacherList, setTeam] = useState([]);

  const [formComplete, setFormComplete] = useState(false);
  const [formIncompleteError, setFormIncompleteError] = useState(false);

  // to split members list string into array
  const memberArr = teachersName.split(",");

  const cardTimeSlots = React.useRef();
  const teacherListDetails = React.useRef();

  const userId = currentUser.uid;

    // to Hide past date
    // var today = new Date();
    // var month,
    //   day = null;
    // if (today.getMonth() < 10 || today.getDate() < 10) {
    //   month = "0" + (today.getMonth() + 1);
    //   day = "0" + today.getDate();
    // }
    // var date = today.getFullYear() + "-" + month + "-" + day;

    useEffect(() => {
      setIsCardAdded(false);
      setIsCardDelete(false);
      setIsCardEdited(false);
      getCardData();
    }, [isCardAdded, isCardDelete, isCardEdited]);


  const getCardData = () => {
    Axios
    .get(`https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents/${groupId}/scheduleDate/${scheduleDateId}/scheduleTime.json`)
    .then((response) => {
      console.log(response);
        setCardData(response.data);
    })
    .catch((error) => console.log(error));
};

  
  //  to Add and Edit cardData in DB
  const handleAddCardData = (e) => {
    //   check if all input is taken
    if(cardTimeSlots.current.value.length === 0 || teacherListDetails.current.value.length === 1){
      setFormComplete(false);
      setFormIncompleteError(true);
    } else {
      // if user wants to edit then put request is used
      if (editDetails) {
        Axios
        .put(`https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents/${groupId}/scheduleDate/${scheduleDateId}/scheduleTime/${scheduleTimeId}.json`,
          {
            timeSlot: timeSlot === "" ? cardTimeSlot : timeSlot,
            teacherList: teacherList.length === 0 ? teacherListDetail : teacherList,
          }
        )
          .then((response) => {
            alert("Time Slot edited succesfully");
            setIsCardEdited(true);
          })
          .catch((error) => console.log("Error in editDetails" + error));
      }
      //  if user wants to add a new card
      else {
        Axios
        .post(`https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents/${groupId}/scheduleDate/${scheduleDateId}/scheduleTime.json`,
          {
            timeSlot: timeSlot,
            teacherList: teacherList,
          }
        )
          .then((response) => {
            alert("Time Slot added succesfully");
            setIsCardAdded(true);
          })
          .catch((error) => console.log("Error" + error));
      }

      setShowModal(false);
      setEditDetails(false);

      SetTimeSlot("");
      setTeam([]);
    }
  };

  // on click of card this function shows details
  const onCardClick = (
    cardTimeSlot,
    teacherListDetails,
    scheduleTimeId,
    e
  ) => {
    setShowDetails(true);

    setCardTimeSlot(cardTimeSlot);
    setTeacherList(teacherListDetails);
    setScheduleTimeId(scheduleTimeId);
  };

   // handles edit button click
   const handleEdit = (e) => {
    setShowDetails(false);
    setShowModal(true);
    setEditDetails(true);
  };

  // handles archive on card archive click
  const handleArchive = (e) => {
    Axios
    .delete(`https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents/${groupId}/scheduleDate/${scheduleDateId}/scheduleTime/${scheduleTimeId}.json`)
      .then((response) => {
        alert("Time Slot archived succesfully");
        setIsCardDelete(true);
      })
      .catch((error) => console.log("Error" + error));

    setShowDetails(false);
  };

//To display multiple teacherList member selected
  const onSelectChange = (e) => {
    const values = [...e.target.selectedOptions].map((opt) => opt.value);
    setTeam(values);
  };




  const  modalCloseHandler = () => { setShowModal(false);setEditDetails(false);};

  const  showmodalCloseHandler = () => {setShowDetails(false)};

  //modal of Add and Edit Card
  let modalContent = showModal ? 

  (
      <>

    <div className="container py-4">
      <div className="row">
        <div className="col-md-12 text-left">
          <h3>{editDetails ? 'Edit Time Slot' : 'Add Time Slot'}</h3>
          {formIncompleteError ? <p style={{color : 'red'}}>Kindly complete the form before adding Time</p> : null}
        <div className="form-group">
          <label htmlFor="timeslot">Enter a Time slot for your Schedule date:</label>
          <input type="text" id="timepicker" defaultValue={editDetails ? cardTimeSlot : ""} 
          placeholder="e.g. Add Time Slot" ref={cardTimeSlots} 
          onChange={(e) => SetTimeSlot(e.target.value)} className="form-control"/>
        </div> 
        <div className="form-group">
          <label htmlFor="teacherlist">Choose Teaches Name for this time slot(select multiple,if needed):</label>
          <select  id="teacherlist" name="teacherlist" class="form-control" defaultValue={editDetails ? teacherListDetail : ""}
          multiple ref={teacherListDetails} 
          onChange={onSelectChange}>{memberArr.map((item) => (<option value={item} key={item}>{item}</option>))}
          </select>
        </div> 
        <button disabled={formComplete} className="btn btn-info btn-sm" 
        id="CreateCard" onClick={handleAddCardData}>{editDetails ? 'Edit Time Slot' : 'Add Time Slot'}</button>
        </div>
      </div>
    </div>
      </>
  )
  :null;

  //modal of show card details
  let showmodalContent = showDetails ? 

  (
      <>

      <div className="container my-4">
        <div className="row">
          <div className="col-lg-12">
          <div className="">
            <div><h3 className="text-left">{cardTimeSlot} Time Slot</h3></div>
          </div>
          <hr/>
          <div className="text-left my-4">
            <h4>Time slot for Child Age Group</h4>
            <div>
                <span className="mx-2 text-primary">{childAgeGroup}</span>
            </div>
          </div>
          <div className="text-left my-4">
            <h4>Members</h4>
            <div>
              {teacherListDetail !== undefined &&
                teacherListDetail.map((i) => (
                  <span className="mx-2 text-primary" key={i}>{i}</span>
                ))}
            </div>
          </div>
          <div className="d-flex justify-content-between mt-5">
            <button type="button" id="editBtn" className="btn btn-success btn-sm" onClick={handleEdit}>Edit</button>
            <button type="button" id="archiveBtn" className="btn btn-danger btn-sm" onClick={handleArchive}>Archive</button>
            </div>
          </div>
        </div>
      </div>

   
      </>
  )
  :null;

  return (
    <div>
      <div className={style.CardData}>
      {cardData ?
        Object.entries(cardData).map((item) => (
          <div  key={item[0]}>
          <div className={style.CardInfo}      
                id={item[0]}
                value={item[1].timeSlot}
                onClick={(e) =>
                  onCardClick(
                    item[1].timeSlot,
                    item[1].teacherList,
                    item[0],
                    e
                  )
                }
                >
          <div className={style.CardHeader}>
          <div className={style.CardName}>{item[1].timeSlot}</div>
          </div>
          <div className={style.CardIcon}>
          <div><i className="fas fa-list"></i></div>
          <div>
                    {item[1].teacherList !== undefined ? (
                      item[1].teacherList.map((i) => (
                        <span className={style.cardMembers} key={i}>
                          {i.charAt(0)}
                        </span>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
          </div>
          </div>
          </div>
         ) ): <small className={style.NotaskAdd}>No Time Slots Added</small>}
          <div className="text-right pb-2 pr-2">
            <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)} >Add Time Slot</button>
          </div>
      </div>
        {showModal && (
        
            <Modal  
                content = {modalContent}
                close = {modalCloseHandler}/> 
        )}
       
       {showDetails && (
        
        <Modal  
            content = {showmodalContent}
            close = {showmodalCloseHandler}/> 
    )}

    </div>
)
}

export default TimeSlot;
