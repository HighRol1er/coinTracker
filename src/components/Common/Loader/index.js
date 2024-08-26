import CircularProgress from '@mui/material/CircularProgress';
import "./styles.css";

function Loader() {
  return (
    <div className='loader-container'>
      <CircularProgress />
    </div>
  );
}

export default Loader;