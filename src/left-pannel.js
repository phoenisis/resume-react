import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from "moment";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import GridList from "@material-ui/core/GridList";
import Typography from "@material-ui/core/Typography";

import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


import Slider from '@material-ui/core/Slider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  block: {
    display: 'block',
  },
}));

export default function LeftPannel(props) {
  const classes = useStyles();

  moment.locale('fr', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
      LT : 'HH:mm',
      LTS : 'HH:mm:ss',
      L : 'DD/MM/YYYY',
      LL : 'D MMMM YYYY',
      LLL : 'D MMMM YYYY HH:mm',
      LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
      sameDay : '[Aujourd’hui à] LT',
      nextDay : '[Demain à] LT',
      nextWeek : 'dddd [à] LT',
      lastDay : '[Hier à] LT',
      lastWeek : 'dddd [dernier à] LT',
      sameElse : 'L'
    },
    relativeTime : {
      future : 'dans %s',
      past : 'il y a %s',
      s : 'quelques secondes',
      m : 'une minute',
      mm : '%d minutes',
      h : 'une heure',
      hh : '%d heures',
      d : 'un jour',
      dd : '%d jours',
      M : 'un mois',
      MM : '%d mois',
      y : 'un an',
      yy : '%d ans'
    },
    dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
    ordinal : function (number) {
      return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse : /PD|MD/,
    isPM : function (input) {
      return input.charAt(0) === 'M';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem : function (hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
    },
    week : {
      dow : 1, // Monday is the first day of the week.
      doy : 4  // Used to determine first week of the year.
    }
  });

  const birstdate = moment(props.contact.birthDate, "YYYY.MM.DD");
  const age = moment().subtract(birstdate.year(), 'years').subtract(birstdate.month(), 'months').subtract(birstdate.day(), 'days')

  return (
    <Paper container elevation={6} style={{marginTop: "1em"}}>
        <List disablePadding={true}>
          <ListItem key="profile" style={{padding: 0}}>
            <GridList style={{width: "100%", margin: 0}}>
              <GridListTile style={{width: "100%", height: "auto", padding: 0}}>
                <img src={props.contact.image} alt={props.contact.name} style={{width: "100%", height: "auto"}} />
                <GridListTileBar
                  title={props.contact.name}
                  subtitle={<Typography variant="caption">{age.format("YY")} ans</Typography>}
                />
              </GridListTile>
            </GridList>
          </ListItem>
          <ListItem key={"profile-description"} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <PersonIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.block}
                    color="textPrimary"
                  >
                    {props.contact.description}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem key={"profile-email"} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <MailIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.block}
                    color="textPrimary"
                  >
                    {props.contact.email}
                  </Typography>
                  {" Personnel "}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem key={"profile-phone"} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <PhoneIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.block}
                    color="textPrimary"
                  >
                    {props.contact.phone}
                  </Typography>
                  {" Personnel "}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem key={"profile-address"} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <RoomIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={props.contact.address.city}
              secondary={
                <React.Fragment>
                  <Typography variant="caption" display="block">
                    {props.contact.address.zipcode}, {props.contact.address.country}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
          <ListItem key={"profile-skills-pro"} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <AssignmentIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Compétences professionnel"
              secondary={
                <React.Fragment>
                  <List>
                    {props.skills.professional.map((value, index) => {
                      return (
                        <ListItem key={`profile-skills-pro-${index}`}>
                          <Grid container direction="column"
                                justify="flex-start"
                                alignItems="flex-start"
                                spacing={1}>
                            <Grid item>
                              <Typography >
                                {value.name}
                              </Typography>
                            </Grid>
                            <Grid item style={{width: "100%"}}>
                              <Slider
                                color={"primary"}
                                defaultValue={value.purcentage}
                                aria-labelledby="Swift"
                                valueLabelDisplay="auto"
                                step={10}
                                min={10}
                                max={100}
                                disabled={true}
                              />
                            </Grid>
                          </Grid>
                        </ListItem>
                      )
                    })}
                  </List>
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
          <ListItem key={"profile-skills-language"} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <GTranslateIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Langues"
              secondary={
                <React.Fragment>
                  <List>
                    {props.skills.languages.map((value, index) => {
                      return (
                        <ListItem key={`profile-skills-language-${index}`}>
                          <Grid container direction="column"
                                justify="flex-start"
                                alignItems="flex-start"
                                spacing={1}>
                            <Grid item>
                              <Typography >
                                {value.name}
                              </Typography>
                            </Grid>
                            <Grid item style={{width: "100%"}}>
                              <Slider
                                color={"primary"}
                                defaultValue={value.purcentage}
                                aria-labelledby="Swift"
                                valueLabelDisplay="auto"
                                step={10}
                                min={10}
                                max={100}
                                disabled={true}
                              />
                            </Grid>
                          </Grid>
                        </ListItem>
                      )
                    })}
                  </List>
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
          <ListItem key={"profile-skills-aptitude"} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <AccountBoxIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Aptitudes"
              secondary={
                <React.Fragment>
                  <List>
                    {props.skills.human.map((value, index) => {
                      return (
                        <ListItem key={`profile-skills-aptitude-${index}`}>
                          <Grid container direction="column"
                                justify="flex-start"
                                alignItems="flex-start"
                                spacing={1}>
                            <Grid item>
                              <Typography >
                                {value.name}
                              </Typography>
                            </Grid>
                            <Grid item style={{width: "100%"}}>
                              <Slider
                                color={"primary"}
                                defaultValue={value.purcentage}
                                aria-labelledby="Swift"
                                valueLabelDisplay="auto"
                                step={10}
                                min={10}
                                max={100}
                                disabled={true}
                              />
                            </Grid>
                          </Grid>
                        </ListItem>
                      )
                    })}
                  </List>
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
          <ListItem key={"profile-update"}>
            <ListItemText>
              <Typography variant="caption" display="block" gutterBottom style={{textAlign: 'center'}}>
                Informations mise à jour le  { moment(props.update, "DD/MM/YYYY").format('LL') }
              </Typography>
            </ListItemText>
          </ListItem>

        </List>
      </Paper>
    );
}

