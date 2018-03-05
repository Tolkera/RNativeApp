let rate = 0;

export const increaseCounter = pressed => {
    return {
        type: 'BTN_PRESSED',
        pressRate: ++rate
    }
}

export const decreaseCounter = pressed => {
    return {
        type: 'BTN_UNPRESSED',
        unpressed: true
    }
}