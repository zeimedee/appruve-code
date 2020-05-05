import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import TallList from './tall_list'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { DialogContent } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    
  });

function Cards(props) {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [pay, setPay] = useState(false)
    const handelClose =  () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handelOpen2 =()=>{
        setOpen(false)
        setPay(true)
    }
    const handelClose2=()=>{
        setPay(false)
    }
    return (
        <div>
        <Card style={{border:'primary'}} className={classes.root} variant='outlined'>
        <CardContent>
        <Typography color={props.paint} className={classes.title}gutterBottom>
          {props.tier}
        </Typography>
        <Typography variant="h5" component="h2">
            {props.price}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* <TallList list={props.list}/> */}
        </Typography>
      </CardContent>
      <CardActions>
      <Button color='secondary' size="small" variant='outlined' onClick={handleOpen}>Buy</Button>
      </CardActions>


        </Card>

       <Dialog
        open={open}
        onClose={handelClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        >
        <DialogTitle id='alert-dialog-title'>{'Enter Time and Title'}</DialogTitle>
        <Button onClick={handelOpen2}>Pay</Button>
        <DialogContent>
        <TextField
            label='enter MoMo number'
            variant="outlined"
            id="name"
            type="text" 
          />
          <TextField
            label='enter amount'
            variant="outlined"
            id="name"
            type="text" 
          />
        </DialogContent>

        </Dialog>

        <Dialog
        open={pay}
        onClose={handelClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        >
        <DialogTitle color='secondary' id='alert-dialog-title'>{'payment success'}</DialogTitle>
        <Button onClick={handelClose2}>CLOSE</Button>

        </Dialog>
            
        </div>
    )
}

export default Cards;
