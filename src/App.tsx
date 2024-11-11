import { useState } from "react";
import Grid from "./grid"
import UserForm from "./userForm"
import Header from "./header";



function App() {
 let [userData,setUserData] = useState([]);
 let columnsData:any =[
  {
    field:"name"
  },
  {
    field:"email"
  },
  {
    field:"contact"
  },
  {
    field:"pincode"
  }
 ];
 function addUser(user:any){
  //setUserData((prev)=> [...prev,user]);
  let updateArray:any =[...userData,user]
  console.log(updateArray);
  setUserData(updateArray);
 }
 //In between tags you can write html tags or any message {} it is parent 
 let titleName="This is example of header component";
  return (
    <>
      <Header title={titleName}/>
      <UserForm addUser={addUser}><span>New User Form</span></UserForm>
      <Grid rowData={userData} colDefs={columnsData}/>
    </>
  )
}

export default App
