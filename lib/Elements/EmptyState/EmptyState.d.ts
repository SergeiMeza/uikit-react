import React, { DragEventHandler } from 'react';
export declare type EmptyStateProps = {
    className?: string;
    type?: EmptyStateType;
    icon?: JSX.Element;
    title?: string | JSX.Element;
    description?: string;
    button?: JSX.Element | null;
    onDragOver?: DragEventHandler<HTMLButtonElement>;
    onDrop?: DragEventHandler<HTMLButtonElement>;
    onClick?: () => void;
};
declare enum EmptyStateType {
    simple = "simple",
    dashedBorder = "dashedBorder"
}
export declare const EmptyState: React.FC<EmptyStateProps>;
export default EmptyState;
