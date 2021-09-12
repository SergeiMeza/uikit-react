import React from 'react';
export declare type AnchorProps = {
    className?: string;
    to?: string;
    href?: string;
};
export declare const Anchor: React.FC<AnchorProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>;
export default Anchor;
