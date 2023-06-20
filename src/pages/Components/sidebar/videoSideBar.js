import React, { useState } from 'react'
import './videoSideBar.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsIcon from '@mui/icons-material/Sms';
import ShareIcon from '@mui/icons-material/Share';

export default function VideoSideBar({likes, messages, shares}) {
    const [like, setLike] = useState(false)
    function handleLike() {
        if(like === false) {
            setLike(true)
        } else if (like === true) {
            setLike(false)
            
        }
    }

    return (
        <div className='videoSideBar'>
            <div className='videoSideBar__options' onClick={handleLike}>
                {like ? <FavoriteIcon fontSize='medium' /> : <FavoriteBorderOutlinedIcon fontSize='medium' />}
                
                 <p>{like ? likes + 1 : likes}</p>
            </div>
            <div className='videoSideBar__options'>
                <SmsIcon fontSize='medium' />
                <p>{messages}</p>
            </div>
            <div className='videoSideBar__options'>
                <ShareIcon fontSize='medium' />
                <p>{shares}</p>
            </div>
        </div>
    )
}