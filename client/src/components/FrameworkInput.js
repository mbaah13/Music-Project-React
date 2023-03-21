import { useDispatch } from 'react-redux';
import { setFramework } from '../reducers/FrameworkReducer';

function FrameworkInput({}) {
  const dispatch = useDispatch();
  function addNewFramework(e) {
    dispatch(setFramework(e.target.value));
  }
  return (
    <input className="frameworkInput" type="text" onKeyUp={(e ) => addNewFramework(e)}></input>
  );
  }
  export default FrameworkInput;
  