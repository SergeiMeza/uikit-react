import React from 'react';
export declare type AnimatedBlobBackgroundProps = {
    type?: AnimatedBlobBackgroundType;
    colors?: string[];
    content?: JSX.Element;
};
declare enum AnimatedBlobBackgroundType {
    small = 0,
    medium = 1,
    large = 2,
    extraLarge = 3
}
declare const AnimatedBlobBackground: React.FC<AnimatedBlobBackgroundProps> & {
    type: typeof AnimatedBlobBackgroundType;
};
export default AnimatedBlobBackground;
