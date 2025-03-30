import React from 'react'
import { useRef } from 'react'

function Scroll() {
    const bottomSectionRef = useRef(null)

    const scrollToBottom = () => {
        bottomSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  return (
    <div className='scroll-container'>
        <h1>Refs in React</h1>
        <section className='top-section'>
            <h2>Top</h2>
        </section>
        <section className='middle-section'>
            <h2>Middle</h2>
        </section>
        <section className='bottom-section' ref={bottomSectionRef}>
            <h2>Bottom</h2>
        </section>
        <button onClick={scrollToBottom}>Go to Bottom</button>
        </div>
  )
}

export default Scroll
