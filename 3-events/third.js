/* React Event Handlers

Event handling in react is very similar to event handling in conventional
DOM elements, with a few syntactical differences.

- React events are named in camelCase, not lowercase.
- Using JSX, functions are passed as an event handler over a string.

"function()" turns into  {function}. For example,

Using regular JavaScript, we'd see the following:
<button onclick="activateLasers()">
    Activate Lasers
</button>

But with React, it's a little different...
<button onClick={activateLasers}>
    Activate Lasers
</button>

When handling events in react, false cannot be returned to prevent default
JavaScript behaviour; the onclick listener must accept the event as an
argument and call its preventDefault() method directly.

Calling addEventListener for a React component is typically redundant;
instead, we can declare listeners within our React class components and
use them at runtime.
*/

// Toggle is an extension of a button
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {istToggleOn: false};

        this.click = this.click.bind(this);
    }

    click() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.click}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <div>
        <h1>React Events</h1>
        <Toggle />
    </div>
    ,document.getElementById('react_header')
);