
import {useState } from 'react'

const RegisterUser= () =>{
  const [userData,setUserData] = useState({
    name: "",
    email: "",
    password:""
  })
  const handleChanges = (e) =>{
    const {name,value} = e.target
    setUserData({...userData,[name]:value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log("form submitted")
    console.log(userData)

    //fetch api 
    const CREATE_USER_URL = "http://localhost:5010/api/v1/user"
    try {
      const response = await fetch(CREATE_USER_URL,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)

      })
      if(response.ok){
        const data = await response.json()
        console.log(data)
        console.log("successfull")
      }else{
        console.log("not successfully")

      }
    } catch (error) {
      console.log("error occured")
    }



  }



  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleChanges}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChanges}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChanges}/>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )

} 

export default RegisterUser
