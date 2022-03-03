import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import { Container, Header, Image, Menu, Grid } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Grid container centered textAlign={'center'}>
          <Menu borderless className={'topMenu'}>
            <Menu.Item onClick>
              <Image src={'http://courses.ics.hawaii.edu/ics314s22/morea/ui-frameworks/wod-stewbum-logo.png'} size={'small'}/>
            </Menu.Item>
            <Menu.Item onClick>
              HOME
            </Menu.Item>
            <Menu.Item onClick>
              ORDER BEER ONLINE
            </Menu.Item>
            <Menu.Item onClick>
              THE PIZZA
            </Menu.Item>
            <Menu.Item onClick>
              THE STORY
            </Menu.Item>
            <Menu.Item onClick>
              THE GALLERY
            </Menu.Item>
            <Menu.Item onClick>
              THE BACKERS
            </Menu.Item>
            <Menu.Item onClick>
              GIFT HOUSE
            </Menu.Item>
            <Menu.Item onClick>
              CONTACT/HOURS
            </Menu.Item>
          </Menu>
        </Grid>
    );
  }
}


class MiddleText extends React.Component {
  render() {
    return (
        <Container textAlign='center' style={{paddingTop: '200px'}}>
          <Header as='h1'>OPEN FOR DINE IN</Header>
          <Header as='h1'>(NOW BREWING)</Header>
        </Container>
    );
  }
}

class Stewbum extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleText/>
        </div>
    );
  }
}

ReactDOM.render(<Stewbum/>, document.getElementById('root'));
