import React from 'react';
export declare type ModalProps = {
    show: boolean;
    setShow: (show: boolean) => void;
};
export declare type ModalIconProps = {
    bgColor?: string;
    iconColor?: string;
    shape?: string;
    bgSize?: string;
    iconSize?: string;
};
declare type ModalCardProps = {
    icon?: JSX.Element;
    title?: string | JSX.Element;
    body?: string | JSX.Element;
    setShow: (show: boolean) => void;
    cta?: JSX.Element;
};
export declare const Modal: React.FC<ModalProps> & {
    Card: React.FC<ModalCardProps>;
    SuccessIcon: React.FC<ModalIconProps>;
    FailureIcon: React.FC<ModalIconProps>;
    QuestionMarkIcon: React.FC<ModalIconProps>;
    BellIcon: React.FC<ModalIconProps>;
    InformationIcon: React.FC<ModalIconProps>;
    BanIcon: React.FC<ModalIconProps>;
    DocumentIcon: React.FC<ModalIconProps>;
    AlertIcon: React.FC<ModalIconProps>;
    SecurityIcon: React.FC<ModalIconProps>;
    GiftIcon: React.FC<ModalIconProps>;
    HeartIcon: React.FC<ModalIconProps>;
    MailIcon: React.FC<ModalIconProps>;
    LockClosedIcon: React.FC<ModalIconProps>;
    LockOpenIcon: React.FC<ModalIconProps>;
    SparklesIcon: React.FC<ModalIconProps>;
    TrendingUpIcon: React.FC<ModalIconProps>;
    TrendingDownIcon: React.FC<ModalIconProps>;
};
export default Modal;
