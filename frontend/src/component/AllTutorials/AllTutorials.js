import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Paper} from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const AllTutorials = () =>{

    const paperStyle = {padding: '30px 20px', width:'60%', margin:'20px auto'};
    //variable to navigate the components
    let navigate = useNavigate();

    //setting the list of tutorials
    const [data, setData] = useState([]);

    //getching all the tutorials
    useEffect(() => {
        const fetchData = async () => {
            try {
            
                const apiUrl = 'http://localhost:8080/tutorials/get/all';

                const response = await fetch(apiUrl);

                //check onthe response
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                } else {
                    console.error('Errore durante la richiesta:', response.status);
                }
            } catch (error) {
                console.error('Errore durante la richiesta:', error);
            }
        };
        fetchData();
    }, []);

    //delete endpoint
    const removetutorial = (id) => {
        fetch(`http://localhost:8080/tutorials/delete/${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then(async () => {

                const apiUrl = 'http://localhost:8080/tutorials/get/all';

                const response = await fetch(apiUrl);

                if (response.ok) {
                    alert("tutorial eliminato...")
                    const jsonData = await response.json();
                    setData(jsonData);
                }

            });
    };

    //updating a certain tutorial by the list
    const tutorialToUpdate = (id) => {

        navigate('/get/' + id);

    };

    return(
        <div style={{alignContent:'center'}}>
            <Paper elevation={2} style={paperStyle}>
            <h1>All our tutorials: </h1>
                {data.map(tutorial=>(
                
                    <Paper elevation={6} style={{margin:"10px",padding:"15px", width:'60%', content:'contents'}} key={data.id}>

                        Id: {tutorial.id} <br/>
                        Title: {tutorial.title} <br/>
                        Description: {tutorial.description} <br/>
                        published: {tutorial.published ? 'YES' : 'NO'}

                        <Stack direction="row" spacing={1} style={{width:'30%'}}>
                            <Button variant="contained" color="success" onClick={() => tutorialToUpdate(tutorial.id)}> Update</Button>
                            <Button variant="contained" color="error" onClick={() => removetutorial(tutorial.id)}> Delete </Button>
                        </Stack>
                    </Paper>
                ))
                }
            </Paper>
        </div>
    );
}
export default AllTutorials