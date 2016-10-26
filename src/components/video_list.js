//no need for state, doesn't re-render itself or need to record, 
//so it can be a plain functional component

import React from 'react';
import VideoListItem from './video_list_item';

//when we use a functional component, props object will arrive to VideoList as
//an argument to the function

//in a class based compoenent, props is available anywhere in any method
//we define as this.props. (so whenever you refactor your component from
//functional to class based, you need to change prop references to this.props)
const VideoList = (props) => { //(const videos = props.videos (array of vid)
	const videoItems = props.videos.map(video => {
		return <VideoListItem 
			onVideoSelect = {props.onVideoSelect}
			key={video.etag} 
			video={video} />
	});

	return (
		<ul className="col-md-4 list-group"> 
			{videoItems}
		</ul>
	);
};

//react is very intelligent about rendering an array--recognize that array
//is a list and renders it as a li item;
//whenever you render an array of items of the same type, react
//assumes we are building a list. however, without an id on each, it
//would have to re-render all the items of the list if something
//changes. can use "etag" as a key, doesn't have to be anything special
//just one per record.

export default VideoList;