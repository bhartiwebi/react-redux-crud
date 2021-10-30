import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const Contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory();

 console.log(Contacts);
  const handleSubmit = (e) => {
    e.preventDefault();

    // let error = {
    //   number: false,
    //   email: false
    // }

    // Contacts.map( dt => {
    //   if (dt.email == email) {
    //     error['email'] = true
    //   }
    //   if (dt.number == number) {
    //     error['number'] = true
    //   }
    // })

    const checkEmail = Contacts.find(
      (contact) => contact.email === email && contact
    );

    console.log(checkEmail);
    const checknumber = Contacts.find(
      (contact) => contact.number === number
    );
// console.log(checknumber, "---checknumber---");
    // console.log(checkEmail);

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields");
    }


    if (checkEmail) {
      return toast.error("this email alredy exists!");
    }

    if (checknumber) {
      return toast.error("this numebr alrady exists!");
    }
    // if (error.email) {
    //   return toast.error("this email alredy exists!");
    // }

    // if (error.number) {
    //   return toast.error("this numebr alrady exists!");
    // }

    const data = {
      id: Contacts[Contacts.length - 1].id + 1,
      name,
      email,
      number,
    };
    dispatch({ type: "addCONTACT", payload: data });
    toast.success("Student added successfully");
    history.push("/");
    console.log(data);
  };
  console.log(Contacts);
  return (
    <div className="container">
      <h3 className="display-5  text-center">Add Student</h3>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="email"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="number"
                placeholder="mobile no"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
