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
    width: '100%',
  },
  card: {
    display: "flex",
    maxWidth: 800,
  },
  links: {
    marginRight: "auto",
  },
  tag: {
    marginRight: 5,
    marginBottom: 5,
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

function Project({ title, description, imageUrl, tags, links }) {
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
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
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

export default function Projects() {
  return (
    <Container maxWidth="md" id="projects">
      <Box pt={8} mb={2}>
        <Typography variant="h4"> INSTRUMENTS </Typography>
      </Box>
      <Grid container direction="column" spacing={4}>
        {projectsData.map((data) => (
          <Project {...data} key={data.title} />
        ))}
      </Grid>
    </Container>
  );
}


const projectsData = [

  {
    title: "trimpin bird ",
    description:
      "This is an installation inspired by a sound sculpture by Trimpin. It’s a delay line that listens for audio input, and will repeat the audio input back to you. Fun to feel connected! ",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/a73dst9j8c0hwgb/16-trimpin-2.jpg?dl=0",
      tags: ["installation", "raspberry pi ", "c++"],
    date: 2019,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.instagram.com/p/CcNoJXTOMAM/",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },

  {
    title: "vocoder looper ",
    description:
      "This instrument lets you loop incoming audio and resynthesize it with the pitch deteremined by MIDI input. Switches toggle polyphony and loop record function.",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/t2783fl2kwxzvyw/17-looper.jpg?dl=0",
      tags: ["instrument", "raspberry pi ", "pd"],
    date: 2019,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.instagram.com/p/CJMNF7EDAsi/",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },


  
  {
    title: "digital filter / mechanical LFO ",
    description:
      "A fun digital ladder filter with fidget spinner optical LFO. Really fun and answers the question how much of music is fidget? Good for adults and cats have played with this too.",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/jdbunkf8hld0hh5/15-fidget.png?dl=0",
      tags: ["audio effect", "daisy", "c++"],
    date: 2019,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.instagram.com/p/CJMNF7EDAsi/",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },
  
  {
    title: "slowdowner called death",
    description:
      "Instrument called death is an alternate timing instrument. It limits the speed with which your music can go through life at. Does not play well with others!",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/eq2ptsg1h2r5bir/14-death.png?dl=0",
      tags: ["audio effect", "daisy", "c++"],
    date: 2019,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.instagram.com/p/CDgevH8j3_b/",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },


  {
    title: "bass island",
    description:
      "Pattern-generating bass synth. Just click that switch and you are generously rewarded with a new funky bass line, BOOING! Perfect if you’ve recently moved away from all your bass playing friends. Controls adjust pattern length, tempo, ASDR of bass synth.  ",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/tkjp7dw5udwf679/3-bass-island.png?dl=0",
      tags: ["instrument", "raspberry pi", "c++"],
    date: 2019,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.instagram.com/p/B2hWwUNlkag",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },

  {
    title: "big dumb mountain",
    description:
      "Pitch-tracked reverb. Pitch estimation is performed on incoming audio, producing a control signal which is applied to the reverb mix. Controls include reverb volume, dry volume and low and high frequency cutoffs to determine the frequency range where the effect is applied.",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/urqapsamv830slq/0-big-dumb-mountain.png?dl=0",
      tags: ["audio effect", "bela.io", "c++"],
    date: 2018,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.instagram.com/p/BjoDsvJD5SV",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },

  {
    title: "seven tones",
    description:
      "An oscillator bank with octave split into 7 subdivisions. Each tone has UPPER or LOWER octave control. Additional controls include phaser LFO, and semitone tonality adjustment.  That's it !",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/t6r5r0jzmloj5s9/octave-sine.jpeg?dl=0",
      tags: ["instrument", "raspberry pi", "c++"],
    date: 2020,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.instagram.com/p/BjoDsvJD5SV",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },


  {
    title: "force midi",
    description:
      "Capacitive touch MIDI note generator machine. Position-ish on ribbon controls MIDI note potentiometers control milliseconds between notes and range of notes to represent. Toggle switch as time divisor. ",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/dl3eqeasru83crc/midi-smash.jpeg?dl=0",
      tags: ["midi controller", "teensy", "c"],
    date: 2019,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.fixme.com",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },


  {
    title: "grainm",
    description:
      "Granular synthesizer/sampler. Sample pads trigger percussion samples, which can be triggered at different playback rates and with different loop points. Granular synthesizer drone accompanies the sampler, with controllable volume, grain playback position, grain pitch, and grain sample.",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/htostr6juh1wv54/2-grainm.png?dl=0",
      tags: ["instrument", "raspberry pi", "pd"],
    date: 2017,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.instagram.com/p/BhIg2iZj_5w",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },
  {
    title: "horse chords",
    description:
      "Chord-following synthesizer. Chord recognition is performed on incoming audio, which sets the tonality of notes being synthesized. Interaction with light dependent resistors triggers tones synthesized and passed through an envelope. Controls present for light detection threshold and mix of synth output and chord input volume.",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/guagf75nj229gqy/1-horsechords.png?dl=0",
      tags: [ "instrument", "bela.io", "c++"],
    date: 2018,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.instagram.com/p/B2PT5Ggl-FH",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },

  {
    title: "centrophone",
    description:
      "Audio feature-organized sampler. When powered on, Centrophone draws 12 random audio samples on the device. Feature analysis is computed, and the samples are mapped to the keyboard in order of ascending values of the chosen feature. Audio features supported for the ordering of samples include spectral centroid, spectral flux, and RMS energy.",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/p5pt7v8pw6vhxn5/6-centro.png?dl=0",
      tags: [ "instrument", "raspberry pi", "c++"],
    date: 2016,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.fixme.com",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },

  {
    title: "2 tones",
    description:
      "Dual oscillator AM/FM synthesizer. When powered on, Centrophone draws 12 random audio samples on the device. Feature analysis is computed, and the samples are mapped to the keyboard in order of ascending values of the chosen feature. Audio features supported for the ordering of samples include spectral centroid, spectral flux, and RMS energy.",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/mgevbevr1o3dwil/4-2tones.png?dl=0",
      tags: ["instrument", "raspberry pi", "c++"],
    date: 2015,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.instagram.com/p/BVkiO33jZSV/",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },
  {
    title: "hanging drone cc",
    description:
      "Pendulum LFO midi controller. Sensor data is processed on the device to derive the pendulums horizontal and vertical position and velocity, which are output as separate MIDI control change messages.",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/s5wq1z197161mb2/7-hanging-drone.png?dl=0",
      tags: ["midi controller", "teensy", "c"],
    date: 2017,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.fixme.com",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },
  
  {
    title: "geoseq",
    description:
      "Geometric drum sequencer. Softrware drum machine which supports circular sequence editing. Cyclical sequencing makes visible additional information pertaining to sequence timing. MIDI input and output is also supported.",
      imageUrl: "https://www.dl.dropboxusercontent.com/s/4hmtnera3ny63u2/5-geo-seq.png?dl=0",
      tags: ["instrument", "web", "webaudio"],
    date: 2014,
    links: [
      {
        icon: MusicNoteIcon,
        href: "https://www.fixme.com",
      },
      // {
      //   icon: OpenInNewIcon,
      //   href: "https://www.github.com",
      // },
    ],
  },
  

];