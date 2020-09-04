import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Search-section.css';
import SearchBlock from './blocks/search-block';
import { tabValues } from '../constant/constant';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function SimpleTabs(props) {
  //const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    props.toggleIndex(newValue);
    console.log(newValue);
  };

  return (
    <div className="search-block">
      <Tabs
        value={props.tabIndex}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label={tabValues[0].label} />
        <Tab label={tabValues[1].label} />
      </Tabs>
      <TabPanel value={props.tabIndex} index={0}>
        <SearchBlock value={tabValues[props.tabIndex].path} />
      </TabPanel>
      <TabPanel value={props.tabIndex} index={1}>
        <SearchBlock value={tabValues[props.tabIndex].path} />
      </TabPanel>
    </div>
  );
}
