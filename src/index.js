import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open ?? false
    }
  }

  handleEscapeKeyPress = (event) => {
    if(event.keyCode === 27) //escape key code
      this.toggleDrawer()
  }

  toggleDrawer = () => {
    if (!this.state.open && this.props.closeOnMaskClick) {
      // Add event listener to listen for clicks to determine if click occured outside the component or not
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      // Remove
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState({
      open: !this.state.open
    })
  }

  handleOutsideClick = (e) => {
    if (this.node && this.node.contains(e.target)) {
      return;
    }
    this.toggleDrawer();
  }

  componentDidMount() {
    if(this.props.closeOnEscapePress)
      document.addEventListener("keydown", this.handleEscapeKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscapeKeyPress);
  }

  renderCloseIcon() {
    const { closable, closeIcon } = this.props;
    return (
      closable ?
        <button
          className="close-button"
          onClick={this.toggleDrawer}
        >
          {
            closeIcon ?
              closeIcon
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" /></svg>
          }
        </button>
        : ''
    )
  }

  render() {

    const { placement, maskable, children } = this.props;

    return (
      <React.Fragment>
        <section onClick={this.toggleDrawer}>
          {this.props.cta}
        </section>
        <div
          className={`drawer ${placement} ${this.state.open ? 'open' : ''}`}
        >
          {maskable && <div className="drawer-mask" />}

          <div className="drawer-content"
            ref={node => {
              this.node = node;
            }}
          >
            {this.renderCloseIcon()}
            {children}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Drawer.defaultProps = {
  closeOnMaskClick: true,
  maskable: true,
  open: false,
  placement: 'right',
  closable: false,
  closeOnEscapePress: true
};

Drawer.propTypes = {
  closeOnMaskClick: PropTypes.bool,
  cta: PropTypes.node.isRequired,
  maskable: PropTypes.bool,
  open: PropTypes.bool,
  placement: PropTypes.string,
  closable: PropTypes.bool,
  closeIcon: PropTypes.node,
  closeOnEscapePress: PropTypes.bool
}

export default Drawer;