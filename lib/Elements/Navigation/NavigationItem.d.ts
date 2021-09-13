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
export declare type StepsNavigationItem = {
    id?: string;
    name: string;
    description?: string;
    href?: string;
    to?: string;
    status: StepNavigationStatus;
};
export declare enum StepNavigationStatus {
    complete = "COMPLETE",
    current = "CURRENT",
    upcoming = "UPCOMING"
}
