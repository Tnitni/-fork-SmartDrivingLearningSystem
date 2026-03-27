import React from 'react';

const ChangeRequests = () => {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-hidden">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] z-50 bg-[#081328] flex flex-col py-8 px-0 gap-6 font-['Be_Vietnam_Pro'] text-[0.875rem] tracking-[0.01em]">
        <div className="px-8 mb-4">
          <h1 className="text-lg font-bold text-[#dde5ff] tracking-tight">The Instructor’s Atelier</h1>
          <p className="text-xs text-[#95abde] mt-1 opacity-70">The Digital Curator</p>
        </div>
        <nav className="flex flex-col gap-1">
          <a className="font-medium text-[#95abde] pl-8 py-3 hover:text-[#dde5ff] hover:bg-[#091935] transition-all flex items-center gap-3" href="#">
            <span className="material-symbols-outlined text-xl">home</span>
            Trang chủ
          </a>
          <a className="font-medium text-[#95abde] pl-8 py-3 hover:text-[#dde5ff] hover:bg-[#091935] transition-all flex items-center gap-3" href="#">
            <span className="material-symbols-outlined text-xl">forum</span>
            DIỄN ĐÀN
          </a>
          <div className="font-bold text-[#dde5ff] border-l-2 border-[#bdc7db] pl-8 py-3 bg-[#091935]/50 flex items-center gap-3">
            <span className="material-symbols-outlined text-xl">assignment_late</span>
            KIỂM DUYỆT & BÁO CÁO
          </div>
          <a className="font-medium text-[#95abde] pl-8 py-3 hover:text-[#dde5ff] hover:bg-[#091935] transition-all flex items-center gap-3" href="#">
            <span className="material-symbols-outlined text-xl">school</span>
            ĐÀO TẠO LÝ THUYẾT
          </a>
          <a className="font-medium text-[#95abde] pl-8 py-3 hover:text-[#dde5ff] hover:bg-[#091935] transition-all flex items-center gap-3" href="#">
            <span className="material-symbols-outlined text-xl">model_training</span>
            ĐÀO TẠO MÔ PHỎNG
          </a>
          <a className="font-medium text-[#95abde] pl-8 py-3 hover:text-[#dde5ff] hover:bg-[#091935] transition-all flex items-center gap-3" href="#">
            <span className="material-symbols-outlined text-xl">directions_car</span>
            BẰNG LÁI & PHƯƠNG TIỆN
          </a>
        </nav>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 w-[calc(100%-280px)] z-40 bg-[#070e1d]/80 backdrop-blur-md border-b border-[#314774]/20 flex justify-between items-center h-16 px-8 ml-[280px] font-['Be_Vietnam_Pro'] text-sm">
        <div className="flex items-center w-1/3">
          <div className="relative w-full max-w-md group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
            <input className="w-full bg-surface-container border-none rounded-xl pl-10 pr-4 py-2 text-on-surface placeholder-on-surface-variant/50 focus:ring-1 focus:ring-outline-variant transition-all" placeholder="Tìm kiếm hệ thống..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <button className="material-symbols-outlined text-[#95abde] hover:text-[#dde5ff] hover:bg-[#091f42] p-2 rounded-lg transition-all cursor-pointer active:opacity-80">notifications</button>
            <button className="material-symbols-outlined text-[#95abde] hover:text-[#dde5ff] hover:bg-[#091f42] p-2 rounded-lg transition-all cursor-pointer active:opacity-80">settings</button>
          </div>
          <div className="flex items-center gap-3 pl-6 border-l border-[#314774]/30 cursor-pointer active:opacity-80">
            <div className="text-right">
              <p className="font-semibold text-[#dde5ff] leading-none">Admin Atelier</p>
              <p className="text-[10px] text-[#95abde] uppercase tracking-wider mt-1">Quản trị viên</p>
            </div>
            <img alt="Instructor Profile" className="w-10 h-10 rounded-full bg-surface-container-high p-0.5 border border-outline-variant/30" data-alt="professional portrait of a confident administrator in a modern dark office setting with soft blue ambient light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeUDq_9Lhaj0Y779sUB9JWeu40mXVfnIXpztoAWzparTwpXK6PAlMYvDacOAm_57Uy-8zLRviqQT3yHpI0ghgdlrrsbsCoypt5IQ17DMPdsbR-DSKBBVr-czZYx2O4GP7SGf0QASrq5vj-3m64HtqXPqNSKu2bcqNooTOBf9HDCsrAgrLgkPURV_2wBNo1fCDo8dQ-6MTjnttDnewrJTZHc9hVlmUNEU-CzA3Ko6dgN_JWZi9D4Z7KyLLviVn880WKRpvnOV52A5I" />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-[280px] pt-24 pb-12 px-10 min-h-screen bg-surface">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface">Yêu cầu thay đổi nội dung</h2>
            <span className="px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-xs font-bold tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              12 MỚI
            </span>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-high hover:bg-surface-variant text-on-surface rounded-xl font-medium transition-all">
              <span className="material-symbols-outlined text-lg">download</span>
              Xuất báo cáo
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-surface-container-low p-6 rounded-2xl mb-8 flex flex-wrap items-end gap-6 border border-outline-variant/10 shadow-2xl">
          <div className="flex-1 min-w-[300px]">
            <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-2 ml-1">Tìm kiếm tiêu đề</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary/20 rounded-xl pl-12 pr-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 transition-all" placeholder="Tìm theo tiêu đề yêu cầu..." type="text" />
            </div>
          </div>
          <div className="w-64">
            <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-widest mb-2 ml-1">Trạng thái</label>
            <select className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-on-surface appearance-none cursor-pointer">
              <option>Tất cả</option>
              <option>Chờ xử lý</option>
              <option>Đã chấp nhận</option>
              <option>Đã từ chối</option>
            </select>
          </div>
          <button className="px-8 py-3 bg-[#3B82F6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">filter_alt</span>
            Tìm kiếm
          </button>
        </div>

        {/* Data Table Section */}
        <div className="bg-surface-container rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high/50 border-b border-outline-variant/10">
                  <th className="py-5 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-widest">STT</th>
                  <th className="py-5 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Tiêu đề yêu cầu</th>
                  <th className="py-5 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Người gửi (Admin)</th>
                  <th className="py-5 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Ngày gửi</th>
                  <th className="py-5 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Trạng thái</th>
                  <th className="py-5 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-right">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="py-5 px-6 text-on-surface-variant font-medium">01</td>
                  <td className="py-5 px-6 font-semibold text-on-surface group-hover:text-primary transition-colors">Cập nhật giáo trình: Thiết kế UI nâng cao - Chương 4</td>
                  <td className="py-5 px-6 text-on-surface-variant">Lê Văn Thành</td>
                  <td className="py-5 px-6 text-on-surface-variant text-sm">12/10/2023 14:30</td>
                  <td className="py-5 px-6">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Chờ xử lý</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="px-4 py-1.5 border border-primary/30 text-primary hover:bg-primary/10 rounded-lg text-xs font-semibold transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="py-5 px-6 text-on-surface-variant font-medium">02</td>
                  <td className="py-5 px-6 font-semibold text-on-surface group-hover:text-primary transition-colors">Sửa đổi câu hỏi lý thuyết số 452</td>
                  <td className="py-5 px-6 text-on-surface-variant">Nguyễn Văn A</td>
                  <td className="py-5 px-6 text-on-surface-variant text-sm">11/10/2023 09:15</td>
                  <td className="py-5 px-6">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Đã chấp nhận</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="px-4 py-1.5 border border-primary/30 text-primary hover:bg-primary/10 rounded-lg text-xs font-semibold transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="py-5 px-6 text-on-surface-variant font-medium">03</td>
                  <td className="py-5 px-6 font-semibold text-on-surface group-hover:text-primary transition-colors">Thay đổi mô tả chương trình học lái xe B2</td>
                  <td className="py-5 px-6 text-on-surface-variant">Trần Thị Lan</td>
                  <td className="py-5 px-6 text-on-surface-variant text-sm">10/10/2023 16:45</td>
                  <td className="py-5 px-6">
                    <span className="px-3 py-1 bg-error/10 text-error border border-error/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Đã từ chối</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="px-4 py-1.5 border border-primary/30 text-primary hover:bg-primary/10 rounded-lg text-xs font-semibold transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="py-5 px-6 text-on-surface-variant font-medium">04</td>
                  <td className="py-5 px-6 font-semibold text-on-surface group-hover:text-primary transition-colors">Thêm video hướng dẫn lùi chuồng dọc</td>
                  <td className="py-5 px-6 text-on-surface-variant">Phạm Minh Hoàng</td>
                  <td className="py-5 px-6 text-on-surface-variant text-sm">09/10/2023 11:20</td>
                  <td className="py-5 px-6">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Chờ xử lý</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="px-4 py-1.5 border border-primary/30 text-primary hover:bg-primary/10 rounded-lg text-xs font-semibold transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 5 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="py-5 px-6 text-on-surface-variant font-medium">05</td>
                  <td className="py-5 px-6 font-semibold text-on-surface group-hover:text-primary transition-colors">Hiệu chỉnh thang điểm bài thi mô phỏng 02</td>
                  <td className="py-5 px-6 text-on-surface-variant">Đặng Thu Thảo</td>
                  <td className="py-5 px-6 text-on-surface-variant text-sm">08/10/2023 08:00</td>
                  <td className="py-5 px-6">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Đã chấp nhận</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="px-4 py-1.5 border border-primary/30 text-primary hover:bg-primary/10 rounded-lg text-xs font-semibold transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 6 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="py-5 px-6 text-on-surface-variant font-medium">06</td>
                  <td className="py-5 px-6 font-semibold text-on-surface group-hover:text-primary transition-colors">Cập nhật danh sách biển báo cấm mới nhất</td>
                  <td className="py-5 px-6 text-on-surface-variant">Vũ Anh Tuấn</td>
                  <td className="py-5 px-6 text-on-surface-variant text-sm">07/10/2023 15:40</td>
                  <td className="py-5 px-6">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Chờ xử lý</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="px-4 py-1.5 border border-primary/30 text-primary hover:bg-primary/10 rounded-lg text-xs font-semibold transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 7 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="py-5 px-6 text-on-surface-variant font-medium">07</td>
                  <td className="py-5 px-6 font-semibold text-on-surface group-hover:text-primary transition-colors">Yêu cầu xóa bài học: Quy tắc 2 giây (Cũ)</td>
                  <td className="py-5 px-6 text-on-surface-variant">Lê Văn Thành</td>
                  <td className="py-5 px-6 text-on-surface-variant text-sm">06/10/2023 10:15</td>
                  <td className="py-5 px-6">
                    <span className="px-3 py-1 bg-error/10 text-error border border-error/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Đã từ chối</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="px-4 py-1.5 border border-primary/30 text-primary hover:bg-primary/10 rounded-lg text-xs font-semibold transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 8 */}
                <tr className="hover:bg-surface-container-high transition-colors group">
                  <td className="py-5 px-6 text-on-surface-variant font-medium">08</td>
                  <td className="py-5 px-6 font-semibold text-on-surface group-hover:text-primary transition-colors">Sửa lỗi typo trong giáo trình Chương 1</td>
                  <td className="py-5 px-6 text-on-surface-variant">Nguyễn Văn A</td>
                  <td className="py-5 px-6 text-on-surface-variant text-sm">05/10/2023 14:00</td>
                  <td className="py-5 px-6">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Đã chấp nhận</span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="px-4 py-1.5 border border-primary/30 text-primary hover:bg-primary/10 rounded-lg text-xs font-semibold transition-all">Xem chi tiết</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-6 bg-surface-container-low border-t border-outline-variant/10 flex items-center justify-between">
            <span className="text-xs text-on-surface-variant font-medium">Đang hiển thị 1-8 trên tổng số 42 yêu cầu</span>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all border border-outline-variant/10">
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-on-primary font-bold shadow-lg shadow-primary/20">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all border border-outline-variant/10">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all border border-outline-variant/10">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all border border-outline-variant/10">...</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all border border-outline-variant/10">6</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all border border-outline-variant/10">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* System Stats / Bento Style Context */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Trung bình phản hồi</p>
              <h4 className="text-4xl font-extrabold text-on-surface font-headline">2.4 Giờ</h4>
              <p className="text-emerald-400 text-xs mt-4 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_down</span>
                Giảm 15% so với tháng trước
              </p>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-on-surface-variant/5 group-hover:scale-110 transition-transform">schedule</span>
          </div>

          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Tỷ lệ chấp thuận</p>
              <h4 className="text-4xl font-extrabold text-on-surface font-headline">88.5%</h4>
              <p className="text-primary text-xs mt-4 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                Dựa trên 150 yêu cầu gần nhất
              </p>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-on-surface-variant/5 group-hover:scale-110 transition-transform">verified</span>
          </div>

          <div className="bg-[#082450]/30 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Trạng thái hệ thống</p>
              <h4 className="text-4xl font-extrabold text-on-surface font-headline">Ổn định</h4>
              <p className="text-on-surface-variant text-xs mt-4 flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Tất cả các module đang hoạt động
              </p>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-primary/10 group-hover:scale-110 transition-transform">cloud_done</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChangeRequests;
