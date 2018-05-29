import { createBottomTabNavigator } from 'react-navigation'

import Home from './screens/Home'
import Explore from './screens/Explore'
import YourDay from './screens/YourDay'

const TabNav = createBottomTabNavigator(
  {
    Home: {
      path: '/',
      screen: Home,
    },
    YourDay: {
      path: '/day',
      screen: YourDay,
    },
    Explore: {
      path: '/explore',
      screen: Explore,
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default TabNav
