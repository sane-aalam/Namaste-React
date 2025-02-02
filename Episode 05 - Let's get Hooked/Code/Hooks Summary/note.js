// * Note --> DATA_LAYER == UI_LAYER
// As you know UI Layer depends on Data Layer.
// Data will be changed then UI layer changed.
// RestaurantList data is Empty then UI will be empty.
// const restaurantList = []
// RestaurantList Data have one card data,UI will be one card.

// * Note --> Tread Javascript variable, not able to update the variable
// think - normal javascript variable
// How you do update the current-state, we need super powerful variable is called --> react hook(useState)
// hooks (don't make hard in your mind)
// * Hooks --> Normal javascript function
// React HOOKS - it just noraml function, which all given by react,it is pre-define function,(you don't need to create them)
// they all function are written by facebook developers.
// these function behide sence using algorithms, data stuctures, maths!
// you have to use it!
// useState =>
// const [currentState,UpdateState] = useState()
// There are 3 restaurants which have more than 4.5 ratings

// * Diff Algorithm == re-Rendering cycle == Reconaliation Algorithm (virtual DOM)
// Diff Algorithm = difference between old virtual DOM and new virtual DOM
// Update the UI layer based on data layer
// This is mostly aksed quesiton in frontend interview (React Fiber!)
// You know everything about Diff Algorithm!