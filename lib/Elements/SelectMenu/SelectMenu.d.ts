import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
export declare type SelectMenuProps = {
    type?: SelectMenuType;
    name?: string;
    label?: string;
    options?: any[];
    selectedItem?: any;
    onItemSelected?: (item: any) => void;
    register?: UseFormRegisterReturn;
};
declare enum SelectMenuType {
    native = "native",
    custom = "custom"
}
export declare const SelectMenu: React.FC<SelectMenuProps & React.SelectHTMLAttributes<HTMLSelectElement>> & {
    type: typeof SelectMenuType;
};
export default SelectMenu;
