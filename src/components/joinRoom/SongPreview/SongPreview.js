import React from 'react'
import './SongPreview.css'
import songIcon from '../../../assets/songicon.png';
import {Button} from 'react-bootstrap'
import { FaTrash,FaPlay, FaUpload } from 'react-icons/fa';


function SongPreview(props) {
    return (
        <div className="song-preview">
            <div className="song-details">
            <img className="song-icon"src={songIcon} alt="icon-song" />
                <p>{props.title} Fetched From Link {props.duration}</p>
            </div>
            <Button className="remove-song-button"><FaTrash/> <FaPlay/> <FaUpload/> </Button>
        </div>
        
    )
}

export default SongPreview
