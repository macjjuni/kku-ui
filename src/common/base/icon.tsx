import { ReactNode } from 'react';

/* eslint-disable max-len */

interface Icons {
  [key: string]: ReactNode;
}

const kIcons: Icons = {
  close: (
    <svg viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M5.997 6.784l4.454 4.359.787-.804-4.43-4.336 4.465-4.3-.78-.81-4.49 4.323L1.55.857l-.787.804 4.43 4.336-4.465 4.3.78.81 4.49-4.323z' />
      </g>
    </svg>
  ),
  arrow_up: (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M12 5V19M12 5L6 11M12 5L18 11' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_down: (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M12 5V19M12 19L6 13M12 19L18 13' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_right: (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M6 12H18M18 12L13 7M18 12L13 17' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_left: (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M6 12H18M6 12L11 7M6 12L11 17' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_up_right: (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M7 17L17 7M17 7H8M17 7V16' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_up_left: (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M17 17L7 7M7 7V16M7 7H16' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_down_right: (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M7 7L17 17M17 17V7M17 17H7' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  arrow_down_left: (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M17 7L7 17M7 17H17M7 17V7' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  keyboard_arrow_down: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M4 8L12 16L20 8' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  ),
  checkbox_unchecked: (
    <svg viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <g stroke='none' strokeWidth='1' fillRule='evenodd'>
          <g fillRule='nonzero'>
            <path d='M5.75,3 L18.25,3 C19.7687831,3 21,4.23121694 21,5.75 L21,18.25 C21,19.7687831 19.7687831,21 18.25,21 L5.75,21 C4.23121694,21 3,19.7687831 3,18.25 L3,5.75 C3,4.23121694 4.23121694,3 5.75,3 Z M5.75,4.5 C5.05964406,4.5 4.5,5.05964406 4.5,5.75 L4.5,18.25 C4.5,18.9403559 5.05964406,19.5 5.75,19.5 L18.25,19.5 C18.9403559,19.5 19.5,18.9403559 19.5,18.25 L19.5,5.75 C19.5,5.05964406 18.9403559,4.5 18.25,4.5 L5.75,4.5 Z' />
          </g>
        </g>
      </g>
    </svg>
  ),
  checkbox_checked: (
    <svg width='64px' height='64px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <g stroke='none' strokeWidth='1' fillRule='evenodd'>
          <g fillRule='nonzero'>
            <path d='M18.25,3 C19.7687831,3 21,4.23121694 21,5.75 L21,18.25 C21,19.7687831 19.7687831,21 18.25,21 L5.75,21 C4.23121694,21 3,19.7687831 3,18.25 L3,5.75 C3,4.23121694 4.23121694,3 5.75,3 L18.25,3 Z M18.25,4.5 L5.75,4.5 C5.05964406,4.5 4.5,5.05964406 4.5,5.75 L4.5,18.25 C4.5,18.9403559 5.05964406,19.5 5.75,19.5 L18.25,19.5 C18.9403559,19.5 19.5,18.9403559 19.5,18.25 L19.5,5.75 C19.5,5.05964406 18.9403559,4.5 18.25,4.5 Z M10,14.4393398 L16.4696699,7.96966991 C16.7625631,7.6767767 17.2374369,7.6767767 17.5303301,7.96966991 C17.7965966,8.23593648 17.8208027,8.65260016 17.6029482,8.94621165 L17.5303301,9.03033009 L10.5303301,16.0303301 C10.2640635,16.2965966 9.84739984,16.3208027 9.55378835,16.1029482 L9.46966991,16.0303301 L6.46966991,13.0303301 C6.1767767,12.7374369 6.1767767,12.2625631 6.46966991,11.9696699 C6.73593648,11.7034034 7.15260016,11.6791973 7.44621165,11.8970518 L7.53033009,11.9696699 L10,14.4393398 L16.4696699,7.96966991 L10,14.4393398 Z' />
          </g>
        </g>
      </g>
    </svg>
  ),
  visibility: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z' />
      </g>
    </svg>
  ),
  visibility_off: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path d='M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z' />
      </g>
    </svg>
  ),
  radio_unchecked: (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path fillRule='evenodd' clipRule='evenodd' d='M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z' />
      </g>
    </svg>
  ),
  radio_checked: (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <path fillRule='evenodd' clipRule='evenodd' d='M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z' />
        <circle cx='12' cy='12' r='5.25' />
      </g>
    </svg>
  ),
  github: (
    <svg viewBox='0 0 73 73' xmlns='http://www.w3.org/2000/svg'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <g id='team-collaboration/version-control/github' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g transform='translate(2.000000, 2.000000)' fillRule='nonzero'>
            <rect id='mask' stroke='#000000' strokeWidth='2' fill='#000000' x='-1' y='-1' width='71' height='71' rx='14' />
            <path d='M58.3067362,21.4281798 C55.895743,17.2972267 52.6253846,14.0267453 48.4948004,11.615998 C44.3636013,9.20512774 39.8535636,8 34.9614901,8 C30.0700314,8 25.5585181,9.20549662 21.4281798,11.615998 C17.2972267,14.0266224 14.0269912,17.2972267 11.615998,21.4281798 C9.20537366,25.5590099 8,30.0699084 8,34.9607523 C8,40.8357654 9.71405782,46.1187277 13.1430342,50.8109917 C16.5716416,55.5036246 21.0008949,58.7507436 26.4304251,60.5527176 C27.0624378,60.6700211 27.5302994,60.5875152 27.8345016,60.3072901 C28.1388268,60.0266961 28.290805,59.6752774 28.290805,59.2545094 C28.290805,59.1842994 28.2847799,58.5526556 28.2730988,57.3588401 C28.2610487,56.1650247 28.2553926,55.1235563 28.2553926,54.2349267 L27.4479164,54.3746089 C26.9330843,54.468919 26.2836113,54.5088809 25.4994975,54.4975686 C24.7157525,54.4866252 23.9021284,54.4044881 23.0597317,54.2517722 C22.2169661,54.1004088 21.4330982,53.749359 20.7075131,53.1993604 C19.982297,52.6493618 19.4674649,51.9294329 19.1631397,51.0406804 L18.8120898,50.2328353 C18.5780976,49.6950097 18.2097104,49.0975487 17.7064365,48.4426655 C17.2031625,47.7871675 16.6942324,47.3427912 16.1794003,47.108799 L15.9336039,46.9328437 C15.7698216,46.815909 15.6178435,46.6748743 15.4773006,46.511215 C15.3368806,46.3475556 15.2317501,46.1837734 15.1615401,46.0197452 C15.0912072,45.855594 15.1494901,45.7209532 15.3370036,45.6153308 C15.5245171,45.5097084 15.8633939,45.4584343 16.3551097,45.4584343 L17.0569635,45.5633189 C17.5250709,45.6571371 18.104088,45.9373622 18.7947525,46.4057156 C19.4850481,46.8737001 20.052507,47.4821045 20.4972521,48.230683 C21.0358155,49.1905062 21.6846737,49.9218703 22.4456711,50.4251443 C23.2060537,50.9284182 23.9727072,51.1796248 24.744894,51.1796248 C25.5170807,51.1796248 26.1840139,51.121096 26.7459396,51.0046532 C27.3072505,50.8875956 27.8338868,50.7116403 28.3256025,50.477771 C28.5362325,48.9090515 29.1097164,47.7039238 30.0455624,46.8615271 C28.7116959,46.721353 27.5124702,46.5102313 26.4472706,46.2295144 C25.3826858,45.9484285 24.2825656,45.4922482 23.1476478,44.8597436 C22.0121153,44.2280998 21.0701212,43.44374 20.3214198,42.5080169 C19.5725954,41.571802 18.9580429,40.3426971 18.4786232,38.821809 C17.9989575,37.300306 17.7590632,35.5451796 17.7590632,33.5559381 C17.7590632,30.7235621 18.6837199,28.3133066 20.5326645,26.3238191 C19.6665366,24.1944035 19.7483048,21.8072644 20.778215,19.1626478 C21.4569523,18.951772 22.4635002,19.1100211 23.7973667,19.6364115 C25.1314792,20.1630477 26.1082708,20.6141868 26.7287253,20.9882301 C27.3491798,21.3621504 27.8463057,21.6790175 28.2208409,21.9360032 C30.3978419,21.3277217 32.644438,21.0235195 34.9612442,21.0235195 C37.2780503,21.0235195 39.5251383,21.3277217 41.7022622,21.9360032 L43.0362517,21.0938524 C43.9484895,20.5319267 45.0257392,20.0169716 46.2654186,19.5488642 C47.5058357,19.0810026 48.4543466,18.9521409 49.1099676,19.1630167 C50.1627483,21.8077563 50.2565666,24.1947724 49.3901927,26.324188 C51.2390143,28.3136755 52.1640399,30.7245457 52.1640399,33.556307 C52.1640399,35.5455485 51.9232849,37.3062081 51.444357,38.8393922 C50.9648143,40.3728223 50.3449746,41.6006975 49.5845919,42.5256002 C48.8233486,43.4503799 47.8753296,44.2285916 46.7404118,44.8601125 C45.6052481,45.4921252 44.504759,45.9483056 43.4401742,46.2293914 C42.3750975,46.5104772 41.1758719,46.7217219 39.8420054,46.8621419 C41.0585683,47.9149226 41.6669728,49.5767225 41.6669728,51.846804 L41.6669728,59.2535257 C41.6669728,59.6742937 41.8132948,60.0255895 42.1061847,60.3063064 C42.3987058,60.5865315 42.8606653,60.6690374 43.492678,60.5516109 C48.922946,58.7498829 53.3521992,55.5026409 56.7806837,50.810008 C60.2087994,46.117744 61.923472,40.8347817 61.923472,34.9597686 C61.9222424,30.0695396 60.7162539,25.5590099 58.3067362,21.4281798 Z' fill='#FFFFFF' />
          </g>
        </g>
      </g>
    </svg>
  ),
  x_logo: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' xmlSpace='preserve'>
      <defs />
      <g style={{ stroke: 'none', strokeWidth: '0', strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: '10', fillRule: 'nonzero', fill: 'none', opacity: '1' }} transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'>
        <polygon
            points='24.89,23.01 57.79,66.99 65.24,66.99 32.34,23.01 '
            style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1 }}
            transform='  matrix(1 0 0 1 0 0) '
        />
        <path
            d='M 72.349 0 H 17.651 C 7.902 0 0 7.902 0 17.651 v 54.699 C 0 82.098 7.902 90 17.651 90 h 54.699 C 82.098 90 90 82.098 90 72.349 V 17.651 C 90 7.902 82.098 0 72.349 0 z M 56.032 70.504 L 41.054 50.477 L 22.516 70.504 h -4.765 L 38.925 47.63 L 17.884 19.496 h 16.217 L 47.895 37.94 l 17.072 -18.444 h 4.765 L 50.024 40.788 l 22.225 29.716 H 56.032 z'
            style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1 }}
            transform=' matrix(1 0 0 1 0 0) '
            strokeLinecap='round'
        />
      </g>
    </svg>
  ),
  gmail: (
    <svg xmlns='http://www.w3.org/2000/svg' role='img' viewBox='0 0 512 512' fill='currentColor'>
      <g strokeWidth='0' />
      <g strokeLinecap='round' strokeLinejoin='round' />
      <g>
        <rect width='512' height='512' rx='15%' fill='currentColor' />
        <path d='M158 391v-142l-82-63V361q0 30 30 30' fill='#4285f4' />
        <path d='M 154 248l102 77l102-77v-98l-102 77l-102-77' fill='#ea4335' />
        <path d='M354 391v-142l82-63V361q0 30-30 30' fill='#34a853' />
        <path d='M76 188l82 63v-98l-30-23c-27-21-52 0-52 26' fill='#c5221f' />
        <path d='M436 188l-82 63v-98l30-23c27-21 52 0 52 26' fill='#fbbc04' />
      </g>
    </svg>
  ),
};

const getIcon = (iconName: string): ReactNode | null => {

  const targetIcon = kIcons[iconName];

  if (targetIcon) { return targetIcon; }

  return null;
};

export { kIcons, getIcon };
