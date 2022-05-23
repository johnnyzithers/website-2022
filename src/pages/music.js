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

function Music({ title, description, imageUrl, tags, links }) {
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
            <Hidden mdUp>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardContent>
          <CardActions>
            <div className={styles.links}>
              {links.map((linkItem) => (
                <IconButton href={linkItem.href} key={linkItem.href}>
                  <linkItem.icon />
                </IconButton>
              ))}
            </div>
            <Hidden smDown>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardActions>
        </div>
        <Hidden xsDown>
          <CardMedia 
            className={styles.cardMedia} 
            image={imageUrl}></CardMedia>
        </Hidden>
      </Card>
    </Grid>
  );
}

export default function Musics() {
  return (
    <Container maxWidth="md" id="music">
      <Box pt={8} mb={2}>
        <Typography variant="h4"> MUSIC </Typography>
      </Box>
      <Grid container direction="column" spacing={4}>
        {musicData.map((data) => (
          <Music {...data} key={data.title} />
        ))}
      </Grid>
    </Container>
  );
}


const musicData = [


    {
        title: 'Johnny Zithers - "XXVII"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/9we4debykau79yi/music-jz1.png?dl=0://johnnyzithers.bandcamp.com/album/xxvii",
        tags: ["vocals", "guitar", "keyboards", "recording", "production"],
        date: 2015,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://www.instagram.com/p/CcNoJXTOMAM/",
            },
        ],
    },
    {
        title: 'Johnny Zithers - "Hi World"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/6o7k9rizsffdoxn/music-jz-hihi.png?dl=0",
        tags: ["vocals", "keyboards",],
        date: 2019,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://johnnyzithers.bandcamp.com/album/hi-world",
            },
        ],
    },
    {
        title: 'Johnny Zithers - "Sad Songs I\'ve Sung By Myself (with Elijah on drums)"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/oy8fno9f1816z0q/music-jz-sad.png?dl=0",
        tags: ["vocals", "guitars", "keyboards", "recording", "production"],
        date: 2021,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://johnnyzithers.bandcamp.com/album/sad-songs-ive-sung-by-myself-with-elijah-on-drums",
            },
        ],
    },
    {
        title: 'Johnny Zithers - "Johnny Zithers is Dead"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/jn76d4jtrf54fds/music-jz-dead.png?dl=0",
        tags: ["vocals", "keyboards"],
        date: 2020,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://johnnyzithers.bandcamp.com/album/johnny-zithers-is-dead",
            },
        ],
    },
    {
        title: 'Johnny Zithers - "Time Goes Fast"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/4pa5ndi9yzblrsu/music-jz-time.png?dl=0",
        tags: ["vocals", "guitars", "keyboards", "recording", "production"],
        date: 2020,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://johnnyzithers.bandcamp.com/album/time-goes-fast",
            },
        ],
    },






    {
        title: 'Iceberg Ferg - "Waiting On"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/s54ipo23omo39i0/music-ice-waiting.png?dl=0",
        tags: ["recording", "production", "tiny bit of guitar"],
        date: 2015,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://www.fixme.com",
            },
        ],
    },
    {
        title: 'Iceberg Ferg - "Let It Grow"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/snripsmjgdm8c7h/music-ice-let-it-grow.png?dl=0",
        tags: ["recording", "production"],
        date: 2019,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://crowncrowncrown.bandcamp.com/album/let-it-grow",
            },
        ],
    },
    {
        title: 'Iceberg Ferg - "In The Valley of the Purple Prince"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/095xrxw2nzuln6q/music-ice-purple.png?dl=0",
        tags: ["recording", "production"],
        date: 2016,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://crowncrowncrown.bandcamp.com/album/in-the-valley-of-the-purple-prince",
            },
        ],
    },


    {
        title: 'Fascination - "Fascination"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/z906g7xx3sgo8vh/music-fasc.png?dl=0",
        tags: ["vocals", "guitar"],
        date: 2015,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://fascinati0n.bandcamp.com/releases",
            },
        ],
    },
    
    {
        title: 'Oops - "High is a Life Way"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/phz06k008ip3cer/music-oops.png?dl=0",
        tags: ["vocals", "guitar"],
        date: 2015,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://highisalifeway.bandcamp.com/releases",
            },
        ],
    },
    {
        title: 'Freak Heat Waves"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/u5qmm2gg1ml7rb0/music-freaks.png?dl=0",
        tags: ["mixing"],
        date: 2012,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://freakheatwaves.bandcamp.com/album/freak-heat-waves",
            },
        ],
    },
    
    {
        title: 'Southwoods - "Southwoods 1"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/sfrfkcuc7kcjhlr/music-sw1.png?dl=0",
        tags: ["guitar", "homemade instruments", "recording", "production"],
        date: 2016,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://southwoods.bandcamp.com/album/southwoods",
            },
        ],
    },
    {
        title: 'Southwoods - "Southwoods 2"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/qimk2z6wr72xih8/music-sw2.png?dl=0",
        tags: ["guitar", "homemade instruments", "recording", "production"],
        date: 2018,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://southwoods.bandcamp.com/album/southwoods-2",
            },
        ],
    },
    {
        title: 'Southwoods - "Southwoods 3"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/nussn3yydcbd2z8/music-sw3.png?dl=0",
        tags: ["guitar", "homemade instruments", "recording", "production"],
        date: 2020,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://southwoods.bandcamp.com/album/southwoods-3",
            },
        ],
    },
    

    {
        title: 'Cobras Cobras Cobras - "COBRAS"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/3n8rr05ky6tsj4e/music-cobras.png?dl=0",
        tags: ["vocals", "guitar"],
        date: 2011,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://cobras.bandcamp.com",
            },
        ],
    },    

    {
        title: 'Slam Dunk - "The Shivers"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/xd5tja9dwmkcp7z/music-sd-shivers.png?dl=0",
        tags: ["vocals", "guitar"],
        date: 2011,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://slamdunk.bandcamp.com/album/the-shivers",
            },
        ],
    },

    {
        title: 'Slam Dunk - "Welcome To Miami"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/p412wg4crcozs0c/music-sd-welcome.png?dl=0",
        tags: ["vocals", "guitar"],
        date: 2013,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://slamdunk.bandcamp.com/album/welcome-to-miami",
            },
        ],
    },
    {
        title: 'Slam Dunk - "In Hell"',
        imageUrl: "https://www.dl.dropboxusercontent.com/s/68vwlmuxb72zh6o/music-sd-inhell.png?dl=0",
        tags: ["vocals", "guitar"],
        date: 2019,
        links: [
            {
              icon: MusicNoteIcon,
              href: "https://slamdunk.bandcamp.com/album/in-hell-2",
            },
        ],
    },
];