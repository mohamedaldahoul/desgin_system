/* react component with js config

import React from 'react'

export const Button = ({bg, children }) => (
  <button style={{ backgroundColor: bg }}> {children}</button>
) */

import * as React from "react";
import './Button.css';

export interface Props{
  children: React.ReactNode;
  onClick: ()=> void;
  disabled?: boolean;
}
const noop = () =>{};
export const Button = (props: Props) => {
  const {children, onClick, disabled = false } = props;
  const disabledclass = disabled ? 'Button disabled' : '';
  return (
    <div 
        className={`Button ${disabledclass}`}
        onClick={!disabled ? onClick : noop }
      >
        <span>{children}</span>
     
    </div>
    );
}