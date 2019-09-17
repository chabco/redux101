// All reducers have 2 params
// 1. Current statement, usually provide a default
// 2. The action statement

const seedData = [
    {
        food: 'cheese',
        quantity: 10
    },
    {
        food: 'milk',
        quantity: 21
    },
    {
        food: 'yogurt',
        quantity: 5
    },
    {
        food: 'kefir',
        quantity: 3
    }
]

export default (state = seedData, action) => {
    console.log("Dairy Reducer is running!");
    console.log(action.type);
    return state;
}