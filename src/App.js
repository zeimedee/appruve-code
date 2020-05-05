import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import NavBar from './components/nav'
import Cards from './components/card'

const useStyles = makeStyles((theme) => ({
  root:{
    '& > *':{
        margin: theme.spacing(1),
        width:'25ch'
    },
},
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {

  const [lists,setLists ]= useState([
    {'item':"10 free texts"},
  ])
            
    

  const classes = useStyles();
  return (
    <div>
    <Container>
    <NavBar />
      <div>
    <Grid className={classes.root} container spacing={3}>
    <Grid item xs>
        <Cards
          paint='primary'
          tier='BRONZE'
          price='$10'
          list={lists}

        />
        </Grid>

        <Grid item xs> 
        <Cards
          color='primary'
          tier='SILVER'
          price='$20'

        />
        </Grid>

        <Grid item xs> 
        <Cards
          color='primary'
          tier='GOLD'
          price='$50'

        />
        </Grid>
        
    </Grid>
    
        
        
      </div>
    </Container>
    </div>
  );
}

export default App;
