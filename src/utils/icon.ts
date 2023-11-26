// Types
import { IconName } from '@interfaces/index';

const getIcon = (name: IconName) => {
  let Icon = null;
  switch (name) {
    case IconName.Email:
      Icon = require('../components/Icon/EmailIcon').default;
      break;

    case IconName.Password:
      Icon = require('../components/Icon/LockIcon').default;
      break;

    case IconName.User:
      Icon = require('../components/Icon/UserIcon').default;
      break;

    case IconName.Phone:
      Icon = require('../components/Icon/PhoneIcon').default;
      break;

    case IconName.Search:
      Icon = require('../components/Icon/SearchIcon').default;
      break;

    case IconName.Cart:
      Icon = require('../components/Icon/CartIcon').default;
      break;

    default:
      Icon = null;
      break;
  }
  return Icon;
};

export { getIcon };
