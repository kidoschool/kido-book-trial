import React, { useState, useEffect, useContext } from "react";
import style from  './Group.module.css';
import Axios from 'axios';
import { withRouter, useHistory } from "react-router-dom";
import Loader from "../../../common/Loader/Loader";
import AddScheduleDate from "../../../components/Backend/AddScheduleDate/AddScheduleDate";
import TimeSlot from "../../../components/Backend/TimeSlot/TimeSlot";
import { AuthContext } from '../../../context/Auth';
import Sidebar from "../../../components/Backend/Sidebar/Sidebar";
import Moment from 'react-moment';

export const Group = (props) => {
    const { currentUser } = useContext(AuthContext);

    const name = props.match.params.ageGroup;
    const teachersName = props.location.state.teachersName;

    const [scheduleDatesData, setScheduleDatesData] = useState({});
    const [showDates, setShowDates] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isDatesDelete, setIsDatesDelete] = useState(false);

    const userId = currentUser.uid;

     // to use history function
    const history = useHistory();

    document.title = `${name} | Kido`;

    useEffect(() => {
        setShowDates(false);
        setIsDatesDelete(false);
        getScheduleDateData();
    }, [showDates, isDatesDelete]);
  
    const getScheduleDateData = () => {
        Axios
        .get(`https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents/${props.location.state.groupId}/scheduleDate.json`)
        .then((response) => {
            setTimeout(setScheduleDatesData(response.data), 2000);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };

      // handle AgeGroup delete
    const handleAgeGroupDelete = (e) => {
      if (window.confirm("Are you sure you want to delete the Age Group?")) {
        Axios
        .delete(`https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents/${props.location.state.groupId}.json`)
          .then((response) => {
            alert("Age Group deleted succesfully");
            history.push("/backendhome");
          })
          .catch((error) => console.log("Error" + error));
      }
    };

      // handle column delete
    const handleDatesDelete = (scheduleDateId, e) => {
      if (window.confirm("Are you sure you want to delete the Date?")) {
      Axios
      .delete(`https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents/${props.location.state.groupId}/scheduleDate/${scheduleDateId}.json`)
        .then((response) => {
          alert("date deleted succesfully");
          setIsDatesDelete(true);
        })
        .catch((error) => console.log("Error" + error));
      }
    };


    return (
        <div>
          <br />
          {loading ? (
            <Loader></Loader>
          ) : (
            <div className="wrapper d-flex align-items-stretch">
            <Sidebar />
              <div className="container pb-4">
                  <div className={style.ColumnHeader}>
                    <div className={style.ColumnTitle}>
                        <h1 className="text-primary1 pb-1">{name}</h1>
                    </div>
                    <div className={style.DeleteBoardBtn}>
                        <button className="btn btn-danger btn-sm" onClick={handleAgeGroupDelete}>Delete Age Group</button>
                    </div>
                  </div>

                <div className="row pb-4">
                  <div className="col-lg-12">
                    <div className="group-box border">
                      <AddScheduleDate
                        pathname={props.location.pathname}
                        groupId={props.location.state.groupId}
                        getScheduleDateData={getScheduleDateData}
                        setShowDates={setShowDates}
                      ></AddScheduleDate>
                      </div>
                  </div>
                </div>

                  <div className={style.ColumnDatas}>
                  {scheduleDatesData &&
                  Object.entries(scheduleDatesData).map((item) => (
                 
                          <div className={style.ColumnCard} key={item[0]}>
                            <div className={style.ColumnCardHead}>
                              <span className={style.ColumnNames}>
                              <Moment  format="ddd DD MMM">{item[1].date}</Moment>
                              </span>
                              <div className={style.deleteColumn}>
                              <i
                                className="text-danger fas fa-trash-alt"
                                onClick={(e) => handleDatesDelete(item[0], e)}
                              ></i>
                            </div>
                          </div>
                          <div className={style.cardContainer}>
                            <TimeSlot
                              teachersName={teachersName}
                              scheduleDateId={item[0]}
                              groupId={props.location.state.groupId}
                              childAgeGroup={name}
                            ></TimeSlot>
                          </div>
                          </div>
                     
                      ))}
                     
                  </div>
              </div>
              </div>
          )}
        </div>
      );
    }
    

export default withRouter(Group);
