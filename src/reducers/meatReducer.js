// All reducers have 2 params
// 1. Current statement, usually provide a default
// 2. The action statement

const seedData = [
    {
        food: 'steak',
        quantity: 20
    },
    {
        food: 'chicken',
        quantity: 4
    },
    {
        food: 'fish',
        quantity: 12
    },
    {
        food: 'crab',
        quantity: 120
    }
]

export default (state = seedData, action)=>{
    console.log("Meat Reducer is running!");
    console.log(action.type)
    console.log(action.payload)
    if (action.type === 'updateMeat'){
        // the user clicked on a + or - button on a frozen item
        // we make a copy of state... we NEVER EVER change it ourselves
        let newState = [...state];

        console.log(newState[action.payload.indexToChange].quantity);

        if (action.payload.operation === '+') {
            newState[action.payload.indexToChange].quantity++;
        } else if (action.payload.operation === '-') {
            newState[action.payload.indexToChange].quantity--;
        }
        return newState;
    } else if (action.type === 'clearInventory') {
        return [];
    } else if (action.type === 'resetInventory') {
        return seedData;
    } else if(action.type === 'addItem-Meat') {
        let newState = [...state];
        const food = action.payload.food;
        const quantity = action.payload.quantity;
        newState.push({
            food,
            quantity
        })
        return newState;
    } else {
        return state;
    }   
}