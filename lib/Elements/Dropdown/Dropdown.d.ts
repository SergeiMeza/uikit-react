import React from 'react';
export declare type DropdownProps = {
    className?: string;
    title?: string;
    menuButton?: JSX.Element;
    type?: DropdownType;
};
declare enum DropdownType {
    custom = "custom",
    button = "button",
    minimal = "minimal"
}
export declare type MenuItemProps = {
    href?: string;
    title?: string;
};
export declare const Dropdown: React.FC<DropdownProps> & {
    DotsVerticalButton: JSX.Element;
    type: typeof DropdownType;
    MenuSection: React.FC<{}>;
    MenuItem: React.FC<MenuItemProps>;
};
export default Dropdown;
