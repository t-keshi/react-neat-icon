import { css, cx } from '@emotion/css';
import * as React from 'react';
import { styled, useTheme } from '../../../theme';
import { createTransition } from '../../../util/createTransition';

type StyleProps = {
  fontSize?: 'inherit' | 'sm' | 'md' | 'lg';
  color?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success';
};

type BaseProps = {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  className?: string;
} & JSX.IntrinsicElements['svg'];

type Props = StyleProps & BaseProps;

const styledIcon = ({
  fontSize,
  color,
}: {
  fontSize: string | number;
  color: string | undefined;
}) =>
  css({
    userSelect: 'none',

    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    transition: createTransition(['fill']),
    fontSize,
    color,
  });

export const SvgIcon = React.forwardRef<SVGSVGElement, Props>((props, ref) => {
  const { Icon, className, color = 'inherit', fontSize = 'inherit', ...rest } = props;
  const theme = useTheme();

  const themeColor = {
    inherit: 'inherit',
    action: theme.palette.action.active,
    disabled: theme.palette.action.disabled,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.error.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
  }[color];

  const themeFontSize = {
    inherit: 'inherit',
    sm: 20,
    md: 24,
    lg: 35,
  }[fontSize];

  return (
    <Icon
      className={cx(styledIcon({ fontSize: themeFontSize, color: themeColor }), className)}
      focusable={false}
      color={themeColor}
      fontSize={fontSize}
      viewBox="0 0 24 24"
      {...rest}
      ref={ref}
    />
  );
});
