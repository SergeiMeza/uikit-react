import React from 'react';
import { UseFormRegister } from 'react-hook-form';
export declare type CheckboxGroupProps = {
    label?: string;
    hiddenLabel?: boolean;
    items?: any[];
    onItemsChange?: (data: any[]) => void;
    register?: UseFormRegister<any>;
};
export declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export default CheckboxGroup;
