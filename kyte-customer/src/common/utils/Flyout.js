import React from 'react';
import { Link } from 'react-router-dom';

const Flyout = (props) => {
  const node = React.useRef(null);
  const handleLogout = () => {
    localStorage.removeItem('usr');
    localStorage.removeItem('usrn');
    localStorage.removeItem('access_token');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('scope');
    props.setLocationInUse();
    props.onLogout();
    // window.location.reload();
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  });

  const handleClick = (event) => {
    if (!node.current.contains(event.target) && node.current.offsetHeight > 0 && event.target.id !== 'user-symbol') {
      props.handleFlyout();
    }
  };

  return (
    <div ref={node} style={{ ...styles.wrapper, ...props.cstyle }}>
      <div style={{
        marginBottom: 'auto', marginTop: 20, textAlign: 'center', fontFamily: 'Proxima-Nova'
      }}
      >Welcome, {props.uname}
      </div>
      <div style={styles.logout}><Link
        style={{
          borderTop: '1px solid rgb(230, 230, 230)', textAlign: 'center', padding: '5px', cursor: 'pointer', fontFamily: 'Proxima-Nova', textDecoration: 'none', color: 'black'
        }}
        to="/configurations/users/reset"
      >Reset Password
      </Link>
      </div>
      <div style={styles.logout} onClick={handleLogout}>Logout</div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: 200,
    height: 0,
    zIndex: 1,
    position: 'absolute',
    right: 10,
    top: 70,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    border: 'thin solid #e6e6e6',
    boxShadow: '1px 1px 1px #e6e6e6',
    overflowY: 'hidden',
    transition: 'all 0.2s',
    borderBottomRadius: 5,
    background: '#FFFFFF'
  },

  logout: {
    borderTop: '1px solid #e6e6e6',
    textAlign: 'center',
    padding: 5,
    cursor: 'pointer',
    fontFamily: 'Proxima-Nova'
  }
};

export default Flyout;
