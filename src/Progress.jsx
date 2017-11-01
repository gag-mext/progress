import '../style';
import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';

class Progress extends React.Component {

  noAppearTransition: any;
  refs: any;
  componentWillReceiveProps() {
    this.noAppearTransition = true;
  }
  componentDidMount() {
    if (this.props.appearTransition) {
      setTimeout(() => {
        this.refs.bar.style.width = `${this.props.percent}%`;
      }, 10);
    }
  }
  render() {
    const { className, prefixCls, position, unfilled, style = {} } = this.props;
    const percentStyle = {
      width: this.noAppearTransition || !this.props.appearTransition ? `${this.props.percent}%` : 0,
      height: 0,
    };

    const wrapCls = classNames({
      [className]: className,
      [`${prefixCls}-outer`]: true,
      [`${prefixCls}-fixed-outer`]: position === 'fixed',
      [`${prefixCls}-hide-outer`]: unfilled === 'hide',
    });

    return (
      <div className={wrapCls}>
        <div ref="bar" className={`${prefixCls}-bar`} style={assign({}, style, percentStyle)} />
      </div>
    );
  }
}
Progress.defaultProps = {
    prefixCls: 'am-progress',
    percent: 0,
    position: 'fixed',
    unfilled: 'show',
    appearTransition: false,
};
Progress.propTypes = {

percent:React.PropTypes.number,
position:React.PropTypes.oneOf([ 'fixed','normal']),
unfilled:React.PropTypes.oneOf([ 'show' ,'hide']),
/** web only */
prefixCls: React.PropTypes.string,
className: React.PropTypes.string,
appearTransition: React.PropTypes.bool
};
Progress.displayName = "Progress";
module.exports=Progress;
