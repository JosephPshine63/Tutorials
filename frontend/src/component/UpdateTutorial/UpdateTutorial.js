import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';
import {Paper} from '@mui/material';
import Stack from '@mui/material/Stack';

const UpdateTutorial = () =>{

    const paperStyle = {padding: '30px 20px', width:600, margin:'20px auto'};

    let navigate = useNavigate();

    const { id } = useParams();


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [published, setPublished] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `http://localhost:8080/tutorials/get/${id}`;

                const response = await fetch(apiUrl);

                if (response.ok) {
                    const jsonData = await response.json();

                    setTitle(jsonData.title);
                    setDescription(jsonData.description);
                    setPublished(jsonData.published);


                } else {
                    console.error('Errore durante la richiesta:', response.status);
                }
            } catch (error) {
                console.error('Errore durante la richiesta:', error);
            }
        };

        //call of the created function
        fetchData();
    }, []);

    const updateTutorial = async (event) => {
        event.preventDefault();

        const formData = {
            id: id,
            title: title,
            description: description,
            published: published,

        };

        try {

            const apiUrl = 'http://localhost:8080/tutorials/put';

            // Esegui la richiesta PUT all'API
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("dati aggiornati!")
                console.log('Dati inviati con successo!');
                navigate('/getAll');

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
          onSubmit={updateTutorial}
        >
            
            <Paper elevation={3} style={paperStyle} >
                <h2>Want to add a Tutorial?</h2>

                <Stack direction="column" spacing={2}>
                    <TextField required id="outlined-required" label="ID" defaultValue="ID" value={id}
                    onChange={(event) => setTitle(event.target.value)} fullWidth disabled/>

                    <TextField required id="outlined-required" label="Title" defaultValue="Title" value={title}
                    onChange={(event) => setTitle(event.target.value)} fullWidth/>
                    
                    <TextField required id="outlined-required" label="Description" defaultValue="Description" value={description}
                    onChange={(event) => setDescription(event.target.value)} fullWidth/>

                    <FormControlLabel control={<Checkbox value={published} 
                    onClick={(event) => setPublished(event.target.checked)}/>} label="Is this tutorial published?" />

                    <Button type='submit' variant="contained"  onClick={() => updateTutorial} endIcon={<SendIcon />}>
                        Submit
                    </Button>
                </Stack>
            </Paper>
        </Box>
      );
}
export default UpdateTutorial