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

export default (state = [], action) => {
    console.log("Meat Reducer is running!");
    return state;
}