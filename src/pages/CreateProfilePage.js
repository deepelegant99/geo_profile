import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { StylesProvider } from "@material-ui/core/styles";
import "../App.css";
import TextField from '@mui/material/TextField';

const Input = styled('input')({
    display: 'none',
  });

const CreateProfilePage = () =>{

    return(<>
        <br/>
        <br/>
        <br/>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <br/>
        <br/>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <br/>
        <br/>
        <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
            Upload
        </Button>
        </label>
        
        <br/>
        <br/>
        <Link to="/save" style={{ textDecoration: 'none'}}>
            <Button style={{backgroundColor: 'gray', color:'white',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '1.5rem', width:'150px', borderRadius: '50px'}}>Save</Button></Link>
    </>);

}


export default CreateProfilePage