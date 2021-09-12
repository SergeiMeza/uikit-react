import React from 'react';
export declare type AvatarProps = {
    shape?: AvatarShape;
    size?: AvatarSize;
    notificationBadge?: boolean;
    notificationBadgeSize?: NotificationBadgeSize;
    notificationBadgeColor?: NotificationBadgeColor;
    notificationBadgePosition?: NotificationBadgePosition;
    src?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
declare enum AvatarShape {
    default = "rounded-md",
    rounded = "rounded-full"
}
declare enum AvatarSize {
    small = "h-6 w-6",
    medium = "h-8 w-8",
    large = "h-10 w-10",
    xl = "h-12 w-12",
    xxl = "h-14 w-14",
    xxxl = "h-16 w-16"
}
declare enum NotificationBadgeSize {
    small = "h-1.5 w-1.5",
    medium = "h-2 w-2",
    large = "h-2.5 w-2.5",
    xl = "h-3 w-3",
    xxl = "h-3.5 w-3.5",
    xxxl = "h-4 w-4"
}
declare enum NotificationBadgeColor {
    gray = "bg-gray-300",
    red = "bg-red-300",
    yellow = "bg-yellow-300",
    green = "bg-green-300",
    blue = "bg-blue-300",
    indigo = "bg-indigo-300",
    purple = "bg-purple-300",
    pink = "bg-pink-300",
    primary = "bg-primary-300"
}
declare enum NotificationBadgePosition {
    top = "top-0 right-0",
    bottom = "bottom-0 right-0"
}
export declare const Avatar: React.FC<AvatarProps> & {
    size: typeof AvatarSize;
    shape: typeof AvatarShape;
    badgeSize: typeof NotificationBadgeSize;
    badgeColor: typeof NotificationBadgeColor;
    badgePosition: typeof NotificationBadgePosition;
};
export default Avatar;
