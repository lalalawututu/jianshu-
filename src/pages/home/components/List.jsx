import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  ListItem, ListInfo, LoadMore
} from '../style';
import { actionCreators }from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link to={'/detail/' + item.get('id')} key={index}>
              {/* <Link to={'/detail?id=' + item.get('id')} key={index}> */}
                <ListItem>
                  <img className="pic" src={item.get('imgUrl')} alt=""/>
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('describe')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>More</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'ariticleList']),
  page: state.getIn(['home', 'ariticlePage'])
});

const mapDispatchToProps = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect (mapStateToProps, mapDispatchToProps)(List);