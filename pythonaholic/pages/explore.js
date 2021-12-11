import React from 'react'
import Header from '../components/header'
import Post from '../components/Post'
import Footer from '../components/Footer'

export default function explore() {
    return (
        <div>

        <Header/> 
       
        <main className=' bg-slate-300'>
            <div className='flex flex-col w-3/5 gap-3 m-auto'>
            <Post />  
            <Post />  
            <Post />  
            </div>
          
              <Footer/> 

        </main>
        </div>

    )
}
