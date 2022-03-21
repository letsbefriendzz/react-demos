/* LISTS
We can render multiple items to the screen using arrays of JSX objects.
For example: */

const arr = [ <li>one</li>, <li>two</li>, <li>three</li> ];

/* LISTS cont'd
Further, we can easily convert an array of primitives or other objects
to an array of JSX objects by iterating over it or using the .map function.
For example: */

const names = ["Ryan", "Hudson", "Jacob", "Megan", "Colin"];

const jsx_names = names.map(name =>
    <li><b><i>{name}</i></b></li>
);

/* LISTS cont'd
As can be observed above, an existing array of values can be easily turned
into an array of JSX objects. This array can be rendered just as easily. As
can be observed below, we simply wrap jsx_names in curly braces and tags;

<ul>{jsx_names}</ul>

While we're using an unordered list and list element tags for this example,
this can just as easily be done with a div and multiple <h1> tags; or any
tag of your choice. */

/* LISTS as COMPONENTS
Conventionally, lists are rendered as components. This allows encapsulation
of the rendering logic, thus creating cleaner and more concise code. For
example, instead of creating an <ul> to contain our jsx_names field, we
could turn this into a well encapsulatd function component instead. */

/* KEYS for LISTS
Keys help React keep track of which subcomponents have been added, removed,
or modified. Usually, when we render a list, we do so with an object that
has a defined "key" value; that is, something we can rely on within each
object instance to be unique. As a last resort, using the instance's index
within the array as a key is acceptable but STRONGLY discouraged.

For example;

const itemsList = items.map( (item) =>
    <li key={item.id}>
        {item.text}
    </li>
);

items is an array of objects that have a defined key and defined text. The
key is used for unique identification, and the text is used for rendering.

/* KEYS relative to COMPONENTS

Keys only have context within the surrounding array. Thus, a key should be
stored in the component that is an immediate child of an array. If we were
to render an array of a custom component called <ListItem /> that contained
<li></li> tags, we would store the unique key of the element within the
<ListItem /> itself, NOT its subcomponent <li>.

Keys do not need to be globally unique; only unique relative to their
siblings.
*/

function NamesList(props) {
    const names = props.names;
    // no key present! this is bad practice!
    const namesList = names.map( name => <li>{name}</li> );
    return ( <ul>{namesList}</ul> );
}

ReactDOM.render(
    <h1>Rendering Lists with Arrays</h1>
    ,document.getElementById('react_header')
);

ReactDOM.render(
    <div>
        <h2>An array of JSX objects, written easily to the screen.</h2>
        <ul>{arr}</ul>

        <h2>A list of names, converted to li tags.s</h2>
        <ul>{jsx_names}</ul>

        <h2>A list of names, rendered from a function component.</h2>
        <NamesList names={names}/>
    </div>
    ,document.getElementById('react_root')
);