import * as React from 'react';
import { SVGProps } from 'react';

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={346}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#logo_svg__a)" d="M0 0h346v48H0z" />
    <defs>
      <pattern id="logo_svg__a" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#logo_svg__b" transform="matrix(.00289 0 0 .02083 -.026 -.375)" />
      </pattern>
      <image
        id="logo_svg__b"
        width={374}
        height={84}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default SvgLogo;
