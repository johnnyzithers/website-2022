import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Hidden from "@material-ui/core/Hidden";

import MusicNoteIcon from '@mui/icons-material/MusicNote';


import { cardDiv } from '../components/card.module.css'
import Video from "../components/video"

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    // width: '100%',
    height: 300,
    width: 500,

  },
  card: {
    display: "flex",
    maxWidth: 800,
  },
  links: {
    // marginRight: "auto",
  },
  tag: {
    marginRight: 5,
    // marginBottom: 5,
  },
}));

function TagsContainer({ tags }) {
  const styles = useStyles();
  return (
    <div>
      {tags.map((tag) => (
        <Chip
          className={styles.tag}
          label={tag}
          variant="outlined"
          key={tag}
        ></Chip>
      ))}
    </div>
  );
}

function VideoHolder({ title, description, videoUrl, tags, links }) {
  const styles = useStyles();
  return (
    <Grid item>
      <Card className={styles.card}>
      {/* <Card> */}
        <div className={cardDiv}>
          <CardContent>
            <Typography variant="h5" paragraph>
              {title}
            </Typography>
            {/* <Typography variant="subtitle1" paragraph>
              {description}
            </Typography> */}
            {/* <Hidden mdUp>
              <TagsContainer tags={tags} />
            </Hidden> */}
          </CardContent>
          <CardActions>
            {/* <div className={styles.links}>
              {links.map((linkItem) => (
                <IconButton href={linkItem.href} key={linkItem.href}>
                  <linkItem.icon />
                </IconButton>
              ))}
            </div> */}
            {/* <Hidden smDown>
              <TagsContainer tags={tags} />
            </Hidden> */}
          </CardActions>
        </div>
        {/* <Hidden xsDown> */}

        <Video
          videoSrcURL={videoUrl}
          videoTitle={title}
        />


          {/* <CardMedia 
            className={styles.cardMedia} 
            image={videoUrl}></CardMedia>
        </Hidden> */}
      </Card>
    </Grid>
  );
}

export default function Videos() {
  return (
    <Container maxWidth="md" id="VideoHolder">
      <Box pt={8} mb={2}>
        <Typography variant="h4"> VIDEOS </Typography>
      </Box>
      <Grid container direction="column" spacing={4}>
        {videoData.map((data) => (
          <VideoHolder {...data} key={data.title} />
        ))}
      </Grid>
    </Container>
  );
}


const videoData = [


    {
        title: '"COMMUNIA / STORM DRUM"',
        videoUrl: "https://www.youtube.com/embed/NHpdCU6qUds",
        date: 2017,
    },
    {
        title: '"AMERICA" - Johnny Zithers',
        videoUrl: "https://www.youtube-nocookie.com/embed/jtGZChXCKFw?controls=0",
        date: 2020,
    },
    
    {
        title: '"ONLY LIGHT" - Johnny Zithers',
        videoUrl: "https://www.youtube.com/embed/2qxOmbaJjh4",
        date: 2019,
    },
    
    {
        title: '"PRAISE JAH IT\'S CHRISTMAS" - Alton Ellis',
        videoUrl: "https://www.youtube.com/embed/NxG5SNX0TTY",
        date: 2019,
    },
    
   
    {
        title: '"SLOW CHRISTMAS" - Johnny Zithers',
        videoUrl: "https://www.youtube.com/embed/o4Nza7o8PUA",
        date: 2014,
    },
    {
        title: '"A FOX" - Johnny Zithers',
        videoUrl: "https://www.youtube.com/embed/-k_zaubZnSo",
        date: 2018,
    },
    {
        title: '"SIDE 1 END OF REEL" - Johnny Zithers',
        videoUrl: "https://www.youtube.com/embed/uItMQPi15D4",
        date: 2020,
    },
    {
        title: '"TRASH" - Donc',
        videoUrl: "https://www.youtube.com/embed/jfVPa6bbANU",
        date: 2021,
    },
    {
        title: '"BIG WORLD" - Johnny Zithers',
        videoUrl: "https://www.youtube.com/embed/J5ufN631yPc",
        date: 2022,
    },
    {
        title: '"YOU CAN REALLY HAVE IT ALL" - Johnny Zithers',
        videoUrl: "https://www.youtube.com/embed/wUSCHn_6nA8",
        date: 2022,
    },
    {
        title: '"FOR THE MACHINES',
        videoUrl: "https://www.youtube.com/embed/4Arue2zHeWA",
        date: 2014,
    }, 
    
];