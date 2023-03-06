import React, { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useQuery from "../customHook/useQuery";
import "./Profile.css";

const UpdateProfile = (props: any) => {
  // get user id from route url
  let { userId } = useParams();
  const navigate = useNavigate();
  const [forms, setForms] = useState<any>({ validate: {}, inputs: {} });
  // custom hook get users details by id
  const getKeyObject = useQuery();
  const { index, user }: { index: number; user: any } = getKeyObject(
    props.state.users,
    "id",
    userId
  );
  //   onChange inputs controller
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const val = e.target.value;
    const phone_reg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    const email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    forms.inputs[name] = val;
    forms.validate[name] = true;
    if (name === "phone") {
      e.target.style.border = phone_reg.test(val)
        ? "2px solid green"
        : "2px solid red";
      forms.validate[name] = phone_reg.test(val);
    } else if (name === "email") {
      e.target.style.border = email_reg.test(val)
        ? "2px solid green"
        : "2px solid red";
      forms.validate[name] = email_reg.test(val);
    } else if (val) {
      e.target.style.border = "2px solid green";
      forms.validate[name] = true;
    } else {
      e.target.style.border = "2px solid red";
      forms.validate[name] = false;
    }
    setForms({ ...forms });
  };

  // handle Update functionality
  const updator = () => {

    let sign = Object.entries(forms.validate).filter((x: any) => x[1] == false);
    if (sign.length == 0) {
      props.state.users[index] = {
        ...props.state.users[index],
        ...forms.inputs,
      };
      props.setState({ ...props.state });
      navigate("/Updated Successfully");
    } else alert("Please fill valid details");
  };
  if (index == -1) navigate("/Something went wrong.");
  return (
    <>
      <div className="profile">
        <div
          className="profile__card profile__card--update"
          style={{ flexDirection: "column" }}
        >
          <div className="profile__body">
            <h2>Update Form:</h2>
            <div className="profile__details profile__details--update">
              {["firstName", "lastName", "email", "phone"].map((x, i) => (
                <div className="profile__inputs" key={x}>
                  <label htmlFor={x + i}>{x}</label>
                  <input
                    onChange={onChangeInput}
                    type={x == "email" ? "email" : "text"}
                    id={x + i}
                    defaultValue={user[x]}
                    name={x}
                  />
                </div>
              ))}
            </div>
            <div className="profile__actions profile__actions--update">
              <button style={{ color: "red" }} onClick={() => updator()}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
