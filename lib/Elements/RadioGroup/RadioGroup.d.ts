import React from 'react';
export declare type RadioGroupProps = {
    type?: RadioGroupType;
    items?: any[];
    selectedItem?: any;
    onSelectedItem?: (item: any) => void;
    renderItem?: (item: any, active: boolean, selected: boolean) => JSX.Element;
};
declare enum RadioGroupType {
    card = "card",
    list = "list"
}
export declare const RadioGroup: React.FC<RadioGroupProps> & {
    type: typeof RadioGroupType;
};
export default RadioGroup;
