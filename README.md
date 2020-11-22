## Three Principles 

# First Principle

"The state of your whole application is stored in an object tree within a single store"
Maintain our application state in a single object which would be managed by the redux store

# Second Principle
"The only way to change the state is to dispatch an action, an object describing what happened"
To update the state of your app, you need to let Redux know about that with an action
Not allowed to directly update the state object

# Third Principle 
"To specify how the state tree is transformed by actions, you write pure reducers"
Reducer - (previousState, action) => newState