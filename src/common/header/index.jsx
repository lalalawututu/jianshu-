import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchInfo,
  SearchWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  NavSearch,
  Addition,
  SearchInfoList,
  Button,
  SearchInfoItem
} from './style';
import { actionCreators }from './store';

class Header extends Component {

  constructor(props) {
    super(props);
    this.getListArea = this.getListArea.bind(this);
  }

  getListArea() {
    const { focused, page, totalPage, list, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if(newList.length) {
      for(let i = page * 10; i < (page + 1) * 10; i++ ) {
        if(newList[i] !== undefined) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage)}>
              <i className="iconfont">&#xe603;</i>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={400}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe634;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className="iconfont">&#xe708;</i>
            写文章
          </Button>
          <Button className='reg'>
            注册
          </Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    // focused: state.get('header').get('focused')
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(){
      //thunk
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage) {
      if (page < (totalPage - 1)) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(0));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);