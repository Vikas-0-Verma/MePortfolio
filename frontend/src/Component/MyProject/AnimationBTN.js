import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './animation.css'
import { FiBox } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
export const AnimationBTN = ({link}) => {
  return (
    <>
        <AwesomeButton className='Box'
            type="primary"
            href={link}
            target="_blank"
        >
            <FiBox/><p className='ptext'>VISIT WEBSITE</p>
        </AwesomeButton>
            
    </>

);
}

export const Github = () => {
    return (
      <>
          <AwesomeButton className='gittt'
              type="secondary"
              target="_blank"
          >
              <BsGithub/><p className='ptext'>GITHUB</p>
          </AwesomeButton>
              
      </>
  
  );
  }



