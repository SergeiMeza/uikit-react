import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
export declare type SelectMenuProps = {
    type?: SelectMenuType;
    name?: string;
    label?: string | JSX.Element;
    options?: any[];
    selectedItem?: any;
    cornerHint?: string | JSX.Element;
    selectClassNames?: string;
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
