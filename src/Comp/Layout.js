import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div >
       <Nav/>

        <main className='bg-danger' style={{minHeight:"80vh"}}>
            {
                props.children
            }
        </main>
       <Footer/>
    </div>
  )
}
