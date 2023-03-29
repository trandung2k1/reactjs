import React from 'react';

const WebAPI = () => {
    const [countdown, setCountdown] = React.useState(10);
    // React.useEffect(() => {
    //     if (countdown <= 0) {
    //         setCountdown(0);
    //     }
    //     const timer = setTimeout(() => {
    //         setCountdown(countdown - 1);
    //     }, 1000);
    //     console.log(timer);
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [countdown]);

    React.useEffect(() => {
        //Closure, issues:mount -> unmount -> mount
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 0) {
                    return 0;
                } else {
                    return prev - 1;
                }
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            <h1>WebAPI</h1>
            {countdown}
        </div>
    );
};

export default WebAPI;
