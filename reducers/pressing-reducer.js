export function pressRate (state = {pressRate: 0}, action){
    switch (action.type) {
        case 'BTN_PRESSED':
          return { pressRate : action.pressRate }

    }
    return state || {};
}

export function depressRate (state = {unpressed: 0}, action){
    switch (action.type) {
        case 'BTN_DEPRESSED':
            return { unpressed : action.unpressed }

    }
    return state || {};
}

