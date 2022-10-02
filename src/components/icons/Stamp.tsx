import * as React from 'react';
import { SVGProps } from 'react';

const SvgStamp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <path d="M1 16h14v-2H1v2Zm12-8h-2.08a.92.92 0 0 1-.92-.92v-.296c0-.855.278-1.669.67-2.429.285-.55.404-1.2.284-1.888C10.742 1.255 9.75.257 8.539.047A3.002 3.002 0 0 0 5 3c0 .442.098.86.272 1.237.416.901.728 1.847.728 2.84v.003a.92.92 0 0 1-.92.92H3a3 3 0 0 0-3 3v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3Z" />
  </svg>
);

export default SvgStamp;
