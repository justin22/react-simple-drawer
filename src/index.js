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
  //when clicked outside of the drawe, close the drawe
  handleOutsideClick = (e) => {
    if (this.node && this.node.contains(e.target)) {
      return;
    }
    this.toggleDrawer();
  }
  render() {

    const { placement, maskable } = this.props;

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
            {this.props.children}
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
  placement: 'right'
};

Drawer.propTypes = {
  closeOnMaskClick: PropTypes.bool,
  cta: PropTypes.node.isRequired,
  maskable: PropTypes.bool,
  open: PropTypes.bool,
  placement: PropTypes.string
}

export default Drawer;