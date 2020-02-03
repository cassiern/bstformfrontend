// import React from 'react';
// import {GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
 
// const mapStyles = {
// 	width: '20%',
// 	height: '70px'
// }; 

// function Map(){
// 	return(
// 		<GoogleMap 
// 		defaultZoom={10} 
// 		defualtCenter={{lat:39.739235, lng: -104.990250}}
// 		>
// 		{}
// 		</GoogleMap>
// 	);
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

 
// export default function MapContainer(){
// 	// constructor(props) {
// 	// 	super(props);
// 	// 	this.state = {
// 	// 		placeCoordinates: null,
// 	// 		ready: true,
// 	// 		showingInfoWindow: true
// 	// 	}
// 	// }



// 	// render(){
// 		return(
// 			<div style={{width:'100vw', height: '70vh'}}>
// 				<WrappedMap 
// 				googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}'}
// 				loadingElement = { <div style={{ height: "100%" }}/>}
// 				containerElement = { <div style={{ height: "100%" }}/>}
// 				mapElement = { <div style={{ height: "100%" }}/>}
// 				/>
// 			</div>
// 		)
// 	}
 
// //export default MapContainer;