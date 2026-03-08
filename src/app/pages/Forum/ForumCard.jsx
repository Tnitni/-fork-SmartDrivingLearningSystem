import { useState } from 'react';

import './ForumCard.css';

export default function ForumCard({
    post = { title: '', content: '' },
    setSelectedPost = () => { },
}) {
    const [open, setOpen] = useState(false);

    const handleClickReact = (reaction) => {
        console.log(reaction);
        setOpen(false);
    };

    const actions = [
        { icon: <i className='fa-regular fa-thumbs-up' />, action: () => handleClickReact('Like') },
        { icon: <i className='fa-regular fa-heart' />, action: () => handleClickReact('Heart') },
        { icon: <i className='fa-regular fa-face-laugh-squint' />, action: () => handleClickReact('Haha') },
        { icon: <i className='fa-regular fa-face-surprise' />, action: () => handleClickReact('Wow') },
        { icon: <i className='fa-regular fa-face-frown' />, action: () => handleClickReact('Sad') },
        { icon: <i className='fa-regular fa-angry' />, action: () => handleClickReact('Angry') },
    ];

    return (
        <div className='forum-card-container'>
            <div className='content'>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
            <div className='react-comment'>

                <div
                    className='fab-wrapper'
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    <button className='fab-main' onClick={() => handleClickReact('Like')}>
                        <i className='fa-regular fa-thumbs-up' />
                    </button>

                    {open && (
                        <div className='fab-popup'>
                            {actions.map((item, index) => (
                                <button
                                    key={index}
                                    className='fab-item'
                                    onClick={item.action}
                                >
                                    {item.icon}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <button><i className='fa-regular fa-thumbs-up' /></button>
                <button onClick={() => setSelectedPost(post)}><i className='fa-regular fa-comment' /></button>
            </div>
        </div>
    )
}
