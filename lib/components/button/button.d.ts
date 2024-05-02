import React, { ElementType, MouseEventHandler, ReactNode } from 'react';
import { ComponentSize } from '../../config/sizes';
export type ButtonType = 'default' | 'danger' | 'ghost' | 'secondary';
interface BaseButtonProps {
    type?: ButtonType;
    icon?: ElementType;
    size?: ComponentSize;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
}
type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;
/**
 * If href is supplied, button becomes an anchor link
 */
type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;
/**
 * If `as` is supplied, button becomes a custom html node specified in `as`
 */
type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;
export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;
declare const _default: React.ForwardRefExoticComponent<{
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & BaseButtonProps & {
    href?: string | undefined;
} & {
    as?: React.ElementType | undefined;
    to?: string | undefined;
} & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=button.d.ts.map