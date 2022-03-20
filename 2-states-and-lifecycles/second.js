/* COMPONENT CLASSES
Like our function components, a class component accepts a member known
as "props" in the parameters of its constructor. Further, each class
component must have a render() method; this defines what is rendered
when the class comonent is asked for in a render. */

/* STATE
The STATE of a React component can be thought of as its private data.
To start defining scope, our React components can no longer be just
function components; they need to be classes that extend React.Component.

/* STATE RULES

1. Do NOT modify state directly.

When modifying state directly, the componentDidUpdate() function is NOT
called. This means that our React component is not updated, and thus we
do not see the changes that we make to our React component's state. The
ONLY place we can directly access the state is in the constructor.

If we want to modify the state, we call setState(); setState accepts one
or many JSON entries (kvp) to assign to the local state.

2. State updates may be asynchronous.

This one will take me a bit to wrap my head around.

React, for efficiency reasons, will group multiple setState calls together.
This improves performance but the result is that, even though you thought
you called the setState function, you may not have. You should not rely
on current state values for calculating the next state.

----> See reactjs.org/docs/state-and-lifecycle.html

3. State updates are merged.

When calling setState, React merges the JSON you provide into the current
state. This means that presently existing keys are updated to their new 
values, and nonexistent keys are appended to the state.

4. Data flows down -->

Parent or child components cannot know if any given component is stateful
or stateless; further, they should not care whether another component is
defined as a function or a class. A component's state is considered to be
encapsulated; it is not accessible to any other components (OOP moment).

A component can, however, pass its state down as props to its children.
*/

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "ClassComponent"
        }
    }

    // when asked for, ClassComponent returns an <h1> tag
    // containing the class name and "Example".
    render() {
        return <h1>{this.state.name} Example</h1>;
    }
}

/* LIFECYCLE METHODS
During the lifecycle, or the stretch of time that a React component exists,
various lifecycle milestones are reached. Some of these are overridable
functions, known as lifecycle methods. Primarily, we have the following
three:
--> note -- when a component "mounts", it has been rendered to the screen.

constructor()
...is called on instantiation of a new React component.

Within the constructor, default state should be set setState is safe to
call from within the constructor.

componentDidMount()
...is called after the given React component has been mounted.

calling setState is VALID within componentDidMount. It will trigger more
rendering, but this is ok. The user will not see the intermediate state,
as render() is called twice in quick succession.

componentDidUpdate(prevProps)
...is called when a component's state has been updated.

calling setState is VALID* within componentDidUpdate, however it must be
wrapped in a conditional. You must ensure that the new props are different
(!==) than the previous props.

componentWillUnmount()
...is called immediately before a component has unmounted (been deleted).

setState literally can't be called in this function because the component
will not have a chance to render the changes. Once a component has been
unmounted, it will never be mounted again. */

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    // upon creation of a new clock, call the tick function every second.
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 100
        );
    }

    // when the clock component is removed, clear our interval.
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // a function used to set the 'date' member to the current date.
    tick() {
        this.setState({
            date: new Date()
        })
    }

    // on rendering, the clock returns this.state.date.toLocaleTimeString()
    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

// Rendering the above class components using ReactDOM.render ();
ReactDOM.render (
    <div>
        <h1>The <i>State</i> of React components</h1>
        <ClassComponent />
        <Clock />
    </div>
    ,document.getElementById("react_header")
);