
import './ForumCard.css';

export default function ForumCard({
    post = { title: '', content: '' },
    setSelectedPost = () => { },
}) {
    return (
        <div className='forum-card-container'>
            <div className='content'>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
            <div className='react-comment'>
                <button><i className='fa-regular fa-thumbs-up' /></button>
                <button onClick={() => setSelectedPost(post)}><i className='fa-regular fa-comment' /></button>
            </div>
        </div>
    )
}
