import React from 'react';
import Loadable from 'react-loadable';
import { Icon } from 'antd';
 
const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading() {
    return <Icon type="loading" theme="outlined" />
  },
});

export default () => <LoadableComponent/>;