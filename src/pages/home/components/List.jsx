import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListItem, ListInfo
} from '../style';

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className="pic" src={item.get('imgUrl')} alt=""/>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('describe')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'ariticleList'])
});

export default connect (mapStateToProps, null)(List);