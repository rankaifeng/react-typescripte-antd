import React, { MouseEvent, SFC } from 'react';

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void;
  styles?: {};
};
const Button: SFC<Props> = ({ onClick: handleClick, children, styles }) => (
  <button style={styles} onClick={handleClick}>
    {children}
  </button>
);
export default Button;
