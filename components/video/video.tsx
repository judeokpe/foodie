'use client'
const VideoComp = () => {
    return ( 
        <div className="">
            <div className="">
      <div className="">
        <video
          width="320"
          height="240"
          controls
          preload="none"
          autoPlay
          loop
          muted
          className=" overflow-x-hidden w-full "
        >
          <source src="/assets/meal.mp4" type="video/mp4" />
          
        </video>
      </div>
    
    </div>
        </div>
     );
}
 
export default VideoComp;