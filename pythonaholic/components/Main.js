import React from 'react'
import MyDropDown from './drop_down_menu'

export default function Main() {
    return (
        <main >
       <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet"/>
<div class="container-fluid"/>

  <div class="background">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
  <header>
    <section class="header-content">
      <h1>Welcome</h1>
      <p> Welcome to our studio. We are a passionated group of people,
        making high quality products designed to make your life easier.</p>
      <MyDropDown/>
      <button>Sign in </button>
    </section>
    
  </header>
    <div/>   
        </main>
    )
}

