import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const clickCssAmination = () => ({
  type: constants.CSS_AMINATION
});

const homeInfo = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  ariticleList: result.ariticleList,
  recommendList: result.recommendList,
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARITICLE_LIST,
  list: fromJS(list),
  nextPage
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(homeInfo(result));
    })
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+ page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})