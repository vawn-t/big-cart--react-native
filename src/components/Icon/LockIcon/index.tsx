import { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const LockIcon = (props: SvgProps) => (
  <Svg width={18} height={23} fill="none" {...props}>
    <Path
      fill="#868889"
      d="M15.094 23H2.156A2.159 2.159 0 0 1 0 20.844V10.78c0-1.19.968-2.156 2.156-2.156h12.938c1.188 0 2.156.967 2.156 2.156v10.063c0 1.19-.968 2.156-2.156 2.156ZM2.156 10.062a.72.72 0 0 0-.719.72v10.062a.72.72 0 0 0 .72.718h12.937a.72.72 0 0 0 .719-.718V10.78a.72.72 0 0 0-.72-.719H2.157Z"
    />
    <Path
      fill="#868889"
      d="M13.656 10.063a.719.719 0 0 1-.719-.72V5.75a4.318 4.318 0 0 0-4.312-4.313A4.318 4.318 0 0 0 4.312 5.75v3.594a.719.719 0 0 1-1.437 0V5.75A5.756 5.756 0 0 1 8.625 0a5.756 5.756 0 0 1 5.75 5.75v3.594a.719.719 0 0 1-.719.719Z"
    />
  </Svg>
);

export default memo(LockIcon);