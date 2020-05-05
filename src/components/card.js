import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TallList from './tall_list'

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
          <TallList list={props.list}/>
        </Typography>
      </CardContent>
      <CardActions>
      <Button color='secondary' size="small" variant='outlined'>Buy</Button>
      </CardActions>


        </Card>
            
        </div>
    )
}

export default Cards;
