import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import Workouts from '../screens/Workouts'
import Strength from '../screens/Strength'
import Cardio from '../screens/Cardio'
import Bblast from '../screens/Perfectbutt'
import Yoga from '../screens/Yoga'
import LandingScreen from '../screens/LandingScreen'


const screens = {
    Home:{
        screen:Home
    },
    Workouts:{
        screen:Workouts
    },
    Strength:{
        screen:Strength
    },
    Cardio:{
        screen:Cardio
    },
    Perfectbutt:{
        screen:Bblast
    },
    Yoga:{
        screen:Yoga
    },
    LandingScreen:{
        screen:LandingScreen
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)