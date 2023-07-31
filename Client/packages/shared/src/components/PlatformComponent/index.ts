import {JSX} from 'react';
import {Platform} from 'react-native';
import {NativePlatformComponent} from '../../lib/nativewind';

import {PlatformComponent as ComponentIOS} from './PlatformComponent.ios';
import {PlatformComponent as ComponentAndroid} from './PlatformComponent.android';
import {PlatformComponent as ComponentWeb} from './PlatformComponent.web';

const Components: NativePlatformComponent = {
  ios: ComponentIOS,
  android: ComponentAndroid,
  web: ComponentWeb,
  macos: function (): JSX.Element {
    throw new Error('Function not implemented.');
  },
  windows: function (): JSX.Element {
    throw new Error('Function not implemented.');
  },
  native: function (): JSX.Element {
    throw new Error('Function not implemented.');
  },
};

export const PlatformComponent = Components[Platform.OS];
