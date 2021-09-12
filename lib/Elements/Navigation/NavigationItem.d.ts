import React from 'react';
export declare type NavigationItem = {
    name: string;
    href: string;
    icon?: React.FC<any>;
    count?: string;
    current: boolean;
};
