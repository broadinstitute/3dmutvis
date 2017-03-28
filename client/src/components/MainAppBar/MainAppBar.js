import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton';
import {white, blue500, red500, cyan300} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

import logo from '../../svg/logo_white.svg'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const styles = {
  title: {
    cursor: 'pointer',
    fontSize: 30,
    color:'white',
    paddingLeft: 5
  },
  title2: {
    cursor: 'pointer',
    fontSize: 30,
    color:'black',
  },
  logo:{
      marginLeft: "10px",
      marginTop: "4px",
      marginBottom: "2px",
      height:'35px'
  },
  link: {
    fontColor: 'white',
    color: 'white'
  }
};

const iconStyles = {
  marginRight: 10,
};

const MainAppBar = () => (
    <Toolbar>
    <ToolbarGroup firstChild={true}>
      <img style={styles.logo} src={logo} />
      <ToolbarTitle style={styles.title} text="clumps|view"/>
    </ToolbarGroup>
    <ToolbarGroup >
    
      <Link style={styles.link} to="/search">
         <FontIcon hoverColor={cyan300} color={white} className="material-icons" style={iconStyles}>search</FontIcon>
      </Link>
    </ToolbarGroup>
  </Toolbar>
);

export default MainAppBar;