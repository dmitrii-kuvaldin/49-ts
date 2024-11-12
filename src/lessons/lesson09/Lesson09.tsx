import React from 'react'
// css модули мы импортируем в переменной
import styles from './lesson09.module.css'

export default function Lesson09() {
  // console.log(styles)
  return (
    <div className="lesson-container">
      <h2 className={styles.heading}>Lesson 09</h2>
      <p className={styles.desc}>CSS modules - это способ, как мы можем изолированно работать со стилями css</p>
    </div>
  )
}
