import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate , useParams } from "react-router-dom";

const EditUser = () => {
  let history = useNavigate ();
  const { id } = useParams();
  const [user, setUser] = useState({
    full_name: "",
    city: "",
    mobile_no: "",
    qualification: "",
    email: "",
    experience: ""
  });

  const { full_name,city,  mobile_no,  qualification,email,experience } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/api/${id}/update/`, user);
    history("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/${id}/detail/`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
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
              className="form-control form-control-lg  mb-2"
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
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
