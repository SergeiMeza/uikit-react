import React from 'react';
export declare type NavigationItem = {
    name: string;
    href?: string;
    to?: string;
    icon?: React.FC<any>;
    count?: string | number;
    children?: {
        name: string;
        href?: string;
        to?: string;
    }[];
    current: boolean;
};
