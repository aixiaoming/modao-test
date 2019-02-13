
import React, { Component } from 'react';
import './index.scss';
import down from '../../img/down.png'
import up from '../../img/up.png'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '所有项目组',
      isShowDropDown: false,
      types: [
        {
          name: '所有项目组',
          type: 'all'
        },
        {
          name: '锁定',
          type: 'lock'
        },
        {
          name: '私密',
          type: 'private'
        }
      ]
    }
  }

  toggleDrop = () => {
    const { isShowDropDown } = this.state;

    this.setState({isShowDropDown: !isShowDropDown});
  }

  filter = (name, type) => {
    const { isShowDropDown } = this.state;

    this.props.filterData(type);
    this.setState({isShowDropDown: !isShowDropDown, name});
  }

  render() {
    const { isShowDropDown, types, name } = this.state;

    return (
      <div className="search">
        <div className="show" onClick={this.toggleDrop}>
          <span>{name}</span>&nbsp;
          {
            isShowDropDown ?
            <img src={up} alt="关闭搜索"/>
            :
            <img src={down} alt="展开搜索"/>
          }
        </div>
        {
          isShowDropDown ?
          <div className="drop-down">
            <ul>
              {
                types.map((e, index) => {
                  return <li key={index} onClick={() => this.filter(e.name, e.type)}>{e.name}</li>
                })
              }
            </ul>
          </div> :
          null
        }
      </div>
    )
  }

}

export default Search;
