//Import a library to help create a component
import React from 'react';
//I just want access to the "Text" property from the react-native lib
import { AppRegistry, View } from 'react-native';
//Create a component "App". HTML looking stuff is actually JSX

//Import header.js to use component
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Component returns Text 
/*Cannot return more than 1 component at the same time.
	Similar to return 0; return 1;...return 1; never executes
*/

const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} /> //Use component from header.js as self closing tag
		<AlbumList />
	</View>
);


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
