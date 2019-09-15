export const updateStyle = (val, currentSlide) => {
    
    let style;

    if (val === currentSlide) {
        style = {
            opacity: '0.8',
            fontSize: '0.7em',
            fontWeight: '800',
            color: '#585795',
            transform: 'scale(1.25)'
        }
    } else {
        style = {
            opacity: '1',
            fontSize: '0.7em',
            fontWeight: '800',
            color: '#4B4A68'
        }
    }
    return style
}


export const updateNext = ( currentSlide, totalSlides ) => {

    let next;

    if (currentSlide === totalSlides) {
        next = {
            display: 'none'
        }
    } else {
        next = {
            opacity: '1',
            fontSize: '0.65em',
            paddingTop: '0.5em',
            fontWeight: '800',
            color: '#4B4A68'

        }
    }
    return next
}


export const updatePrevious = ( currentSlide ) => {
    let previous;

    if (currentSlide === 1) {
        previous = {
            display: 'none'
        }
    } else {
        previous = {
            opacity: '0.7',
            fontSize: '0.65em',
            paddingTop: '0.5em',
            fontWeight: '800',
            color: '#585795'
        }
    }
    return previous
}


