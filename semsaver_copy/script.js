const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);

    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--xp', xp);
    document.documentElement.style.setProperty('--y', y);
    document.documentElement.style.setProperty('--yp', yp);
};

document.body.addEventListener('pointermove', syncPointer);

 /*document.addEventListener('DOMContentLoaded', function () {
            // Check if the browser supports the getUserMedia API
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                // Access the camera
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(function (stream) {
                        var videoElement = document.getElementById('cameraPreview');
                        
                        // Set the video stream as the source for the video element
                        videoElement.srcObject = stream;
                    })
                    .catch(function (error) {
                        console.error('Error accessing the camera:', error);
                    });
            } else {
                console.error('getUserMedia is not supported in this browser.');
            }
        });
*/

