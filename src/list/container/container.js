import React, { Component } from 'react';
import './container.scss';
import axios from 'axios';
import Card from '../card';
import Search from '../search';
import AddCard from '../add-card';

class Container extends Component {

  constructor(props) {
    super(props);

    this.state = {
      oldData: [],
      lists: []
    }
  }

  componentDidMount() {
    axios.get('./list.json').then(data => {
      this.setState({lists: data && data.data, oldData: data && data.data});
    }).catch(error => console.log(error)); // 模拟数据，暂不处理error
  }

  addCard = () => {
    // 新建项目
  }

  filterData = filed => {
    const { oldData } = this.state;

    let res = [...oldData];

    if (filed === 'lock') {
      res = res.filter(e => {
        return e.is_lock;
      })
    }

    if (filed === 'private') {
      res = res.filter(e => {
        return e.is_private;
      })
    }

    this.setState({lists: res});
  }

  render () {
    const { lists } = this.state;

    return (
      <div>
        <Search filterData={this.filterData}></Search>

        <div className="list-warp">
          {
            lists.map( (card, index) => {
              return (
                <div key={index} className={`card-warp ${card.is_lock ? 'lock-card' : ''}`}>
                  <Card data={card}></Card>
                </div>
              );
            })
          }
          <div className="card-warp">
            <AddCard addCard={this.addCard}></AddCard>
          </div>
        </div>

      </div>

    )
  }

}

export default Container;