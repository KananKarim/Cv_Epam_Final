import React from 'react'
import Title from '../Title'
import Chart from '../../assets/chart.png'

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <Title text="Skills" />
        <img src={Chart}/>
    </section>
  )
}

export default Skills