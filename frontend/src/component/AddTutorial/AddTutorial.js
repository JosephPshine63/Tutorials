import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {Paper} from '@mui/material';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';

const AddTutorial = () =>{
    
    //setting the paper style
    const paperStyle = {padding: '30px 20px', width:600, margin:'20px auto'};

    //variable to navigate the components
    let navigate = useNavigate();

    //data of the tutorial
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[published, setPublished] = useState(false)

    //hadlinf the button NEEDS TO FINISH
    const addTutorial = async (event) =>{
      event.preventDefault();

        //form of the tutorial
        const formData = {
            title: title,
            description: description,
            published: published

        };

        console.log(published)

        try {

            const apiUrl = 'http://localhost:8080/tutorials/post';

            // Esegui la richiesta POST all'API
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("tutorial inserito in lista!");
                console.log('Dati inviati con successo!');
                navigate('/get/all');

            } else {
                console.error('Errore durante l\'invio dei dati:', response.status);
            }
        } catch (error) {
            console.error('Errore durante la richiesta:', error);
        }
    };
    


    return (


        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={addTutorial}
        >
          <Paper elevation={3} style={paperStyle} >
          <h2>Want to add a Tutorial?</h2>

          <Stack direction="column" spacing={2}>
            <TextField required id="outlined-required" label="Title" defaultValue="Title" value={title}
            onChange={(event) => setTitle(event.target.value)} fullWidth/>
            
            <TextField required id="outlined-required" label="Description" defaultValue="Description" value={description}
            onChange={(event) => setDescription(event.target.value)} fullWidth/>

            <FormControlLabel control={<Checkbox value={published} 
            onClick={(event) => setPublished(event.target.checked)}/>} label="Is this tutorial published?" />


            <Button type='submit' variant="contained"  onClick={() => addTutorial} endIcon={<SendIcon />}>
                Submit
            </Button>
          </Stack>
          </Paper>
        </Box>
      );
}

export default AddTutorial;