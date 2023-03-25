const root = ReactDOM.createRoot(document.getElementById('root'));
// React.createElement(type, [props], [...children]);
const title = React.createElement(
    'h1',
    {
        title: 'Hello World',
        className: 'Heading',
        style: {
            color: 'red',
        },
    },
    'Hello World',
);

const ul = React.createElement(
    'ul',
    {
        id: 'ul-id',
        style: {
            color: 'red',
        },
    },
    React.createElement(
        'li',
        {
            id: '1',
        },
        'Clean room',
    ),
);

const div = React.createElement(
    'div',
    {
        className: 'post-item',
    },
    React.createElement(
        'h2',
        {
            title: 'Học react',
        },
        'Học ReactJS',
    ),
    React.createElement('p', null, 'Học ReactJS từ cơ bản đến nâng cao'),
);
root.render(title);
