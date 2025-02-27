import React, { Component } from 'react';

class QuoteGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positiveQuotes: [
            "Everything is unfolding perfectly for me.",
            "I am always in the right place at the right time.",
            "Good things are constantly flowing into my life.",
            "I'm so proud of how far I've come.",
            "Today is full of opportunities, and I welcome them all.",
            "I trust that everything is working out in my favor.",
            "Every challenge I face is leading me to something better.",
            "I attract positivity and success effortlessly.",
            "I am becoming the best version of myself every single day.",
            "Great things are always on their way to me.",
            "I am aligned with joy, success, and abundance.",
            "Everything I desire is coming to me in perfect timing.",
            "I celebrate my wins, big and small, every day.",
            "My life is filled with beautiful possibilities.",
            "I am grateful for the progress I make each day."
          ],
          currentQuote: ""
        };
    }

    componentDidMount() {
        console.log("Component Mounted!");
        this.generateRandomQuote();
      }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentQuote !== this.state.currentQuote) {
          console.log("New Quote Loaded:", this.state.currentQuote);
        }
      }

      
      generateRandomQuote = () => {
        const { positiveQuotes } = this.state;
        const randomIndex = Math.floor(Math.random() * positiveQuotes.length);
        this.setState({ currentQuote: positiveQuotes[randomIndex] });
      };

    render() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Inspirational Quote Generator</h1>
            <p>{this.state.currentQuote}</p>
            <button onClick={this.generateRandomQuote} className="btn btn-primary">
                New Quote
        </button>
        </div>
        );
    }
    }

export default QuoteGenerator;