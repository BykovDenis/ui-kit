import Pathname from '../types/pathname';

function getPathname(pathnameProps: Pathname, size: 'sm' | 'm' | 'lg') {
  switch (size) {
    case 'sm': {
      return pathnameProps.sm;
    }
    case 'm': {
      return pathnameProps.m;
    }
    case 'lg': {
      return pathnameProps.lg;
    }
    default: {
      return pathnameProps.m;
    }
  }
}

export default getPathname;
