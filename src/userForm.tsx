import { useState } from "react";

function UserForm({addUser,children}){

    let [name,setName] =useState('');
    let [email,setEmail] = useState('');
    let [contact,setContact] = useState('');
    let [pincode,setPincode] = useState('');

    function onSave(event:any){
        event.preventDefault(); 
        let userObj ={name,email,contact,pincode}  ;
        console.log(userObj);
        addUser(userObj);
    }
    return(
        <>
        <h1>{children}</h1>
        <form className="form"> 
              
            <div className="row">
                <div className="col">
                    <label>Name:</label>
                    <input className="form-control"
                            type="text"
                            name="userName"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            placeholder="Enter name"/>
                </div>
                <div className="col">
                    <label>Email:</label>
                    <input className="form-control"
                            type="text" 
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} 
                            
                            placeholder="Enter Email"
                             />
                </div>
                <div className="row">
                <div className="col">
                    <label>Contact:</label>
                    <input className="form-control"
                            type="tele"
                            name="contact"
                            value={contact}
                            onChange={(e)=>setContact(e.target.value)}
                            placeholder="Enter contact number"/>
                </div>
                <div className="col">
                    <label>Pincode:</label>
                    <input className="form-control"
                            type="text" 
                            name="pincode" 
                            value={pincode}
                            onChange={(e)=>setPincode(e.target.value)}
                            placeholder="Enter pincode"
                             />
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={onSave} className="btn btn-primary">Submit </button>
                </div>
            </div>

        </form>
        
        
        </>
    );
}
export default UserForm;