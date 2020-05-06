import React from 'react';
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";

export default function CardDescription(props) {
  if (props.text === null) {
    return (null);
  }
  return (
    <ListItemText
      secondary={
        <React.Fragment>
          <Typography
            component="span"
            variant="body2"
            color="textPrimary"
          >
            {props.text}
          </Typography>
        </React.Fragment>
      }
    />
  );
}
