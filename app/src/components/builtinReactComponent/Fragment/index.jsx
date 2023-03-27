import React, { Fragment, Children } from 'react';
//<Fragment></Fragment> : use with key, use attributes
// <></>: not use with key, attributes
//Group text together with components
const Header = (props) => {
    return (
        <>
            <h1>Header</h1>
            {React.Children.map(props.buttons.props.children, (child) => {
                return child;
            })}
        </>
    );
};

const OKButton = () => {
    return <button>Ok</button>;
};
const CancelButton = () => {
    return <button>Cancel</button>;
};
const BlogItem = ({ title }) => {
    return (
        <>
            <h1>{title}</h1>
        </>
    );
};
const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: 'Blog one',
        },
        {
            id: 2,
            title: 'Blog two',
        },
    ];
    // return (
    //     <>
    //         {blogs.map((blog) => {
    //             return (
    //                 <Fragment key={blog.id}>
    //                     <BlogItem title={blog.title} />
    //                 </Fragment>
    //             );
    //         })}
    //     </>
    // );
    return blogs.map((blog) => {
        return (
            <Fragment key={blog.id}>
                <BlogItem title={blog.title} />
            </Fragment>
        );
    });
};
const Frag = () => {
    const buttons = (
        <>
            <OKButton />
            <CancelButton />
        </>
    );
    return (
        <>
            <Header buttons={buttons} />
            <Blog />
        </>
    );
};

export default Frag;
