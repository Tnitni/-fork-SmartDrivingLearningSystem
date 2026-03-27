import React from 'react';

const ContentModerationDetailModal = () => {
  return (
    <div className="overflow-hidden bg-[#070e1d] text-[#dde5ff] font-['Inter']">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] z-50 bg-[#081328] dark:bg-[#081328] flex flex-col py-8 gap-y-6 font-['Be_Vietnam_Pro'] text-sm tracking-wide">
        <div className="px-8 mb-4">
          <h1 className="text-xl font-bold text-[#dde5ff] uppercase tracking-tighter">The Atelier</h1>
          <p className="text-[#95abde] text-[10px] tracking-[0.2em] uppercase mt-1">Driving Instructor CMS</p>
        </div>
        <nav className="flex flex-col gap-y-1">
          <a className="font-medium text-[#95abde] hover:text-[#dde5ff] pl-4 transition-colors py-3 hover:bg-[#091935] flex items-center" href="#">
            DIỄN ĐÀN
          </a>
          {/* Active State: KIỂM DUYỆT (Bài viết chờ duyệt) */}
          <a className="font-bold text-[#dde5ff] border-l-2 border-[#bdc7db] pl-4 transition-all py-3 bg-[#091935] flex items-center" href="#">
            KIỂM DUYỆT
          </a>
          <a className="font-medium text-[#95abde] hover:text-[#dde5ff] pl-4 transition-colors py-3 hover:bg-[#091935] flex items-center" href="#">
            BÁO CÁO
          </a>
          <a className="font-medium text-[#95abde] hover:text-[#dde5ff] pl-4 transition-colors py-3 hover:bg-[#091935] flex items-center" href="#">
            LỊCH TRÌNH
          </a>
          <a className="font-medium text-[#95abde] hover:text-[#dde5ff] pl-4 transition-colors py-3 hover:bg-[#091935] flex items-center" href="#">
            HỌC VIÊN
          </a>
        </nav>
        <div className="mt-auto px-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden">
            <img alt="Instructor Profile" className="w-full h-full object-cover" data-alt="Close-up professional portrait of a driving instructor with a friendly expression in a modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx_xqcQ16t31XYqem1LpJ449kimabNHlNGR07NuXwYU27tTNnn0ypep6yt1wjdG7nnoynwN_rw9hsWIvadu0UB-Wo6kadqz9sJ82tnM1GAbu73iZkdD2RyzZ6QPS9odHgNNbqs-5WoHtGNR9AOcaZ6JexNejD-JuGedalTuqJwDNupnIZvwplc7mf-jG2TANd7vLcRGW6fnrB3P290EEl6DmqfPfZpd8xQH071flZKDokfgcuMWJYhLQLYGJUHIx75zP5WfUGSucs" />
          </div>
          <div>
            <p className="text-on-surface font-semibold text-xs">Minh Trần</p>
            <p className="text-on-surface-variant text-[10px]">Quản trị viên</p>
          </div>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 w-[calc(100%-280px)] z-40 bg-[#070e1d]/80 dark:bg-[#070e1d]/80 backdrop-blur-xl border-b border-[#314774]/20 flex justify-between items-center h-16 px-8">
        <div className="flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-xl w-96 focus-within:ring-1 focus-within:ring-[#314774]/50 transition-all">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-full placeholder:text-outline/50" placeholder="Tìm kiếm bài viết..." type="text" />
        </div>
        <div className="flex items-center gap-6">
          <button className="text-[#95abde] hover:text-[#dde5ff] transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-background"></span>
          </button>
          <button className="text-[#95abde] hover:text-[#dde5ff] transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      {/* Main Canvas */}
      <main className="ml-[280px] pt-24 px-10 pb-10 min-h-screen bg-surface">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-2 tracking-widest uppercase">
            <span>Diễn đàn</span>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-primary">Bài viết chờ duyệt</span>
          </div>
          <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight">Kiểm duyệt nội dung</h2>
        </header>

        {/* Content Grid (Mocked for context behind modal) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Card 1 */}
            <div className="bg-surface-container p-8 rounded-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">school</span>
                  </div>
                  <div>
                    <h3 className="text-on-surface font-semibold text-lg">Kỹ thuật đỗ xe song song trong 3 bước</h3>
                    <p className="text-on-surface-variant text-sm">Người đăng: <span className="text-on-surface">Hoàng Nam</span> • 2 giờ trước</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-variant text-primary text-[10px] font-bold tracking-widest uppercase">Chờ duyệt</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">
                Bài viết chia sẻ những mẹo nhỏ nhưng cực kỳ hiệu quả để giúp các học viên mới bắt đầu có thể thực hiện bài thi đỗ xe song song một cách mượt mà nhất mà không cần...
              </p>
              <div className="flex gap-3">
                <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-bold">Xem chi tiết</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container p-8 rounded-xl relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">policy</span>
                  </div>
                  <div>
                    <h3 className="text-on-surface font-semibold text-lg">Cập nhật luật GTĐB mới nhất tháng 10</h3>
                    <p className="text-on-surface-variant text-sm">Người đăng: <span className="text-on-surface">Lê Thu</span> • 5 giờ trước</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-variant text-primary text-[10px] font-bold tracking-widest uppercase">Chờ duyệt</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">
                Tổng hợp những thay đổi quan trọng trong thông tư mới về xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ mà mọi lái xe cần lưu ý...
              </p>
              <div className="flex gap-3">
                <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-bold">Xem chi tiết</button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-low p-6 rounded-xl">
              <h4 className="text-on-surface font-bold text-sm mb-4 tracking-wider">THỐNG KÊ NHANH</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant text-sm">Tổng chờ duyệt</span>
                  <span className="text-primary font-bold">12</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant text-sm">Hôm nay</span>
                  <span className="text-on-surface font-bold">5</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-on-surface-variant text-sm">Bị báo cáo</span>
                  <span className="text-error font-bold">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Layer 1: Article Detail Overlay (Dimmed Background) */}
      <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6">
        {/* Main Detail Modal */}
        <div className="bg-surface-container-low w-full max-w-4xl max-h-[921px] rounded-xl shadow-[0px_20px_40px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col opacity-50 scale-95 pointer-events-none">
          <div className="p-8 border-b border-outline-variant/20 flex justify-between items-center">
            <h3 className="text-2xl font-headline font-bold">Chi tiết bài viết</h3>
            <span className="material-symbols-outlined text-on-surface-variant">close</span>
          </div>

          <div className="p-8 overflow-y-auto space-y-8">
            <div>
              <h4 className="text-on-surface-variant text-[10px] font-bold tracking-[0.2em] mb-4 uppercase">Tiêu đề bài viết</h4>
              <p className="text-2xl text-on-surface font-semibold">Kỹ thuật đỗ xe song song trong 3 bước</p>
            </div>
            <div className="aspect-video w-full rounded-xl bg-surface-container-high overflow-hidden">
              <img alt="Tutorial Illustration" className="w-full h-full object-cover opacity-50" data-alt="High-angle cinematic 3D render of a car performing a perfect parallel parking maneuver with geometric guide lines on dark asphalt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbV5PBW9y5choZOPSFZVdgr39zISl1bSA4ag1oHobORUf_4Ls0wbdCn7QEq7QLr2eeoK3MuwFkZwYK7z1XjLIL1SRUSnwbXlm9MX-pEDYihmriWDXW0fNbSwdQ4AaPPUui1o9GKEReqA3QesBjm6T3cZtrUk5vB7G5eroiDLvISx3Qrx_WfLuW_fSH2Epok8M8W8KTl8DgFns1v5s_ZPFZ0L3WknjJEuoX81x-Cv0DTOrHywTEiAZ_22TIQ_l8Ka6c2AJn7EiWWuk" />
            </div>
            <div>
              <h4 className="text-on-surface-variant text-[10px] font-bold tracking-[0.2em] mb-4 uppercase">Nội dung chi tiết</h4>
              <p className="text-on-surface-variant leading-relaxed">
                Bước 1: Di chuyển xe song song với xe phía trước khoảng cách 60cm... <br /><br />
                Bước 2: Đánh hết lái sang phải và lùi xe cho đến khi gương chiếu hậu trái thẳng hàng... <br /><br />
                Bước 3: Trả lái thẳng và tiếp tục lùi cho đến khi bánh xe...
              </p>
            </div>
          </div>

          <div className="p-8 bg-surface-container flex justify-end gap-4">
            <button className="px-6 py-3 rounded-lg text-sm font-bold text-on-surface-variant border border-outline-variant">Từ chối</button>
            <button className="px-6 py-3 rounded-lg text-sm font-bold bg-primary text-on-primary">Phê duyệt ngay</button>
          </div>
        </div>

        {/* Nested Modal: Lý do từ chối (ACTIVE) */}
        <div className="absolute inset-0 flex items-center justify-center z-[70] p-6">
          <div className="bg-surface-container-high w-full max-w-md rounded-xl shadow-[0px_30px_60px_rgba(0,0,0,0.8)] border border-outline/20 overflow-hidden">
            <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
              <h4 className="text-lg font-headline font-bold text-on-surface">Lý do từ chối</h4>
              <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6">
              <label className="block text-on-surface-variant text-[10px] font-bold tracking-widest uppercase mb-3">Thông tin phản hồi cho người đăng</label>
              <textarea className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 text-sm text-on-surface focus:ring-1 focus:ring-primary focus:border-transparent placeholder:text-outline/40 transition-all resize-none" placeholder="Nhập lý do chi tiết để học viên/giảng viên có thể chỉnh sửa lại bài viết (ví dụ: Thiếu hình ảnh minh họa, sai quy chuẩn kỹ thuật...)" rows="5"></textarea>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="py-3 rounded-lg text-sm font-bold text-on-surface-variant bg-surface-container hover:bg-surface-container-highest transition-colors">
                  Hủy
                </button>
                <button className="py-3 rounded-lg text-sm font-bold bg-error text-on-error hover:brightness-110 transition-all shadow-lg shadow-error/10">
                  Xác nhận từ chối
                </button>
              </div>
            </div>

            {/* Subtle Decorative Gradient */}
            <div className="h-1 w-full bg-gradient-to-r from-error/50 via-error to-error/50 opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Glassmorphic Notification Toast (Bottom Right) */}
      <div className="fixed bottom-8 right-8 z-[100] bg-surface-container-highest/80 backdrop-blur-xl border border-outline/15 p-4 rounded-xl flex items-center gap-4 shadow-2xl max-w-xs animate-pulse">
        <div className="w-10 h-10 rounded-full bg-error-container/30 flex items-center justify-center text-error">
          <span className="material-symbols-outlined">warning</span>
        </div>
        <div>
          <p className="text-xs font-bold text-on-surface">Hành động yêu cầu</p>
          <p className="text-[10px] text-on-surface-variant">Cần xử lý lý do từ chối để hoàn tất.</p>
        </div>
      </div>
    </div>
  );
};

export default ContentModerationDetailModal;
