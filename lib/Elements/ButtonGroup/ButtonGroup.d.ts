import React from 'react';
import { ButtonProps } from '../Button/Button';
export declare type ButtonGroupProps = {
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export declare const ButtonGroup: React.FC<ButtonGroupProps> & {
    LeftButton: React.FC<ButtonProps>;
    MiddleButton: React.FC<ButtonProps>;
    RightButton: React.FC<ButtonProps>;
};
export default ButtonGroup;
