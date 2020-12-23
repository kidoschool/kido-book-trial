import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
// import style from './CreateBoard.module.css';
import { AuthContext } from '../../../context/Auth';
import { withRouter, useHistory } from "react-router-dom";
import Sidebar from "../../../components/Backend/Sidebar/Sidebar";

const CreateBoard = (props) => {
    const { currentUser } = useContext(AuthContext);

    const [formComplete, setFormComplete] = useState(false);
    const [formIncompleteError, setFormIncompleteError] = useState(false);
    const [isGroupAdded, setIsGroupAdded] = useState(false);

    const [ageGroup, setAgeGroup] = useState("");
    const [teacherName, setTeacherName] = useState("");

    const AgeGroup  = React.useRef();
    const TeacherName  = React.useRef();

    const userId = currentUser.uid;

    // to use history function
    const history = useHistory();

    useEffect(() => {
        setIsGroupAdded(false);
      }, [isGroupAdded]);

    
    const addGroupToDBHandler = (event) => {
        event.preventDefault();
        if(AgeGroup.current.value.length === 0 || TeacherName.current.value.length === 0){
        setFormComplete(false);
        setFormIncompleteError(true);
        } else {
        // add column name in firebase
        Axios.post(`https://kido-bookt-backend-default-rtdb.firebaseio.com/groupContents.json`, {
            ageGroup: ageGroup,
            teachersName: teacherName,
        })
            .then((response) => {
                alert("Group added succesfully");
                history.push("/backendhome");
                setIsGroupAdded(true);
            })
            .catch((error) => console.log(error));

        }
    };

    return(
        
        <div className="wrapper d-flex align-items-stretch">
        <Sidebar />

        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-10">
                {formIncompleteError ? <div class="alert alert-danger" role="alert">Kindly complete the form before adding the Group</div> : null}
                <div className="create-group border bg-white p-4">
                <h1 className="text-primary1">Create Group</h1>
                <form onSubmit={addGroupToDBHandler}>
                    <div class="form-group">
                        <label for="agegroup">Enter Child Age Group:</label>
                        <select class="form-control" name="agegroup" id="agegroup" ref={AgeGroup} onChange={(event) => setAgeGroup(event.target.value)}>
                        <option value="">Select Age Group</option>
                        <option value="15Months-2Years">15Months-2Years</option>
                        <option value="2Years-3Years">2Years-3Years</option>
                        <option value="3Years-4Years">3Years-4Years</option>
                        <option value="4Years-5Years">4Years-5Years</option>
                        <option value="5Years-6Years">5Years-6Years</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="teachername">Enter Teacher Names:</label>
                        <input id="teachername" type="text" class="form-control" name="teachername" placeholder="Add teacher names (separated by commas)"
                        ref={TeacherName}  onChange={(event) => setTeacherName(event.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-sm btn-primary" disabled={formComplete}>Create</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );

}


export default withRouter(CreateBoard);
