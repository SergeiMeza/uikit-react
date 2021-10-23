import React from 'react';
import { AnchorProps } from '../Anchor/Anchor';
export declare type PaginationProps = {
    currentPage?: number;
    pages?: AnchorProps[];
    previousText?: string;
    nextText?: string;
    previousProps?: AnchorProps;
    nextProps?: AnchorProps;
};
export declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
