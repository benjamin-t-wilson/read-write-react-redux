import React from "react";
import "./App.scss";

function App() {
  return (
    <section className="App">
      <header>
        <h1>Read & Write React-Redux</h1>
        <p>Hello and welcome to my small fraction of the internet!</p>
        <p>
          The purpose of this quick web app is partially for me to remember how
          to use React-Redux, and the rest is to help bolster anyone else's
          understanding. Please enjoy, if you have any comments or questions
          please feel free to leave me some feedback!
        </p>
        <a href="mailto:whatsup@btwicode.com">whatsup@btwicode.com</a>
      </header>
      <section className="tutorial">
        <div className="step">
          <h1>
            <span>||</span> Quick breakdown:
          </h1>
          <p>
            The purpose of Redux is to transform state into an immutable,
            read-only object. Changes can only be made to this state object by
            way of actions filed through reducer functions and middleware. This
            creates predictable and consistent responses from your app. Redux
            also reduces the need for excessive prop drilling, as well as allows
            all components access to the same state object.
          </p>
          <p>
            The general steps for setting up a React-Redux app are outlined as
            follows:
          </p>
          <ol>
            <li>Set up file structure and dependencies</li>
            <li>Build a reducer function</li>
            <li>Define a Redux store</li>
            <li>Add actions</li>
            <li>Final Setup / Usage</li>
          </ol>
          <p>Let's get started!</p>
        </div>
        <section className="step">
          <h1>
            <span>||</span> File Structure Architecture and Dependencies
          </h1>
          <p>
            If you have not already, the first thing you need to do is run a new{" "}
            <span>CRA</span> or <span>create-react-app</span> for those who have
            not seen the alternative jargon. The best documentation I have seen
            on the internet about CRA if you need more info is{" "}
            <a href="https://github.com/facebook/create-react-app">HERE</a>.
          </p>
          <p>
            So we have our brand new, nice and shiny React app. Go ahead and
            open up the <span>src</span> folder and create two new folders named{" "}
            <span>actions</span> and <span>reducers</span>. Inside each of
            those, create a new JavaScript file. You can name these whatever you
            want, but if you name them <span>index.js</span> you do not need to
            specify your import file later, just the folder.
          </p>
          <p>
            Then the dependencies we are going to need for this project are:
          </p>
          <ul>
            <li>redux</li>
            <li>react-redux</li>
            <li>redux-thunk</li>
          </ul>
          <p>Your new file structure should look like this:</p>
          <div className="code">
            <ul>
              <li>my-app</li>
              <li>|- README.md</li>
              <li>|- node_modules</li>
              <li>|- package.json</li>
              <li>|- .gitignore</li>
              <li>|- public</li>
              <li>|- src</li>
              <li className="tab">|- App.css</li>
              <li className="tab">|- App.js</li>
              <li className="tab">|- App.test.js</li>
              <li className="tab">|- index.css</li>
              <li className="tab">|- index.js</li>
              <li className="tab">|- logo.svg</li>
              <li className="tab">|- serviceWorker.js</li>
              <li className="dtab">|- actions</li>
              <li className="ttab">|- index.js</li>
              <li className="dtab">|- reducers</li>
              <li className="ttab">|- index.js</li>
            </ul>
          </div>
        </section>
        <section className="step">
          <h1>
            <span>||</span> Let's write a reducer function
          </h1>
          <p>
            The reducers index file will hold our{" "}
            <span>initial state object</span> as well as the function that will
            handle incoming action objects, we call that the{" "}
            <span>reducer function</span>. We should start by defining our{" "}
            <span>initial state object</span>.
          </p>
          <p>
            This object should have a key for any data that needs to persist
            through your app. For the sake of this project, we will keep it
            simple and build a counter. That means we probably only need one
            key, and that will be count.
          </p>
          <p>
            Then comes the <span>reducer function</span>. We are going to want
            to export this function for use elsewhere, so we will start with
            exporting a constant with the name of whatever your heart desires,
            but best practice is to call it <span>reducer</span>. This function
            will take two arguments, an initial state object and an action
            object. The initial state object that our reducer takes will not be
            changing, so it is best to assign that directly in the definition of
            the function using another name (shorter is smarter) and the
            assignment operator. This will be shown below, so don't panic if you
            don't understand yet.
          </p>
          <p>
            Inside our function, we are going to create a{" "}
            <span>switch statement</span> checking for changes in the expression
            of <span>action.type</span>. Inside our switch for now, we are just
            going to return the same state object by default. Note, a{" "}
            <span>switch statement</span> in our reducer without a default will
            break our code.
          </p>
          <p>See code below:</p>
          <div className="code">
            <ul>
              <li>const initialState = {`{`}</li>
              <li className="tab">count: 0</li>
              <li>{`}`};</li>
            </ul>
            <ul>
              <li>
                export const reducer = (state = initialState, action) => {`{`}
              </li>
              <li className="tab">switch (action.type) {`{`}</li>
              <li className="dtab">default:</li>
              <li className="ttab">return state;</li>
              <li className="tab">{`}`}</li>
              <li>{`}`}</li>
            </ul>
          </div>
        </section>
        <section className="step">
          <h1>
            <span>||</span> This Little Piggy Went To The Store
          </h1>
          <p>
            Our next objective is to define a <span>store</span> for us to use.{" "}
            <span>Store</span> is just a fancy way of referring to the state
            object provided to the app. Hop on over to the <span>index.js</span>{" "}
            file in the <span>src</span> folder of your app.
          </p>
          <p>In here we are going to import:</p>
          <ul>
            <li>reducer from our reducers index.js file</li>
            <li>createStore and applyMiddleware from redux</li>
            <li>Provider from react-redux</li>
            <li>thunk from redux-thunk</li>
          </ul>
          <p>
            Then we need to define the store. Start with a constant called{" "}
            <span>"store"</span> and use the assignment operator to declare it
            equal to running the <span>createStore</span> function, passing{" "}
            <span>reducer</span> as our first argument, and{" "}
            <span>applyMiddleware(thunk)</span> as our second.
          </p>
          <p>
            Next up, we need to wrap our <span>App component</span> in our{" "}
            <span>Provider component</span> passing our <span>store</span> as a
            prop. See code below:
          </p>
          <div className="code">
            <ul>
              <li>import {`{ reducer }`} from "./reducers";</li>
              <li>import {`{ createStore, applyMiddleware }`} from "redux";</li>
              <li>import {`{ Provider }`} from "react-redux";</li>
              <li>import thunk from "redux-thunk";</li>
            </ul>
            <ul>
              <li>
                const store = createStore(reducer, applyMiddleware(thunk));
              </li>
            </ul>
            <ul>
              <li>ReactDOM.render(</li>
              <li className="tab">{`<Provider store={store}>`}</li>
              <li className="dtab">{`<App />`}</li>
              <li className="tab">{`</Provider>`},</li>
              <li className="tab">document.getElementById("root")</li>
              <li>);</li>
            </ul>
          </div>
        </section>
        <section className="step">
          <h1>
            <span>||</span> Let's Get Some Action
          </h1>
          <p>
            Getting close to the home stretch now! Alright we need to come up
            with some actions. We already said we are building a counter app, so
            this can be done with just one action, and that will probably be
            increasing our counter. Hop on over to the <span>actions</span>{" "}
            folder's <span>index.js</span> file.
          </p>
          <p>
            The first thing we will do is create and export some constants that
            will hold <span>string values</span> for our{" "}
            <span>action types</span>. This is a good idea to reduce the amount
            of errors coming from misspelling. We will also need to create and
            export what we call an <span>action creator</span> function for each{" "}
            <span>action type</span> we have. This may sound confusing, but this
            will be a function that runs a function with a parameter of{" "}
            <span>dispatch</span>. Then, we will dispatch our{" "}
            <span>action object</span> which contains a <span>type</span> and an
            optional <span>payload</span>. See the code below:
          </p>
          <div className="code">
            <ul>
              <li>export const INCREASE_COUNT = "INCREASE_COUNT"</li>
            </ul>
            <ul>
              <li>export const countAction = () => dispatch => {`{`}</li>
              <li className="tab">dispatch{`({ type: INCREASE_COUNT })`}</li>
              <li>{`}`}</li>
            </ul>
          </div>
        </section>
        <section className="step">
          <h1>
            <span>||</span> The Home Stretch
          </h1>
          <p>
            Here we are, the final things to set up and use your app! Head on
            over to the main <span>App.js</span> and we will get coding.
          </p>
          <p>
            You're going to need to do a grip of things that are probably going
            to look or sound pretty weird. But we will take it one step at a
            time. First, import the <span>connect</span> function from{" "}
            <span>react-redux</span>, as well as any{" "}
            <span>action creators</span> you want to use.
          </p>
          <p>
            Outside of your <span>App function</span> (or any component that
            needs access to the store) we are going to need to write a new
            function that is called <span>mapStateToProps</span> by best
            practice. This function will have a single parameter that we will
            call <span>state</span>, and return an object with any of the keys
            from the store that you would like to have in this component.
          </p>
          <p>
            We are also going to need to do something weird to our export line.
            This will feel bad, but it's okay. Delete your export line. Get up,
            walk around the house. Pour some whiskey into a glass with some ice.
            Take a sip but don't swallow. Swish it around. Ponder life choices.{" "}
            <span>OK snap out of it.</span> We are going to write a connect
            function instead. Export default connect, first parameter is your{" "}
            <span>mapStateToProps</span> function we just wrote. Second
            parameter is an object containing whatever action creator your
            component needs. End the parenthesis and then immediately open
            another set and put in the name of your component function.
          </p>
          <p>
            Upon completing this step, you can now pass the data around in your
            app. Example, maybe display the count in a paragraph tag to show
            it's current value. Or use the <span>countAction</span> function as
            an onClick for a button. See code below:
          </p>
          <div className="code">
            <ul>
              <li>import {`{ countAction }`} from "./actions";</li>
              <li>import {`{ connect }`} from "react-redux";</li>
            </ul>
            <ul>
              <li>const mapStateToProps = state => {`{`}</li>
              <li className="tab">return {`{`}</li>
              <li className="dtab">count: state.count</li>
              <li className="tab">{`};`}</li>
              <li>{`};`}</li>
            </ul>
            <ul>
              <li>export default connect(</li>
              <li className="tab">mapStateToProps,</li>
              <li className="tab">{`{ countAction }`}</li>
              <li>)(App);</li>
            </ul>
          </div>
        </section>
        <section className="step">
          <h1><span>||</span> Plot Twist! Another step!?</h1>
          <p>I'll wait for you to come back with a new keyboard because you've surely broken yours.</p>
          <p>Welcome back. Okay, so now we have a store. Our App has access to it, as well as our action creator. But if you remember our reducer, we just set a default and didn't tell it anything to do with actions. Hop on back over to the <span>reducers file index.js</span>.</p>
          <p>Okay, we are going to need to import our <span>action name</span>, then go back down to our <span>switch</span>. We are going to turn this into something reminiscent of an <span>if statement</span> by adding a <span>case</span> that checks the <span>action type</span> and returns an updated state object by first spreading in state to prevent us from losing anything else inside it, then updating the count key. I promise this is fast. Code below:
          </p>
          <div className="code">
            <ul>
              <li>import INCREASE_COUNT from "../actions";</li>
            </ul>
            <ul>
            <li>
                export const reducer = (state = initialState, action) => {`{`}
              </li>
              <li className="tab">switch (action.type) {`{`}</li>
              <li className="dtab">case INCREASE_COUNT:</li>
              <li className="ttab">return {`{`}</li>
              <li className="qtab">...state</li>
              <li className="qtab">count: state.count += 1</li>
              <li className="ttab">{`}`}</li>
              <li className="dtab">default:</li>
              <li className="ttab">return state;</li>
              <li className="tab">{`}`}</li>
              <li>{`}`}</li>
            </ul>
          </div>
        </section>
      </section>
      <footer>
        <h1>Thank you so much for visiting!</h1>
        <p>Again I hope my effort is able to help you out. Please leave feedback if you have any. Or check out the Redux documentation!</p>
        <a href="mailto:whatsup@btwicode.com">whatsup@btwicode.com</a>
        <a href="https://react-redux.js.org/">React-Redux Docs</a>
      </footer>
    </section>
  );
}

export default App;
