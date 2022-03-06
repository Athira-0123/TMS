import React from 'react';
import './trainerProfile.css';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Table, TableBody, TableContainer, TableRow ,TableCell,Paper} from '@mui/material';

function trainerProfile(props) {
    function createData(name,position) {
        return { name,position };
        }
        
        const rows = [
        createData('John Wayne','Name' ),
        createData('John@gmail.com','Email'),
        createData('Rosevilla,Gandhinagar,Mumbai', 'Address' ),
        createData('9658374637','Phone'),
        createData('Mtech','Highest Qualification'),
        createData('max Infotech', 'Company'),
        createData('Full stack developer','Skillset'),
        ];

        
        return (

        <div>
            <div className='col-sm-4 mb-4'>
            
                <Card className='pro-card' sx={{ maxWidth: 345 }}>
                <CardMedia className='pro-pic'
                    component="img"
                    height="140"
                    image="./images/hornbill.jpg"
                    alt="Trainer"
                />
                <CardContent className='pro-card'>
                    <Typography gutterBottom variant="h6" component="div">Name</Typography>
                    <Typography variant="body2" color="text.primary">designation</Typography>
                </CardContent>
                <CardActions>
                    <Button className='pro-button' variant='outlined' size="small">Edit Profile</Button>
                </CardActions>
                </Card>
            
           </div>

            {/* <section className='col'>
            <Table>
            <TableContainer component={Paper}>
                <TableHead>
                    <TableRow>
                        Trainer Profile
                    </TableRow>

                </TableHead>
                <TableBody>

                </TableBody>
            </TableContainer>
            </Table>
            </section>
        */}


        <div className='col-lg-12'>



        <TableContainer component={Paper} >
        <Table className='table1' sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
            Trainer Profile
        </TableHead>
        <TableBody className='body'>{rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell className='body' component="th" scope="row">
                {row.position}
            </TableCell>
            <TableCell className='body' align="right">{row.name}</TableCell>
           
            </TableRow>
                ))}
            </TableBody>
            </Table>
            </TableContainer>


        </div>
        </div>

    );
}


export default trainerProfile;