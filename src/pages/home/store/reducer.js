// import * as constants from './constants';
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },
  {
    id: 2,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },
  {
    id: 3,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4514/92d2dd710492c4eb87b511016294120ad1d52095.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }],
  ariticleList: [{
    id: 1,
    title: '十年',
    describe: '十年，于你我是一段多么漫长的岁月，十年，于天地却只是短短的一个转瞬。十年，分分秒秒的悲喜爱恨，蓦然回首，不过一句:背灯和月就花阴，已是十年踪迹十...',
    imgUrl: '//upload-images.jianshu.io/upload_images/12690223-ba5384a64d47d3d5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },
  {
    id: 2,
    title: '十年',
    describe: '十年，于你我是一段多么漫长的岁月，十年，于天地却只是短短的一个转瞬。十年，分分秒秒的悲喜爱恨，蓦然回首，不过一句:背灯和月就花阴，已是十年踪迹十...',
    imgUrl: '//upload-images.jianshu.io/upload_images/12690223-ba5384a64d47d3d5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },
  {
    id: 3,
    title: '十年',
    describe: '十年，于你我是一段多么漫长的岁月，十年，于天地却只是短短的一个转瞬。十年，分分秒秒的悲喜爱恨，蓦然回首，不过一句:背灯和月就花阴，已是十年踪迹十...',
    imgUrl: '//upload-images.jianshu.io/upload_images/12690223-ba5384a64d47d3d5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },
  {
    id: 4,
    title: '十年',
    describe: '十年，于你我是一段多么漫长的岁月，十年，于天地却只是短短的一个转瞬。十年，分分秒秒的悲喜爱恨，蓦然回首，不过一句:背灯和月就花阴，已是十年踪迹十...',
    imgUrl: '//upload-images.jianshu.io/upload_images/12690223-ba5384a64d47d3d5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },
  {
    id: 5,
    title: '十年',
    describe: '十年，于你我是一段多么漫长的岁月，十年，于天地却只是短短的一个转瞬。十年，分分秒秒的悲喜爱恨，蓦然回首，不过一句:背灯和月就花阴，已是十年踪迹十...',
    imgUrl: '//upload-images.jianshu.io/upload_images/12690223-ba5384a64d47d3d5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },
  {
    id: 6,
    title: '十年',
    describe: '十年，于你我是一段多么漫长的岁月，十年，于天地却只是短短的一个转瞬。十年，分分秒秒的悲喜爱恨，蓦然回首，不过一句:背灯和月就花阴，已是十年踪迹十...',
    imgUrl: '//upload-images.jianshu.io/upload_images/12690223-ba5384a64d47d3d5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },
  {
    id: 7,
    title: '十年',
    describe: '十年，于你我是一段多么漫长的岁月，十年，于天地却只是短短的一个转瞬。十年，分分秒秒的悲喜爱恨，蓦然回首，不过一句:背灯和月就花阴，已是十年踪迹十...',
    imgUrl: '//upload-images.jianshu.io/upload_images/12690223-ba5384a64d47d3d5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },
  ],
  recommendList: [{
    id: 1,
    imgUrl: '//upload-images.jianshu.io/upload_images/13586402-8cde5e714874aa01.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
  },
  {
    id: 2,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
  },
  {
    id: 3,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png',
  },
  {
    id: 4,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
  },
  {
    id: 5,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
  },
  ],
  css3Amination: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CSS_AMINATION :
      return state.set('css3Amination', true);
    default:
      return state;
  }
}