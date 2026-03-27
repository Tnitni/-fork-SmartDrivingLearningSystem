import InstructorDataTable from '../../../components/InstructorComponent/InstructorDataTable';
import '../InstructorPages.css';

const mockLessons = [
    { id: 1, title: 'Giới thiệu Luật giao thông đường bộ', chapter: 'Luật giao thông', type: 'Lý thuyết', duration: '45 phút', status: 'active' },
    { id: 2, title: 'Biển báo cấm và biển báo nguy hiểm', chapter: 'Biển báo', type: 'Lý thuyết', duration: '30 phút', status: 'active' },
    { id: 3, title: 'Kỹ thuật vào cua an toàn', chapter: 'Kỹ thuật lái xe', type: 'Thực hành', duration: '60 phút', status: 'active' },
    { id: 4, title: 'Xử lý tình huống giao thông', chapter: 'Tình huống', type: 'Mô phỏng', duration: '40 phút', status: 'draft' },
    { id: 5, title: 'Hệ thống đèn tín hiệu', chapter: 'Biển báo', type: 'Lý thuyết', duration: '25 phút', status: 'active' },
    { id: 6, title: 'Lái xe trên đường cao tốc', chapter: 'Kỹ thuật lái xe', type: 'Thực hành', duration: '50 phút', status: 'active' },
];

const columns = [
    { key: 'id', label: 'STT', width: '60px' },
    { key: 'title', label: 'Tên bài học' },
    { key: 'chapter', label: 'Chương' },
    { key: 'type', label: 'Loại', width: '100px', render: (val) => (
        <span className={`ins-status-chip ${val === 'Lý thuyết' ? 'active' : val === 'Thực hành' ? 'approved' : 'pending'}`}>
            <span className='chip-dot'></span>{val}
        </span>
    )},
    { key: 'duration', label: 'Thời lượng', width: '100px' },
    { key: 'actions', label: 'Thao tác', width: '120px', render: () => (
        <div className='ins-action-cell'>
            <button className='ins-action-btn view' title='Xem'><i className='fa-solid fa-eye'></i></button>
            <button className='ins-action-btn edit' title='Sửa'><i className='fa-solid fa-pen'></i></button>
            <button className='ins-action-btn delete' title='Xóa'><i className='fa-solid fa-trash'></i></button>
        </div>
    )},
];

export default function LessonManagement() {
    return (
        <div className='ins-page'>
            <div className='ins-page-header'>
                <div>
                    <h1>Quản lý Bài học</h1>
                    <p>Quản lý danh sách bài học trong hệ thống đào tạo.</p>
                </div>
                <button className='ins-btn ins-btn-primary'>
                    <i className='fa-solid fa-plus'></i> Thêm bài học
                </button>
            </div>
            <InstructorDataTable title='Danh sách bài học' columns={columns} data={mockLessons} />
        </div>
    );
}
