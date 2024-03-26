
import "./App.css";
import Imagezoomer from "./component/ImageZoomer";
import MyForm from "./component/MyForm";

const Imagehandaller = () => {

  

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  const handleButtonDoubleClick = () => {
    alert("Button double-clicked");
  };

  const handleTextBoxFocus = () => {
    console.log("Focused on the textbox");
  };

  const handleTextBoxBlur = () => {
    console.log("Out of the textbox");
  };

  const handleTextCopy = () => {
    alert("Text copied");
  };

  const handleTextCut = () => {
    alert("Text cut");
  };

  const handleTextPaste = () => {
    alert("Text pasted");
  };
  return (
    <>
    
      <div>
      <Imagezoomer zoomAutoSize="200"/>
      <br />
      <button 
        onClick={handleButtonClick} 
        onDoubleClick={handleButtonDoubleClick}
      >
        Click Me
      </button>
      <br />
      <input 
        type="text" 
        onFocus={handleTextBoxFocus} 
        onBlur={handleTextBoxBlur}
        onCopy={handleTextCopy}
        onCut={handleTextCut}
        onPaste={handleTextPaste}
      />
      <p>Try copying, cutting, or pasting text in the input box.</p>
    </div>

    {/*  for 2nd Assigment */}
    <MyForm></MyForm>
    </>
  );
}

export default Imagehandaller;
