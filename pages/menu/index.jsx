import React from 'react'
import styles from "../../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";


const index = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "this is wensite is awesome ",
    "thanks for visit us",
    " come again",
    "darshan raghwani"
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }




  return (
    <div className={styles.container}>
      <h1 className={styles.about}>about us </h1>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <h1>{images[i]}</h1>
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  





  )
}

export default index