import { getIcon } from '..';
import { IconName } from '@interfaces/index';

describe('getIcon', () => {
  it('should return the correct icon component for each icon name', () => {
    expect(getIcon(IconName.Email)).toBe(
      require('../../components/Icon/EmailIcon').default,
    );
    expect(getIcon(IconName.Password)).toBe(
      require('../../components/Icon/LockIcon').default,
    );
    expect(getIcon(IconName.User)).toBe(
      require('../../components/Icon/UserIcon').default,
    );
    expect(getIcon(IconName.Phone)).toBe(
      require('../../components/Icon/PhoneIcon').default,
    );
    expect(getIcon(IconName.Search)).toBe(
      require('../../components/Icon/SearchIcon').default,
    );
    expect(getIcon(IconName.Cart)).toBe(
      require('../../components/Icon/CartIcon').default,
    );
  });
});
