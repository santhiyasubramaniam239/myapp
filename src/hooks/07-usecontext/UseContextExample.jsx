import { useState,createContext, useContext } from "react";
const UserContext = createContext(null)
export default function UseContextExample(){
     const [user, setUser]=  useState({name:"Savitha", email: "savi@example.com"})
    return <UserContext value={{user,setUser}}>
     <div>
        <Dashboard/>
    </div>
    </UserContext> 
    
}
function Dashboard(){
  const { user, setUser } = useContext(UserContext)
  return <div>
    <h3>Welcome to Simple Context Example</h3>
    <h3>Hi {user.name}</h3>
    <Profile/>
    <button onClick={()=> setUser({name:"Sunitha", email:"suni@gmail.com"})}>Change User</button>
  </div>
}

function Profile(){
  const { user, setUser } = useContext(UserContext)
  return <div>
    <h4>Profile</h4>
    <p>Name: {user.name}</p>
    <p>Email:{user.email}</p>
  </div>
}