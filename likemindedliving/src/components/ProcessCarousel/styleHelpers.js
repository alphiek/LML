export const updateStyle = (val, currentSlide) => {
    let style;

    if (val === currentSlide.toString()) {
        style = {
            opacity: '0.8',
            fontSize: '0.75em',
            fontWeight: '800',
            color: '#585795',
            transform: 'scale(1.25)'
        }
    } else {
        style = {
            opacity: '1',
            fontSize: '0.75em',
            fontWeight: '800',
            color: '#4B4A68'
        }
    }
    return style
}


export const updateNext = ( currentSlide, totalSlides ) => {
    let next;

    if (currentSlide.toString() === totalSlides.toString()) {
        next = {
            display: 'none'
        }
    } else {
        next = {
            opacity: '1',
            fontSize: '0.7em',
            paddingTop: '0.5em',
            fontWeight: '800',
            color: '#4B4A68'

        }
    }
    return next
}


export const updatePrevious = ( currentSlide ) => {
    let previous;

    if (currentSlide.toString() === '1') {
        previous = {
            display: 'none'
        }
    } else {
        previous = {
            opacity: '0.7',
            fontSize: '0.7em',
            paddingTop: '0.5em',
            paddingRight: '1em',
            fontWeight: '800',
            color: '#585795'
        }
    }
    return previous
}


