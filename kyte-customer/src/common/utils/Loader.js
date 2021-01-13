import React from 'react';
import Spinner from './Spinner';

const Loader = () => (
  <div style={styles.loaderWrapper}>
    <Spinner style={styles.spinner} width={50} height={50} />
  </div>
    );

const styles = {
    loaderWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#e6e6e6',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
};

export default Loader;
