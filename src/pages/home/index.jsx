import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';
import { connect } from 'react-redux';
import { actionCreators }from './store';


class Home extends PureComponent {

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }

  handleScrollTop() {
    window.scroll(0,0);
  }

  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4514/92d2dd710492c4eb87b511016294120ad1d52095.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        { showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      const action = actionCreators.getHomeInfo();
      dispatch(action);
    },
    changeScrollTopShow() {
      if(document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        dispatch(actionCreators.toggleTopShow(false));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);