import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    console.log(this.props);
    return (
      <li className="Projects">
        My Projects
      </li>
    );
  }
}

export default ProjectItem;
