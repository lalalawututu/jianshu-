import React, { PureComponent } from 'react';
import { 
  DetailWrapper,
  Header,
  Content
} from './style';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators }from './store';

class Detail extends PureComponent {

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }

  render() {
    const { title, content} = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id) {
      const action = actionCreators.getDetailInfo(id);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));