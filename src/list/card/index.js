
import React, { Component } from 'react';
import './index.scss';
import lock from '../../img/lock.png'
import eye from '../../img/eye.png'

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  render() {
    const { data } = this.props;

    return (
      <div className="card">
        <div className="left">
          <div className="card-color" style={{'backgroundColor': data.color}}>
          </div>
        </div>
        <div className="right">
          <div className="name">{data.name}</div>
          <div className="status">
            {
              data.is_lock ?
              <button>
                <div className="btn-img">
                  <img src={lock} alt="项目被锁定" />
                </div>
                锁定
              </button> : null
            }
            {
              data.is_private ?
              <button>
                <div className="btn-img">
                 <img src={eye} alt="项目为私密" />
                </div>
                私密
              </button> : null
            }
          </div>
          <div className="number"><label className="big-number">{data.number}</label> 项目</div>
        </div>
      </div>
    )
  }

}

export default Card;
