import React from 'react';
export declare type NotificationProps = {
    show: boolean;
    setShow: (show: boolean) => void;
    alignment?: NotificationContentAlignment;
    autoDismiss?: boolean;
    dismissDelay?: number;
    icon?: JSX.Element;
    avatar?: JSX.Element;
    title?: string | JSX.Element;
    content?: string | JSX.Element;
    button?: JSX.Element;
    onClose?: () => void;
};
export declare type NotificationIconProps = {
    size?: string;
    color?: string;
};
declare enum NotificationContentAlignment {
    top = "items-top",
    center = "items-center",
    bottom = "items-end"
}
export declare const Notification: React.FC<NotificationProps> & {
    SuccessIcon: React.FC<NotificationIconProps>;
    FailureIcon: React.FC<NotificationIconProps>;
    alignment: typeof NotificationContentAlignment;
};
export default Notification;
