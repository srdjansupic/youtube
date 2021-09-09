import React, { useState } from 'react';

function ListVideo({ dataYoutube }) {
    const videos = dataYoutube.videos;

    console.log(videos);
    const [currentVideo, setCurrentVideo] = useState();

    const currentVideoArr = videos.filter(x => x.id.videoId === currentVideo);

    const [playList, setPlayList] = useState([]);

    const addPlayList = (video) => {
        setPlayList([...playList, video]);
    }

    const [openPlayList, setOpenPlayList] = useState(false);

    function toTop() {
        window.scrollTo(0, 0);
    }


    console.log(playList);

    return (
        <div id="currentPage">
            <div className="currentVideo">
                <div className="videoYT">
                    <iframe src={`https://www.youtube.com/embed/${currentVideo}`}></iframe>
                    <div className="description">
                        <div className="title">{currentVideoArr.map(x => x.snippet.title)}</div>
                        <div className="alldesc"><span>Description:</span><div>{currentVideoArr.map(x => x.snippet.description)}</div></div>
                    </div>
                </div>


            </div>
            <div className="allVideos">
                <div className="playList">
                    <div className="playListDesc"><h3>{playList.length}</h3><h3>Playlist video</h3> <div className={openPlayList === false ? "openPlayList" : "closePlayList"} onClick={() => { setOpenPlayList(!openPlayList) }}>+</div> <div onClick={() => { setOpenPlayList(!openPlayList) }} className={openPlayList === false ? "closePlayList" : "openPlayList"}>-</div></div>
                    <span className={openPlayList === false ? "closePlayListVideoSpan" : "openPlayListVideoSpan"}>{playList.map(x => {
                        return (
                            <div>
                                <img onClick={() => { setCurrentVideo(x.id.videoId) }} src={`${x.snippet.thumbnails.high.url}`}></img>
                                <div className="titlePlayList">
                                    {x.snippet.title}
                                </div>
                            </div>
                        )
                    })}
                    </span>
                </div>

                {videos.map(video => {
                    return (
                        <div className="ytVideo">
                            <span className="addPlayList" onClick={() => { addPlayList(video) }} value={video.id.videoId} id={video.snippet.thumbnails.high.url}>+ Add to playlist</span>
                            <img onClick={(e) => { setCurrentVideo(video.id.videoId); toTop() }} className="thumb" src={`${video.snippet.thumbnails.high.url}`}></img>
                            <h3>{video.snippet.title}</h3>
                            <img className="iconPlay" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/YouTube_play_buttom_dark_icon_%282013-2017%29.svg/1200px-YouTube_play_buttom_dark_icon_%282013-2017%29.svg.png"></img>
                        </div>
                    )
                })} </div>
        </div>
    )
}

export default ListVideo;
