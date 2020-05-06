import React from 'react';
import {Helmet} from "react-helmet";
import Favicon from "react-favicon";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import LeftPannel from "./left-pannel";
import MainPannel from "./main-pannel";

export default class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount () {
    fetch(this.props.source)
      .then(res => res.json())
      .then(data => this.setState({ data: data }));
  }


  render() {
    const { data } = this.state;

    return data ?
      this.renderData(data) :
      this.renderLoading()
  }

  renderData(data) {
    console.info(data);
    return <>
      <Favicon url={data.header.ico} />

      <Helmet>
        <title>{data.user.name} - Curriculum vitae</title>
        <meta name="description" content={data.header.description} />
      </Helmet>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <LeftPannel contact={data.user}
                        skills={data.skills}
                        update={data.lastUpdate}/>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <MainPannel curriculum={data.curriculum}
                        social={data.socials}
                        email={data.user.email}
                        files={data.files}/>
          </Grid>
        </Grid>
      </Container>
    </>
  }

  renderLoading () {
    return <LinearProgress />
  }
}
