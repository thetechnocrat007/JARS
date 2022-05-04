import React, { useState } from "react";
import axios from 'axios'
import { useNavigate  } from "react-router-dom";

const AddUser = () => {
  let history = useNavigate ();
  const [user, setUser] = useState({
    full_name: "",
    city: "",
    mobile_no: "",
    qualification: "",
    email: "",
    experience: "",
    resume:undefined

  });

  const {full_name,city,  mobile_no,  qualification,email,experience } = user;
  const onInputChange = e => {
    
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const onInputChange2 = e2 => {
    let file=e2.target.files[0]
    console.log(file)
    if(file){
      console.log(e2.target.files[0]);
      console.log(e2.target)
      setUser({ ...user, [e2.target.name]: file });
      console.log("after asignemtn...")
    }
    
  };



  const onSubmit = async e => {
    // const file=e.target.files[0];
    // user.append("resume",file);
    
    console.log("prrrrrr")
    console.log(e)
    e.preventDefault();
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }
  console.log(user)
  
    const r=await axios.post("http://127.0.0.1:8000/api/create/", user,config);
    console.log("response::::");
    console.log(r);
    history("/");
  };

  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Candidate</h2>
        <form onSubmit={e => onSubmit(e)} encType="multipart/form-data">
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Full Name"
              name="full_name"
              value={full_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your City"
              name="city"
              value={city}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Email ID"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Mobile Number"
              name="mobile_no"
              value={mobile_no}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Qualification"
              name="qualification"
              value={qualification}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Experience"
              name="experience"
              value={experience}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control-file form-control-lg mb-2"
              placeholder="Upload Resume"
              name="resume"
              value={undefined}
              onChange={e2 => onInputChange2(e2)}
            />
            
           </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
