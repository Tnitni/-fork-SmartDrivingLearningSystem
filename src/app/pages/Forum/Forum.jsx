import React, { useState } from 'react';
import PopupContainer from '../../components/PopupContainer/PopupContainer';
import ForumCard from './ForumCard';
import ForumPopup from './ForumPopup';

import './Forum.css';


//TEST DEMO RICH TEXT EDITOR
import RichTextEditor from '../../components/RichTextEditor/RichTextEditor';
//TEST DEMO RICH TEXT EDITOR


export default function Forum() {
    const [FORUMPOSTs, setFORUMPOSTs] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    
    //TEST DEMO RICH TEXT EDITOR
    const [editorState, setEditorState] = useState(null);
    const handleEditorChange = (newState) => {
    setEditorState(newState);
    };
    //TEST DEMO RICH TEXT EDITOR

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

    //TEST DEMO RICH TEXT EDITOR
        // Đọc nội dung dạng JSON (lưu DB):
    const getContent = () => {
    if (!editorState) return null;
    return JSON.stringify(editorState.toJSON());
    };
    //TEST DEMO RICH TEXT EDITOR

    return (
        <div className='forum-container'>
            <div className='left'></div>
            <div className='center'>
                <div className='list'>
                    {ListPost.map((post, i) => (
                        <React.Fragment key={i}>
                            <ForumCard post={post} setSelectedPost={setSelectedPost} />
                        </React.Fragment>
                    ))}
                </div>
                 {/* TEST DEMO RICH TEXT EDITOR */}
            <RichTextEditor
                onChange={handleEditorChange}
                placeholder='Viết bình luận của bạn...'
                autoFocus
            />
            <button onClick={() => console.log('Editor content:', getContent())}>
                Log Content
            </button>
            {/* TEST DEMO RICH TEXT EDITOR */}

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
