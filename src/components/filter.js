import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      attribute: "All"
    }
  }

  handleChange = event => {
    this.props.updateFilterValues(event.target.name, event.target.value)
    this.setState({ attribute: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    let { attribute, array } = this.props
    let lowerCaseAttribute = attribute.toLowerCase()
    return (
      <form autoComplete="off">
        <FormControl id="filter-section">
          <InputLabel>{attribute}</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.attribute}
            onChange={this.handleChange}
            inputProps={{
              name: lowerCaseAttribute
            }}
          >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {array.map((attribute) => {
              return (
                  <MenuItem value={attribute}>{attribute}</MenuItem>
              )
          })}
          </Select>
        </FormControl>
      </form>
    );
  }
}

export default Filter;
