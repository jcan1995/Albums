import React from 'react';
import { Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

/*Functional component since we are only display data*/
const AlbumDetail = ({ album }) => {
	/*Assign the following variables from their respective objects.*/
	/*Album is sent from 'AlbumList'.*/
	const { title, artist, thumbnail_image, image, url } = album;
	const {
		thumbnailStyle,
		headerContentStyle,
		thumbnailContainerStyle,
		headerTextStyle,
		imageStyle
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image
					style={thumbnailStyle}
					source={{ uri: thumbnail_image }}
					/>

				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image style={imageStyle} source={{ uri: image }} />
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(url)} >
					Buy Now
				</Button>
			</CardSection>

		</Card>
	);
};


const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	/*Need to specify height and width for images in react native!*/
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center', //Center Thumbnail in View tag
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};


export default AlbumDetail;
