import React from "react";
import Webcam from "react-webcam";
function Camera() {
  return (
    <div className="relative text-black h-screen w-screen flex flex-col justify-center items-center">
      <Webcam
        audio={false}
        className="object-cover min-h-screen w-screen lg:w-auto"
        // height={1080}
        // width={1262}
        // screenshotFormat="image/jpeg"
        // videoConstraints={videoConstraints}
      />
    </div>
  );
}

export default Camera;
