import { useState } from "react";
import viteLogo from "../../public/vite.svg";

const Imagezoomer = ({zoomAutoSize}) =>{

    const [imageSize, setImageSize] = useState(zoomAutoSize);

    const handleImageHover = () => {
      setImageSize(250); // Increase image size on hover
    };
  
    const handleImageMouseOut = () => {
       // debugger;
        setImageSize(zoomAutoSize); // Reset image size when mouse moves out
    };

return(
    <div>
        <img 
        src={viteLogo} 
        alt="Your Image" 
        style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
        onMouseOver={handleImageHover}
        onMouseOut={handleImageMouseOut}
      />
    </div>
);
}

export default Imagezoomer;