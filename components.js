const root = ReactDOM.createRoot(document.getElementById('root'));
const Header = () => {
    return (
        <div>
            <h1>Header</h1>
        </div>
    );
};

class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Content</h1>
            </div>
        );
    }
}

const app = (
    <div>
        <Header />
        <Content />
    </div>
);

// const PostItem = (props) => {
//     if (typeof props.callback === 'function') {
//         props.callback(Math.floor(Math.random() * 100));
//     }
//     if (typeof props.randomNumber === 'function') {
//         props.randomNumber(Math.floor(Math.random() * 100));
//     }
//     return (
//         <div className="post-list">
//             <img src={props.image} alt={props.title} />
//             <h2 className="post-title">{props.title}</h2>
//             <p className="post-desc">{props.description}</p>
//             <p className="post-published">{props.publishedAt}</p>
//         </div>
//     );
// };

//using destructuring and default value
const PostItem = ({
    title,
    image,
    description,
    publishedAt,
    randomNumber = () => {},
    callback = () => {},
}) => {
    callback(Math.floor(Math.random() * 100));
    randomNumber(Math.floor(Math.random() * 100));
    return (
        <div className="post-list">
            <img src={image} alt={title} />
            <h2 className="post-title">{title}</h2>
            <p className="post-desc">{description}</p>
            <p className="post-published">{publishedAt}</p>
        </div>
    );
};
function App() {
    const handleRandom = (number) => {
        console.log(number);
    };
    return (
        <div>
            <PostItem
                image="https://files.fullstack.edu.vn/f8-prod/blog_posts/311/6147eea9cef9c.png"
                title="C#(.NET) - Tương tác với file Excel"
                description="Bạn có kiến thức C#!Bạn muốn thực hiện với file excel"
                publishedAt="Một ngày trước - 5 phút đọc"
                callback={(random) => {
                    console.log(random);
                }}
                randomNumber={handleRandom}
            />
        </div>
    );
}
// console.log(app);

root.render(<App />);
