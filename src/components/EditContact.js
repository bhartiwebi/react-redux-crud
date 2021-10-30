import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
const EditComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();
  const Contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentContact = Contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if(currentContact){
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number); 
    }

  }, [currentContact]);


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
      (contact) => contact.id !== parseInt (id) && contact.email === email 
    );

    const checknumber = Contacts.find(
      (contact) => contact.id !== parseInt (id) && contact.number === parseInt(contact)
    );
    console.log(
      Contacts.find((contact) => contact.number === parseInt(contact))
    );

    console.log(checkEmail);

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields");
    }

    // if (error.email) {
    //   return toast.error("this email alredy exists!");
    // }

    // if (error.number) {
    //   return toast.error("this numebr alrady exists!");
    // }

    if (checkEmail) {
      return toast.error("this email alredy exists!");
    }

    if (checknumber) {
      return toast.error("this numebr alrady exists!");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student Upddated successfully");
    history.push("/");
    console.log(data);
  };


  return (
    <div className="container">
      {currentContact ? (
        <>
          <h3 className="display-5  text-center">Edit Student{id}</h3>
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
                    value="Update Student"
                    className="btn btn-success"
                  />

                  <Link to="/" className="btn btn-danger ml-3">
                    cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h2 className="display-3 my-5 text-center">
          studentContact with id {id} is not exist
        </h2>
      )}
    </div>
  );
};
export default EditComponent;
