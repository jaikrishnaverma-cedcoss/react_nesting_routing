import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = (props: any) => {
    // sidebar toggler
  const [toggle, setToggle] = useState(true);
  const [state,setState]=useState({loading:true,users:[]})

  useEffect(()=>{
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data=>{
        state.loading=false;
        state.users=data.users;
        setState({...state})
    });
  },[])
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
         <ul className="links">
            {
                [{link:'/name',label:'/j'}].map(x=><li className="sidebar__link"><Link to={'/name'} >{x.label}</Link></li>)
            }
            
         </ul>



        </aside>
      </header>
      {/* set common body for pages */}
      <main style={{display:'flex',width:'100vw'}}>
        {/* to sychronize with sidebar give space */}
        <div style={{width:'90px'}}></div>
        {/* this is the body wrapper */}
        <div className="wrapper" >
        {state.loading?<div className="loading__wrapper">
            <img src="1amw.gif" style={{width:'10vw'}} alt="loader" />
            <h3>Loading...</h3>
            </div>  
             :props.children}
        </div>
        </main>
      <footer>

      </footer>
    </>
  );
};

export default Sidebar;
