import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  ariticleList: [],
  recommendList: [],
  css3Amination: false,
  ariticlePage: 0,
  showScroll: false,
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    ariticleList: fromJS(action.ariticleList),
    recommendList: fromJS(action.recommendList)
  })
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.ADD_ARITICLE_LIST:
      return state.merge({
        'ariticleList': state.get('ariticleList').concat(action.list),
        'ariticlePage': action.nextPage
      })
    case constants.CSS_AMINATION :
      return state.set('css3Amination', !state.get('css3Amination'));
    case constants.TOGGLE_SCROLL_TOP :
      return state.set('showScroll', action.show);
    default:
      return state;
  }
}