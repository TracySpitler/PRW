import { createBottomTabNavigator } from 'react-navigation'

import Home from './screens/Home'
import LifeList from './screens/LifeList'
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
    LifeList: {
      path: '/explore',
      screen: LifeList,
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default TabNav
