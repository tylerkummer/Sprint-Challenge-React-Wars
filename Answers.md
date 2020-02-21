# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React is a JavaScript library for building user interfaces. React is meant to make it easier to build interactive UIs, by updating and rendering the components the user changes. React is written with encapsulated components and those components can be edited to make more complex UI. JS is written with component logic making it easy to pass data through your app and keep the state of your DOM.

2. What does it mean to think in react?

    React's documentaion has a guide for how to think in their library, and it starts by having a JSON file with a mockup from your designer. Step one would be to break the UI into a component hierarchy by drawing boxes around every component and subcomponent and naming them. Step 2 is to build a static version of the mockup in React that has no interactivity and passes data through props. Step 3 is to identify the minimal representation of UI state by making the UI interactive by triggering changes to your data model using state. Step 4 is to identify where that state needs to be located and step 5 is to add inverse data flow.

3. Describe state.

    React components have a built in state object where state stores property values that belong to the component, so when a state changes the component will re-render. From our project an example would be in StarWarsGrid where name = {person.name} where our variable name is the state.

4. Describe props.

    In React props are arguments that are passed into React components through HTML attributes. In our StarWarsCard class we can see that props are being used and assigned for example in <CardTitle style={{color: 'white'}}>Name:<br/>{props.name}</CardTitle>. Where props is coming from our state and being passed through to be assigned to appear on our DOM. 

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    A side effect is a use effect that executes when either props or a state change during a run of the React function, if the elements have changed compared to the output of the previous run an update to the DOM or function is required and the use effect will execute. You can sync use effect components to a state change by creating a useState such as in const [people, setPeople] = useState([]) and inside useEffect and then inside our axios .get .then wr can pass setPeople[response.data] which will return that value back to people. Then we can return it as a state at the bottom of our function by using name={people.name} for example, though this is not the solution to the code.
