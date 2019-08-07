import React from 'react'

const QuizContainer = ({ text }) => {
    return (
        <>
        <h3>{text.title}</h3>
        <p>{text.text}</p>
        <a>{text.cta}</a>
        </>
    )
}

export default QuizContainer;