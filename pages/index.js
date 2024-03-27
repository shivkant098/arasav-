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
    <main className={styles.main}>
      <Navbar/>
          </main>
  )
}

export default Home
