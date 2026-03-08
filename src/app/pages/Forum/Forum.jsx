import React, { useState } from 'react';
import ForumCard from './ForumCard';

import './Forum.css';
import PopupContainer from '../../components/PopupContainer/PopupContainer';
import ForumPopup from './ForumPopup';

export default function Forum() {
    const [FORUMPOSTs, setFORUMPOSTs] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    const ListPost = [
        {
            id: 1,
            title: 'Forum 1',
            content: 'Content 1',
        },
        {
            id: 2,
            title: 'Forum 2',
            content: 'Content 2',
        },
    ];

    return (
        <div className='forum-container'>
            <div className='left'></div>
            <div className='center'>
                <div className='list'>
                    <div>Hello {selectedPost?.title}</div>
                    {ListPost.map((post, i) => (
                        <React.Fragment key={i}>
                            <ForumCard post={post} setSelectedPost={setSelectedPost} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className='right'></div>

            {selectedPost &&
                <PopupContainer onClose={setSelectedPost}>
                    <div className='inner-popup'>
                        <ForumCard post={selectedPost} setSelectedPost={setSelectedPost} />
                        <ForumPopup SelectedPost={selectedPost} />
                    </div>
                </PopupContainer>
            }
        </div>
    )
}
