// All reducers have 2 params
// 1. Current statement, usually provide a default
// 2. The action statement

const seedData = [
    {
        food: 'pizza',
        quantity: 12
    },
    {
        food: 'ice cream',
        quantity: 21
    },
    {
        food: 'family dinner',
        quantity: 5
    },
    {
        food: 'frozen veggies',
        quantity: 132
    }
]

export default (state = [], action) => {
    console.log("Frozen Reducer is running!");
    return state;
}