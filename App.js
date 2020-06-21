import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    //this object has all the screen components
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    //this object is for the initial screen
    initialRouteName: 'Search',
    defaultNavigationOptions:{
      title: 'Business Search'
    }
  }
);

//the app.js is a very speacial file, anything we write here will be taken by the react native when the application starts so we always need to return a react component in this file
//and in this case we have a navigator instead, so createAppContainer creates a default react component 
export default createAppContainer(navigator);
