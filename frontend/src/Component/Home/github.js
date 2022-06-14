import React, {Fragment} from 'react';


const Github = () => {
  const git = 'https://ghchart.rshah.org/006400/Vikas-0-Verma'
  return <Fragment>
      <img src={git} className='github' alt="git" style={{ "filter": "invert(100%)" }} />
      
  </Fragment>;
};

export default Github;
