import { memo } from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

const PhoneIcon = (props: SvgProps) => (
  <Svg width={23} height={23} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#868889"
        d="M4.643 15.289c2.269 2.712 5 4.847 8.116 6.357 1.187.563 2.774 1.23 4.542 1.345.11.004.215.009.324.009 1.187 0 2.14-.41 2.917-1.253a.104.104 0 0 0 .02-.024c.276-.334.59-.634.919-.953.224-.215.453-.439.672-.668 1.015-1.058 1.015-2.402-.01-3.426L19.28 13.81c-.486-.505-1.067-.772-1.677-.772-.61 0-1.197.267-1.697.768l-1.706 1.706c-.158-.09-.32-.172-.472-.248a5.88 5.88 0 0 1-.524-.286c-1.554-.986-2.965-2.273-4.313-3.927-.682-.863-1.14-1.587-1.459-2.326.448-.405.868-.829 1.273-1.244.143-.147.29-.295.438-.443.515-.515.791-1.11.791-1.716 0-.605-.271-1.2-.79-1.715l-1.421-1.42c-.167-.167-.324-.33-.486-.496a26.133 26.133 0 0 0-.968-.958C5.778.253 5.201 0 4.591 0c-.605 0-1.187.253-1.697.739L1.112 2.52A3.662 3.662 0 0 0 .02 4.866c-.09 1.139.12 2.35.663 3.813.834 2.263 2.092 4.365 3.96 6.61ZM1.183 4.966a2.52 2.52 0 0 1 .758-1.62l1.773-1.773c.276-.267.581-.405.877-.405.29 0 .586.138.858.414.319.296.62.606.943.934.162.167.33.334.496.506l1.42 1.42c.296.295.448.596.448.891 0 .295-.152.596-.448.891-.148.148-.295.3-.443.448-.443.448-.858.872-1.315 1.277l-.024.024c-.396.396-.334.772-.239 1.058l.015.038c.367.882.877 1.72 1.673 2.722 1.43 1.763 2.935 3.13 4.594 4.184.205.134.424.238.629.343.19.096.367.186.524.286.02.01.034.02.053.029.157.08.31.119.462.119.381 0 .629-.243.71-.324l1.783-1.783c.276-.276.576-.424.872-.424.362 0 .657.224.843.425l2.874 2.869c.572.571.567 1.191-.014 1.796-.2.215-.41.42-.634.634-.334.324-.682.658-.996 1.034-.548.591-1.201.868-2.045.868-.08 0-.167-.005-.248-.01-1.563-.1-3.016-.71-4.108-1.23a23.18 23.18 0 0 1-7.725-6.052c-1.778-2.14-2.974-4.132-3.765-6.267-.491-1.31-.677-2.364-.6-3.322Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h23v23H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default memo(PhoneIcon);