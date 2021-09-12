import React from 'react';
export declare type CheckboxGroupProps = {
    label?: string;
    hiddenLabel?: boolean;
    items?: any[];
    onItemsChange?: (data: any[]) => void;
};
export declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export default CheckboxGroup;
