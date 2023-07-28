import type React from 'react';
import type { IButtonComponentType } from './types';
export declare function createButton<ButtonProps, TextProps, GroupProps, GroupHSpacerProps, GroupVSpacerProps, SpinnerProps, IconProps>({ Root, Text, Group, GroupHSpacer, GroupVSpacer, Spinner, Icon, }: {
    Root: React.ComponentType<ButtonProps>;
    Text: React.ComponentType<TextProps>;
    Group: React.ComponentType<GroupProps>;
    GroupHSpacer: React.ComponentType<GroupHSpacerProps>;
    GroupVSpacer: React.ComponentType<GroupVSpacerProps>;
    Spinner: React.ComponentType<SpinnerProps>;
    Icon: React.ComponentType<IconProps>;
}): IButtonComponentType<ButtonProps, GroupProps, GroupHSpacerProps, GroupVSpacerProps, SpinnerProps, TextProps, IconProps>;
//# sourceMappingURL=index.d.ts.map