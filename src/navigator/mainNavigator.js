import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList94529Navigator from '../features/ArticleList94529/navigator';
import ArticleList94528Navigator from '../features/ArticleList94528/navigator';
import ArticleList94527Navigator from '../features/ArticleList94527/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList94529: { screen: ArticleList94529Navigator },
ArticleList94528: { screen: ArticleList94528Navigator },
ArticleList94527: { screen: ArticleList94527Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
