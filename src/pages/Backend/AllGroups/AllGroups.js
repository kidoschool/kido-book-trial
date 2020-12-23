import React, { useState, useEffect, useContext } from "react";
import style from  './AllBoards.module.css';
import Axios from 'axios';
import { Link } from "react-router-dom";
import Loader from "../../../common/Loader/Loader";
import { AuthContext } from '../../../context/Auth';
import Sidebar from "../../../components/Backend/Sidebar/Sidebar";

export const AllGroups = () => {

    const { currentUser } = useContext(AuthContext);

    const [groupContents, setGroupContents] = useState({});
    const [showGroup, setShowGroup] = useState(false);
    const [loading, setLoading] = useState(true);

    const userId = currentUser.uid;

    document.title = "Kido";

    useEffect(() => {
        getGroupContents();
    }, [showGroup]);
  
    const getGroupContents = () => {
        Axios
        .get(`https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents.json`)
        .then((response) => {
          setTimeout(setGroupContents(response.data), 50000);
          setLoading(false);
          if (groupContents !== null) {
            setShowGroup(true);
          } else {setShowGroup(false);}
        })
        .catch((error) => console.log(error));
    };


    return (

    <div>
    <br />
    {loading ? (
      <Loader></Loader>
    ) : (
      <div className="wrapper d-flex align-items-stretch">
        <Sidebar />
      <section className="all-buckets bg-black py-3">
        <div className="container-fluid">
        <h1 className="text-primary1 pb-2">child age groups</h1>
          <div className="bucket-data">
              
                  {showGroup ? (
                  <div className="row">
                      {groupContents &&
                      Object.entries(groupContents).map((item) => (
                        
                          <div className="group-box d-flex border rounded my-3 p-5 mx-3" key={item[1].ageGroup}>
                            <Link
                                  to={{
                                    pathname: "/scheduledata/" + item[1].ageGroup,
                                    state: {
                                      teachersName: item[1].teachersName,
                                      groupId: item[0],
                                    },
                                  }}
                                >
                              <div className="bucket-box">
                                  <p className="text-center">{item[1].ageGroup}</p>
                              </div>
                              </Link>
                          </div>
                           
                      ))}
                  </div>
                  ) : (
                  <div className="alert alert-warning" role="alert">
                      You haven't created any Child Age Group. Kindly click on the 'Create
                      a Group' button in the sidebar bar to create a Group.!
                  </div>
                  )}
        </div>
        </div>
      </section>
      </div>
    )}
  </div>
);
}


export default AllGroups;
