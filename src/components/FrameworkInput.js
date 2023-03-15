
function FrameworkInput({setFramework}) {
  function addNewFramework(e) {
    setFramework(e.target.value);
  }
  return (
    <input className="frameworkInput" type="text" onKeyUp={(e) => addNewFramework(e)}></input>
  );
  }
  
  export default FrameworkInput;
  