import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfFeed11218710Navigator from '../features/CopyOfFeed11218710/navigator';
import Feed11218709Navigator from '../features/Feed11218709/navigator';
import BlankScreen975383Navigator from '../features/BlankScreen975383/navigator';
import BlankScreen1075382Navigator from '../features/BlankScreen1075382/navigator';
import BlankScreen975379Navigator from '../features/BlankScreen975379/navigator';
import Camera775313Navigator from '../features/Camera775313/navigator';
import SignIn2775312Navigator from '../features/SignIn2775312/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
CopyOfFeed11218710: { screen: CopyOfFeed11218710Navigator },
Feed11218709: { screen: Feed11218709Navigator },
BlankScreen975383: { screen: BlankScreen975383Navigator },
BlankScreen1075382: { screen: BlankScreen1075382Navigator },
BlankScreen975379: { screen: BlankScreen975379Navigator },
Camera775313: { screen: Camera775313Navigator },
SignIn2775312: { screen: SignIn2775312Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
