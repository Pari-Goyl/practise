import React from 'react';
import ReactDOM from 'react-dom';

const Title = () => (
    <h1>This is Title Component</h1>
)

//React function component
const Component = () => (
    <div id="container">
        <h1>Functional component</h1>
        {Title()}
        <Title/>
        <Title></Title>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Component />);