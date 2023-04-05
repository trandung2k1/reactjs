import { useImperativeHandle, forwardRef, useRef } from 'react';
import video from './assets/video.mp4';
// const Video = (props, ref) => {
//     return (
//         <div>
//             <h1>Video</h1>
//             <video ref={ref} src={video} width={280} controls />
//         </div>
//     );
// };
// export default forwardRef(Video);

// const Video = forwardRef((props, ref) => {
//     return (
//         <div>
//             <h1>Video</h1>
//             <video ref={ref} src={video} width={280} controls />
//         </div>
//     );
// });

const Video = forwardRef((props, ref) => {
    const videoRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            play() {
                videoRef.current.play();
            },
            pause() {
                videoRef.current.pause();
            },
        };
    });
    return (
        <div>
            <h1>Video</h1>
            <video ref={videoRef} src={video} width={280} controls />
        </div>
    );
});

export default Video;
