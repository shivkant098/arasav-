import styles from '../styles/home.module.css'
import React from 'react'
import Navbar from './Navbar/Navbar'
function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
    

  return (
    <>
    <Navbar/>
    <div className={styles.hero}>
<div className={styles.heroImg}>
  <img src="https://previews.123rf.com/images/milkos/milkos2002/milkos200205594/141394509-corporate-lifestyle-group-of-business-people-having-meeting-working-together-sitting-at-one-desk-in.jpg" alt='hero-img'/>
</div>
</div>
      </>
  )
}

export default Home
