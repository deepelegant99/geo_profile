import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { StylesProvider } from "@material-ui/core/styles";
import "../App.css";


const Navigation = () => {
  return (
    <StylesProvider>
    <nav>
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: 'none'}}>
            <Button style={{backgroundColor: 'gray', color:'white',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '1.5rem', width:'150px', borderRadius: '50px'}}>Home</Button></Link>
        </li>
        <li>
          <Link to="/profiles" style={{ textDecoration: 'none' }}>
            <Button style={{backgroundColor: 'gray', color:'white',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: '1.5rem', borderRadius: '50px'}}>Profiles</Button></Link>
        </li>
      </ul>
    </nav>
    </StylesProvider>
  );
};

export default Navigation;
