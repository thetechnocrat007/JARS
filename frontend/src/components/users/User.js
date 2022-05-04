import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    full_name: "",
    city: "",
    mobile_no: "",
    qualification: "",
    email: "",
    experience: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/${id}/detail/`);
    console.log(res);
    setUser(res.data);
  };

  const updateStatus = async (id,updatedstatus) => {
    
    await axios.patch(`http://127.0.0.1:8000/api/${id}/${updatedstatus}/updatestatus`);
    loadUser();
  };


  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
     

    




<div className="p-5">
<table className="table table-hover">
        <thead>
    
  </thead>
  <tbody>
    <tr>
      <th scope="row">Name</th>
      <td>{user.full_name}</td>
    </tr>
    <tr>
      <th scope="row">Email ID</th>
      <td>{user.email}</td>
    </tr>
    <tr>
      <th scope="row">Mobile No</th>
      <td>{user.mobile_no}</td>
    </tr>
    <tr>
      <th scope="row">City</th>
      <td>{user.city}</td>
    </tr>
    <tr>
      <th scope="row">Qualification</th>
      <td>{user.qualification}</td>
    </tr>
    <tr>
      <th scope="row">Experience</th>
      <td>{user.experience}</td>
    </tr>
    <tr>
      <th scope="row">Resume</th>
      <td>
      <a class="" href={user.resume}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
                  </svg>
      </a>
      </td>
    </tr>
    <tr>
      <th scope="row">Status</th>
      <td>{user.status}</td>
    </tr>
  </tbody>

</table>

<div>
          
          <button
            className="btn btn-danger m-2"
            onClick={() => updateStatus(user.id,"Accepted")}
            
          >
            Accept
          </button>

          <button
            className="btn btn-danger m-2"
            onClick={() => updateStatus(user.id,"Rejected")}
            
          >
            Reject
          </button>
        </div>
</div>


       
    </div>
  );
};

export default User;
