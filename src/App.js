import React, { useState } from 'react'
import Api from './Component/API/Api';
import SearchBar from './Component/API/SearchBar/SearchBar';
import ListVideo from './Component/ListVideo/ListVideo';

function App() {

    const [youtubeState, setYoutubeState] = useState({ videos: [], selectedVideo: null });

    const handleFormSubmit = async (termFormSearchBar) =>{
        const response = await Api.get('/search',{
            params:{
                q:termFormSearchBar
            }
        })

        setYoutubeState({...youtubeState,videos:response.data.items});
        
    };
    

    return (
        <div>
            <SearchBar handleFormSubmit={handleFormSubmit} />
            <ListVideo dataYoutube={youtubeState}/>
        </div>
    )
}

export default App
