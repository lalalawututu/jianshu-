## react  简书提示
#Fragment 占位符可以让外层的标签隐藏掉
#dangerouslySetInnerHTML该属性让标签内容进行转译
#在react中用ref操作DOM节点,不过不建议使用
#生命周期函数 “shouldComponentUpdate”需要返回一个布尔值，render前
#生命周期函数 “componentWillUpdate”是在“shouldComponentUpdate”之后执行，render前，如果“shouldComponentUpdate”返回true执行，#false不执行
#“componentDidUpdate”在render之后执行
#“componentWillReceiveProps”一个组件要从父组件接收参数，只要父组件的render函数被执行了，子组件的这个生命周期函数就会被执行
#“componentWillReceiveProps”如果这个组件第一次在父组件中出现，不会执行，如果这个组件已经在父组件中出现，才会执行
#Charles是模拟数据的mock
#react-transition-group插件1、classname里有控制状态动画的6个点2、in代表进入动画的属性里边可以添加状态3、unmountOnExit是动画消失的时候卸载dom 4、onEntered该属性是动画进入完成后操作dom的样式 5、appear该属性是页面首次进入也有动画效果
#redux = reducer + flux
#actionTypes的作用是方便进行调试
#actionCreators提高了代码的可维护性，做自动化测试方便
#redux 1、store必须是唯一的 2、只有store能改变自己的内容而不是reducer改变state的内容 3、reducer必须是纯函数（给定固定的输入，就有固定的输出，不会有任何副作用，不对传进的参数进行修改）
#UI组件负责渲染，容器组件负责逻辑
#如果没有状态使用无状态组件（函数)而不是使用类优化性能
#遇到异步请求或者逻辑复杂的可以放到action处理，使用redux-thunk中间件,中间件是在action和store之间，可以使action派发事件从对象变为对象和函数等待函数完成在派发出去
#对于中间件，redux-thunk是放在action里操作异步，redux-saga的操作方式是单独把异步的操作拆出来放到另外一个文件进行管理
#saga处理特别大的项目，一般用thunk没有什么api便于使用
#styled-components 样式管理工具
#用immutable来管理store数据
#用redux-immutable来管理统一数据格式
#PureComponent 用来代替shouldComponentUpdate ，用来避免组件不必要的渲染提升性能,不过这个需要与immutable共同使用，没有的话用shouldComponentUpdate代替。
#动态路由 1、如传id值，在如<Link to={'/detail/' + item.get('id')} key={index}>里进行id传值,为了与分路由进行匹配，在detail总路由里加入<Route path="/detail/:id" exact component={Detail}></Route> id的参数进行匹配，在新的路由页面里通过“this.props.match.params.id”进行获取id值 2、按上述或者改为<Link to={'/detail/?id='} key={index}>,总路由改为<Route path="/detail" exact component={Detail}></Route> 不过this.props里的结果会发生变化，需要自己手动匹配id值