import React from 'react';
export declare type TableColumnData = {
    key: string;
    label: string;
    render: (value: any, item: any) => JSX.Element | null;
    labelHidden?: boolean;
    value?: string[];
};
export declare type TableProps = {
    data?: any[];
    columns?: TableColumnData[];
};
export declare type TableColumnProps = {
    label: string;
    labelHidden?: boolean;
};
export declare const Table: React.FC<TableProps> & {
    Cell: React.FC<any>;
};
export default Table;
