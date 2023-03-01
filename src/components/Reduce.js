export const inititalState = {count: 0};

export function reducer(state,action){
    switch (action.type){
        case 'increase':
            return {count: state.count + 1}
        case 'decrease':
            return {count: state.count - 1}    
    default:
        throw new Error        

    }
}