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
        <h2>Welcome to My Page</h2>
        <p>This is the top section. Click the button below to scroll down.</p>
        <div className='button-container'>
            <button onClick={scrollToBottom}>Go to Bottom</button>
        </div>
        </section>

        <section className='middle-section'>
            <h2>About This Project</h2>
                <p>
                This React app demonstrates how to use <code>useRef</code> <br /> to scroll to
                different sections of the page. <br /> It's part of my #30DaysOfReactjs challenge!
                </p>
        </section>

        <section className='bottom-section' ref={bottomSectionRef}>
        <h2>Thanks for Scrolling!</h2>
        <p>Hope you enjoyed this smooth scroll effect using refs!</p>
        </section>
        </div>
  )
}

export default Scroll
