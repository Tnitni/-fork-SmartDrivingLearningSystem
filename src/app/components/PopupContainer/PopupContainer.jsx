
import './PopupContainer.css';

export default function PopupContainer({ children }) {
    return (
        <div className='popup-container-container'>
            <div className='modal-box'>
                <button onClick={() => setSelectedPost(null)} className='close-btn'><i className='fa-solid fa-xmark' /></button>
                {children}
            </div>
        </div>
    )
}
