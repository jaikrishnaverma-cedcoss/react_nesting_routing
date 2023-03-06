import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useQuery from '../customHook/useQuery';
import './Profile.css'

const Profile = (props:any) => {
  // get user id from route url
  let { userId } = useParams();
  const navigate=useNavigate()

  // custom hook get users details by id
  const getKeyObject=useQuery()
  const {index , user}:{index:number,user:any}=getKeyObject(props.state.users,'id',userId) 

  // handle delete functionality 
  const deletor=(i:number)=>{
    if(i>-1){
    props.state.users.splice(i,1);
    navigate('/Deleted Successfully')
    props.setState({...props.state})
    }
  }
if(index==-1)
navigate('/Something went wrong.')
  return (
    <>
    <div className="profile">
      <div className="profile__card">
        <img src={user.image} alt="" />
        <div className='profile__body'>
         <div className="profile__details">
         <h2>{user.firstName+" "+user.lastName}</h2>
          <p>{user.email}</p>
          <small>DOB: {user.birthDate}</small><br />
          <small>Gender: {user.gender}</small><br />
          <small>Phone: {user.phone}</small>
         </div>
          <div className="profile__actions">
          <button onClick={()=>navigate('/update/'+userId)}>Edit</button>
          <button style={{color:'red'}} onClick={()=>deletor(index)}>Delete</button>
        </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Profile