import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles({
    center: {
      width: '100%',
      textAlign: 'center',
    },
    title: {
      paddingTop: '20px',
    },
    description: {
      width: '100%',
      paddingTop: '20px',
      paddingBottom: '20px',
      maxWidth: '700px',
      display: 'inline-block',
    },  
  });

export default function Home() {
    const classes = useStyles();
    return (
      <div className={classes.center}>
      <div className={classes.title}>
        <Typography variant="h4">Welcome to the Lancaster Chess Club</Typography>
      </div>
      <div className={classes.description}>
        <Typography className={classes.description}>
          Based in the heart of Lancaster, UK, our historic club which dates back
          to 1895 welcomes players of all abilities to come and enjoy a game of chess. Be 
          it for short, long, casual or competitive games there's something for everyone
          here.
        </Typography>
        <Typography className={classes.description}>
          The club meets twice weekly and over the course of the year highlights include
          the round robin club championship (90 minutes), to the rapid play championship,
          as well as occasional blitz chess tournaments. And for players who prefer to 
          play casual games club nights always offer the opportunity to have a game.
        </Typography>
        <Typography className={classes.description}>
          If this sounds good please see the information for club nights below - we look 
          forward to welcoming you soon!
        </Typography>
      </div>
      </div>
    );
  }