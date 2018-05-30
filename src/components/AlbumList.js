import React, { Component } from 'react';
/*Import scrollview because content exceeds height of phone...allows for scrolling...*/
import { ScrollView } from 'react-native';
/*Library for making HTTP requests. From NPM*/
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


/*Class based components need to always 
implement a 'render()' method which returns some JSX*/

/*Class based components have Lifecycle methods 
which can be implemented*/
class AlbumList extends Component {
	/*Initial (empty) state. (HTTP request hasn't completed)
	Only for class based components
	*/
	state = { albums: [] };

	/*A lifecycle method*/
	componentWillMount(){
		/*
		GET request method from axios. Returns a promise 
		to be fired when available.
		*/
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));//Set state variable to provided data from GET request

	}


	renderAlbums(){
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />

		);

	}

	render(){
		console.log(this.state);

		return(
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}	
}

export default AlbumList;
