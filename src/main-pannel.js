import React from 'react';

import Container from "@material-ui/core/Container";
import ReactDOM from 'react-dom';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import DoneAllIcon from '@material-ui/icons/DoneAll';
import SchoolIcon from '@material-ui/icons/School';
import WatchIcon from '@material-ui/icons/Watch';
import MovieIcon from '@material-ui/icons/Movie';
import FlightIcon from '@material-ui/icons/Flight';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import WorkIcon from '@material-ui/icons/Work';
import SendIcon from '@material-ui/icons/Send';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ContactMailIcon from '@material-ui/icons/ContactMail';


import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';


import CardDescription from "./card-description";

import Typography from "@material-ui/core/Typography";

export default function MainPannel(props) {
    return (
      <Container style={{marginTop: "2em"}}>
        {/*Professionel*/}
        <Paper
          elevation={6} style={{marginBottom: "2em"}}>
          <List
            key={"curi-pro"}
            component="nav"
            aria-labelledby="Expériences-Professionnelles"
            subheader={
              <ListSubheader disableSticky={true} component="div" id="Expériences-Professionnelles">
                <Grid container={true}
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}>
                  <Grid item>
                    <Avatar>
                      <DoneAllIcon/>
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="h4">Expériences Professionnelles</Typography>
                  </Grid>
                </Grid>
              </ListSubheader>
            }
          >
            {props.curriculum.professional.map((value, index) => {
              return (
                <div key={`curi-pro-${index}`}>
                  {index > 0 ?
                    <Divider component="li" />
                  : null}

                  <ListItem key={`curi-pro-${index}${index}`}>
                    <Grid container={true}
                          direction="column"
                          justify="flex-start"
                          alignItems="flex-start"
                          spacing={1}>
                      <Grid item>
                        <Typography variant="h6" component="h4" >
                          {value.jobName}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2" component="h5">
                          <Link href={value.company.url}
                                target={"_blank"}
                                color={"primary"} style={{paddingRight: 2}}>
                            @{value.company.name}
                          </Link>
                          - {value.place.city} - {value.place.country}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography color={"primary"} variant="subtitle2" component="h6">
                          {value.dates}
                        </Typography>
                      </Grid>

                      <CardDescription text={value.missions.description}/>

                      <ul>
                        {value.missions.activities.map((text, index2) => {
                          return (
                            <li key={`curi-pro-${index}-${index2}`}><Typography>{text}</Typography></li>
                          )
                        }) }
                      </ul>

                    </Grid>

                  </ListItem>
                </div>
                )
            })}
          </List>
        </Paper>

        {/*Formation*/}
        <Paper
          elevation={6} style={{marginBottom: "2em"}}>
          <List
            component="nav"
            aria-labelledby="Formations"
            subheader={
              <ListSubheader disableSticky={true} component="div" id="Formations">
                <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}>
                  <Grid item>
                    <Avatar>
                      <SchoolIcon/>
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="h4">Formations</Typography>
                  </Grid>
                </Grid>
              </ListSubheader>
            }
          >

            {props.curriculum.formation.map((value, index) => {
              return (
                <div key={`curi-formation-${index}`}>
                  {index > 0 ?
                    <Divider component="li" />
                    : null}

                  <ListItem key={`curi-formation-${index}${index}`}>
                    <Grid container
                          direction="column"
                          justify="flex-start"
                          alignItems="flex-start"
                          spacing={1}>
                      <Grid item>
                        <Typography variant="h6" component="h4" >
                          {value.jobName}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2" component="h5">
                          <Link href={value.company.url}
                                target={"_blank"}
                                color={"primary"} style={{paddingRight: 2}}>
                            @{value.company.name}
                          </Link>
                          - {value.place.city} - {value.place.country}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography color={"primary"} variant="subtitle2" component="h6">
                          {value.dates}
                        </Typography>
                      </Grid>

                    </Grid>

                  </ListItem>
                </div>
              )
            })}

          </List>
        </Paper>

        {/*Loisirs*/}
        <Paper
          elevation={6} style={{marginBottom: "2em"}}>
          <List
            component="nav"
            aria-labelledby="Loisirs"
            subheader={
              <ListSubheader disableSticky={true} component="div" id="Loisirs">
                <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}>
                  <Grid item>
                    <Avatar>
                      <WatchIcon/>
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="h4">Loisirs</Typography>
                  </Grid>
                </Grid>
              </ListSubheader>
            }
          >

            <ListItem>
              <Grid container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={2}>
                <Grid item>
                  <MovieIcon color="primary" fontSize="large"/>
                </Grid>
                <Grid item>
                  <FlightIcon color="primary" fontSize="large"/>
                </Grid>
                <Grid item>
                  <DirectionsRunIcon color="primary" fontSize="large"/>
                </Grid>
                <Grid item>
                  <RestaurantMenuIcon color="primary" fontSize="large"/>
                </Grid>
              </Grid>

            </ListItem>

          </List>
        </Paper>

        {/*Socials*/}
        <Paper
          elevation={6} style={{marginBottom: "2em"}}>
          <List
            component="nav"
            aria-labelledby="Socials"
          >
            <ListItem>
              <Grid container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={2}>
                <Grid item>
                  <Button startIcon={<LanguageRoundedIcon/>} color="primary" href={props.social.website.url}>
                     {props.social.website.text}
                  </Button>
                </Grid>
                <Grid item>
                  <Button startIcon={<GitHubIcon/>} color="primary" href={props.social.github.url}>
                     {props.social.github.text}
                  </Button>
                </Grid>
                <Grid item>
                  <Button startIcon={<LinkedInIcon/>} color="primary" href={props.social.linkedin.url}>
                     {props.social.linkedin.text}
                  </Button>
                </Grid>

              </Grid>

            </ListItem>

          </List>
        </Paper>

        {/*Contact*/}
        <Paper
          elevation={6} style={{marginBottom: "2em"}}>
          <List
            component="nav"
            aria-labelledby="Contact"
            subheader={
              <ListSubheader disableSticky={true} component="div" id="Contact">
                <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}>
                  <Grid item>
                    <Avatar>
                      <WorkIcon/>
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="h4">Vous souhaitez travailler avec moi?</Typography>
                  </Grid>
                </Grid>
              </ListSubheader>
            }
          >
            <ListItem>
                <Grid container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                      spacing={2}
                      style={{marginBottom: "1em"}}>
                  <Grid item>
                    <Button startIcon={<SendIcon/>} variant="outlined" color="primary" href={`mailto:${props.email}+"?Subject=[contact]`}>
                      Me contacter
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button startIcon={<PictureAsPdfIcon/>} variant="contained" color="primary" target={"_blank"} href={props.files.curriculumPdf}>
                      Télécharger mon CV
                    </Button>
                  </Grid>
                </Grid>

            </ListItem>

          </List>
        </Paper>
      </Container>
    );
}
