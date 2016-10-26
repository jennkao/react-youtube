import React from 'react';

//this first arg has a property video, please grab that video and
//declare it a new var called video.
const VideoListItem = ({video, onVideoSelect}) => {
	//eg. = video = props.video onVideoSelect = props.onVideoSelect
	//try not to pass down props over 3 parents-childs (hard to follow)
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	)
};

export default VideoListItem;