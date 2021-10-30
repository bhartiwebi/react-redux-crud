import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const Contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    alert("are you sure u want to delete this record");
    toast.success("contact delete successfully");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-mt-10 my-5 text-right">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        <div className="col-md-12 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-primary text-center">
              <tr>
                <th scope="col">ID </th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile no </th>
                <th scope="col">Action </th>
              </tr>
            </thead>
            <tbody>
              {Contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-small btn-success ml-5"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-small btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Home;
