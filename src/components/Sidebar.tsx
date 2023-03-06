import React, {useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = (props: any) => {
  // sidebar toggler
  const [toggle, setToggle] = useState(true);
  // hold user details to filter & show
  let [users, setUsers] = useState<any>([]);

  // update users array if any changes arrives in parents user araray
  useEffect(() => {
    if(props.state.users)
    users=[...props.state.users]
    setUsers([...users]);
  }, [props.state]);

  // filter user function
  const filterer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase();
    let arr = [];
    if (val) {
      arr = users.filter((user: any) => {
        return (
          user.firstName.toLowerCase().includes(val) ||
          user.lastName.toLowerCase().includes(val)
        );
      });
    } else {
      arr = props.state.users;
    }
    setUsers([...arr]);
  };

  return (
    <>
      <header>
        {/* side bar */}
        <aside className={`sidebar sidebar--${toggle ? "active" : "close"}`}>
          <div className="aside__top">
            <button
              className={`toggler`}
              onClick={() => setToggle((prev) => !prev)}
            >
              <i
                className={`bi bi-chevron-double-${toggle ? "left" : "right"}`}
              ></i>
            </button>
          </div>
          {/* search box */}
          <div className={`aside__searchbox ${toggle ? "" : "hide"}`}>
            <input
              type="text"
              placeholder="Search"
              className="searchbox__inputbox"
              onChange={filterer}
            />
            <button className="searchbox__button">
              <i className="bi bi-search"></i>
            </button>
          </div>
          {/* users list */}
          <h3 style={{ color: "white", margin: "20px 10px" }}>Users</h3>
          <ul className="links">
            {users &&
              users.map((user: any, i: any) => (
                <li className="sidebar__link" key={user.id+user.username}>
                  <NavLink to={`profile/${user.id}`}>
                    <i className="bi bi-person-fill"></i>
                    {user.firstName + " " + user.lastName}
                  </NavLink>
                </li>
              ))}
          </ul>
        </aside>
      </header>
      {/* set common body for pages */}
      <main style={{ display: "flex", width: "100vw" }}>
        {/* to sychronize with sidebar give space */}
        <div style={{ width: "90px" }}></div>
        {/* this is the body wrapper */}
        <div className="wrapper">
          {props.state.loading ? (
            <div className="loading__wrapper">
              <img
                src={process.env.PUBLIC_URL + "/1amw.gif"}
                style={{ width: "10vw" }}
                alt="loader"
              />
              <h3>Loading...</h3>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Sidebar;
