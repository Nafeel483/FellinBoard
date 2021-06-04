import { createStackNavigator } from 'react-navigation-stack';
import Chat from '../Screens/ChatScreen/Chat';
import Message from '../Screens/ChatScreen/Messages';

const ChatNavigation = createStackNavigator(
	{
		Chat: { screen: Chat },
		Message: { screen: Message },
	},
	{
		navigationOptions: {
			header: null,
			gesturesEnabled: false,
			cardStack: { gesturesEnabled: false },
		},
		headerMode: 'none',
	},
);
export default ChatNavigation;
