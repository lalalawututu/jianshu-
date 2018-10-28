import React, { Component } from 'react';
import {
  WriterWrapper,
  Container,
  Wave
} from '../style';
import { connect } from 'react-redux';
import { actionCreators }from '../store';
import './am.css';

class Writer extends Component {
  render() {
    const { cssAmination, clickWave } = this.props;
    return (
      <WriterWrapper>
        <div
          ref={(display) => {this.containerDisplay = display}}
          className = {cssAmination ? "containeActive" : "container" }
          onClick={() => clickWave(this.containerDisplay)}
        >
          <Wave>
            90%
          </Wave>
        </div>
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  cssAmination: state.getIn(['home', 'css3Amination'])
});

const mapDispatchToProps = (dispatch) => {
  return {
    clickWave(containerDisplay) {
      dispatch(actionCreators.clickCssAmination());
      setTimeout(() => {
        containerDisplay.style.display = 'none';
      },3000);
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Writer);