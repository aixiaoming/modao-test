
import React, { Component } from 'react';
import './index.scss';
import add from '../../img/add.png'

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  render() {
    return (
      <div className="add-card" onClick={() => this.props.addCard()}>
        <div className="top">
          <div className="img-warp">
            <img src={add} alt="新建项目组" />
          </div>
        </div>

        <div className="text">
          <span>新建项目组</span>
        </div>
      </div>
    )
  }

}

export default AddCard;
