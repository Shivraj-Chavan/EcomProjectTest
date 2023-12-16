import React, { useState } from 'react'
import Layout from './Layout'
import { useNavigate } from 'react-router-dom'

export default function Login() {
        const navgite=useNavigate()
    const [name,setname]=useState("")
    const [pass,setpass]=useState("")
    const [error,seterror]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault()

        if(name==""){
            seterror("ënter your name")
        }
        else{
            navgite("/home")
            localStorage.setItem("UserName",name)
        }

    }


  return (
   <Layout>
 <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <form onSubmit={handlesubmit}>
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <div className="form-outline form-white mb-4">
              <p className='text-danger'>{error}</p>
                <input type="text" id="typeEmailX" onChange={(e)=>{setname(e.target.value)}} className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>
            
              <div className="form-outline form-white mb-4">
                <input type="text" id="typePasswordX" onChange={(e)=>{setpass(e.target.value)}} className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>
              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <button className="btn btn-outline-light btn-lg px-5"  type="submit">Login</button>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg" /></a>
              </div>
              </form>
            </div>
            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   </Layout>
  )
}
