import React from 'react';

const PendingPosts = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] z-[60] bg-[#081328] dark:bg-[#081328] flex flex-col py-10 px-6 gap-y-4 overflow-y-auto font-['Be_Vietnam_Pro'] text-sm tracking-wide shadow-2xl shadow-black/40">
        <div className="mb-8">
          <h1 className="text-lg font-black text-[#dde5ff] uppercase tracking-tighter">GIẢNG VIÊN</h1>
          <p className="text-[10px] text-[#95abde] uppercase tracking-widest opacity-60">The Digital Curator</p>
        </div>
        <nav className="flex flex-col gap-y-1">
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Trang chủ</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Tạo bài viết</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Bài viết của tôi</a>

          {/* Active State: Bài viết chờ duyệt */}
          <a className="py-2 text-[#dde5ff] font-bold border-l-2 border-[#bdc7db] pl-4 cursor-pointer active:translate-x-1" href="#">Bài viết chờ duyệt</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Báo cáo cộng đồng</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Báo cáo lỗi nội dung</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Duyệt yêu cầu thay đổi</a>

          <div className="h-[1px] bg-outline-variant/10 my-4"></div>

          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Quản lý Chương</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Quản lý Bài học</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Ngân hàng Câu hỏi</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Bài thi thử</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Ngân hàng Biển báo</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Ngân hàng Mô phỏng</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Bài thi Mô phỏng</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Quản lý Bằng lái</a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1" href="#">Quản lý Phương tiện</a>
        </nav>

        <div className="mt-auto pt-10 flex flex-col gap-y-1">
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1 flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-sm">settings</span>
            Cài đặt hệ thống
          </a>
          <a className="py-2 text-[#95abde] font-medium pl-4 opacity-70 hover:opacity-100 hover:text-[#dde5ff] transition-all duration-300 cursor-pointer active:translate-x-1 flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-sm">logout</span>
            Đăng xuất
          </a>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="ml-[280px] min-h-screen flex flex-col">
        {/* TopAppBar */}
        <header className="bg-[#070e1d] dark:bg-[#070e1d] flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50 font-['Be_Vietnam_Pro'] antialiased no-line">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tight text-[#dde5ff]">The Instructor’s Atelier</span>
            <nav className="hidden md:flex gap-6 items-center">
              <a className="text-[#dde5ff] font-semibold text-sm" href="#">Nội dung</a>
              <a className="text-[#95abde] hover:text-[#dde5ff] transition-colors duration-200 text-sm" href="#">Phân tích</a>
              <a className="text-[#95abde] hover:text-[#dde5ff] transition-colors duration-200 text-sm" href="#">Cộng đồng</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <span className="material-symbols-outlined text-[#95abde] cursor-pointer hover:text-[#dde5ff] transition-all">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-[#070e1d]"></span>
            </div>
            <span className="material-symbols-outlined text-[#95abde] cursor-pointer hover:text-[#dde5ff] transition-all">settings</span>

            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 ml-2">
              <img className="w-full h-full object-cover" data-alt="Close-up portrait of a professional man with a neutral expression against a dark studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqNzLu6FCnlnMSQRszhuhBYZLF83qw01hWIH7fg5CJvNb5XwYKNdZJ-Nxj8_i0vShfS-0QzVjjTyrg6z6xovgNjTtyfFlpjT_IapJAq33pH1AWrfst8E-KHpZyGd0yCVebx86hZW_ib-zpNFzDSjHEbN8XEc-pqZUIVfPDVlKN8Bp0GfryyWFreTAskO-9VABMjzLW9zkQmwa3Kv8shqGjR95TDKeO5hH0iT17u_F0dq1heLSSN-yIS8E5v1KaKceCKuwzAnX5mJ0" />
            </div>
          </div>
        </header>

        {/* Canvas */}
        <main className="flex-grow p-10 space-y-8">
          {/* Page Header */}
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-3xl font-black font-headline tracking-tight text-on-surface">Bài viết chờ duyệt</h2>
            <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold">12 bài mới</span>
          </div>

          {/* Filter Bar */}
          <section className="bg-surface-container-low p-6 rounded-xl flex flex-wrap items-center gap-4 border-none shadow-sm">
            <div className="flex-grow min-w-[300px] relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
              <input className="w-full bg-surface-container border-none rounded-lg pl-12 pr-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:ring-1 focus:ring-primary/30 transition-all" placeholder="Tìm theo tiêu đề hoặc tác giả..." type="text" />
            </div>

            <div className="relative min-w-[160px]">
              <select className="w-full bg-surface-container border-none rounded-lg px-4 py-3 text-sm text-on-surface appearance-none focus:ring-1 focus:ring-primary/30">
                <option>Tất cả chủ đề</option>
                <option>Luật giao thông</option>
                <option>Kinh nghiệm lái xe</option>
                <option>Biển báo</option>
                <option>Khác</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-sm">expand_more</span>
            </div>

            <div className="relative min-w-[160px]">
              <select className="w-full bg-surface-container border-none rounded-lg px-4 py-3 text-sm text-on-surface appearance-none focus:ring-1 focus:ring-primary/30">
                <option>Chờ duyệt</option>
                <option>Đã duyệt</option>
                <option>Đã từ chối</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-sm">expand_more</span>
            </div>

            <button className="bg-primary hover:bg-primary-dim text-on-primary font-bold py-3 px-8 rounded-lg text-sm transition-all active:scale-95 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">filter_alt</span>
              Tìm kiếm
            </button>
          </section>

          {/* Table Section */}
          <div className="bg-surface-container-low rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container/50">
                  <th className="px-6 py-4 text-[11px] font-black text-on-surface-variant uppercase tracking-widest">STT</th>
                  <th className="px-6 py-4 text-[11px] font-black text-on-surface-variant uppercase tracking-widest">Tiêu đề</th>
                  <th className="px-6 py-4 text-[11px] font-black text-on-surface-variant uppercase tracking-widest">Tác giả</th>
                  <th className="px-6 py-4 text-[11px] font-black text-on-surface-variant uppercase tracking-widest">Chủ đề</th>
                  <th className="px-6 py-4 text-[11px] font-black text-on-surface-variant uppercase tracking-widest">Ngày gửi</th>
                  <th className="px-6 py-4 text-[11px] font-black text-on-surface-variant uppercase tracking-widest">Trạng thái</th>
                  <th className="px-6 py-4 text-[11px] font-black text-on-surface-variant uppercase tracking-widest text-right">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">01</td>
                  <td className="px-6 py-5 text-sm font-bold text-on-surface">Kỹ thuật lùi chuồng dọc trong 3 bước</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Nguyễn Văn An</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Kinh nghiệm lái xe</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">12/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full bg-tertiary-container/30 text-tertiary-fixed text-[10px] font-bold uppercase tracking-wider">Chờ duyệt</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="px-4 py-1.5 border border-primary/40 text-primary text-xs font-bold rounded hover:bg-primary/10 transition-all active:scale-95">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">02</td>
                  <td className="px-6 py-5 text-sm font-bold text-on-surface">Phân biệt các loại biển báo cấm mới nhất 2024</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Trần Thị Hoa</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Biển báo</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">11/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full bg-error-container/30 text-error-dim text-[10px] font-bold uppercase tracking-wider">Đã từ chối</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="px-4 py-1.5 border border-primary/40 text-primary text-xs font-bold rounded hover:bg-primary/10 transition-all active:scale-95">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">03</td>
                  <td className="px-6 py-5 text-sm font-bold text-on-surface">Mẹo nhớ 600 câu hỏi luật giao thông</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Lê Minh Tâm</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Luật giao thông</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">10/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full bg-primary-container/30 text-primary-dim text-[10px] font-bold uppercase tracking-wider">Đã duyệt</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="px-4 py-1.5 border border-primary/40 text-primary text-xs font-bold rounded hover:bg-primary/10 transition-all active:scale-95">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">04</td>
                  <td className="px-6 py-5 text-sm font-bold text-on-surface">Xử lý tình huống khi xe mất phanh trên đèo</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Phạm Duy Mạnh</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Kinh nghiệm lái xe</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">09/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full bg-tertiary-container/30 text-tertiary-fixed text-[10px] font-bold uppercase tracking-wider">Chờ duyệt</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="px-4 py-1.5 border border-primary/40 text-primary text-xs font-bold rounded hover:bg-primary/10 transition-all active:scale-95">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 5 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">05</td>
                  <td className="px-6 py-5 text-sm font-bold text-on-surface">Hướng dẫn sử dụng phanh tay điện tử đúng cách</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Hoàng Kim Yến</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Kinh nghiệm lái xe</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">08/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full bg-tertiary-container/30 text-tertiary-fixed text-[10px] font-bold uppercase tracking-wider">Chờ duyệt</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="px-4 py-1.5 border border-primary/40 text-primary text-xs font-bold rounded hover:bg-primary/10 transition-all active:scale-95">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 6 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">06</td>
                  <td className="px-6 py-5 text-sm font-bold text-on-surface">Quy định mới về nồng độ cồn khi lái xe 2024</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Vũ Anh Tuấn</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Luật giao thông</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">08/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full bg-primary-container/30 text-primary-dim text-[10px] font-bold uppercase tracking-wider">Đã duyệt</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="px-4 py-1.5 border border-primary/40 text-primary text-xs font-bold rounded hover:bg-primary/10 transition-all active:scale-95">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 7 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">07</td>
                  <td className="px-6 py-5 text-sm font-bold text-on-surface">Top 5 sai lầm khi lái xe số tự động cho người mới</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Đặng Thu Thảo</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Kinh nghiệm lái xe</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">07/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full bg-tertiary-container/30 text-tertiary-fixed text-[10px] font-bold uppercase tracking-wider">Chờ duyệt</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="px-4 py-1.5 border border-primary/40 text-primary text-xs font-bold rounded hover:bg-primary/10 transition-all active:scale-95">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 8 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">08</td>
                  <td className="px-6 py-5 text-sm font-bold text-on-surface">Cách quan sát gương chiếu hậu hiệu quả nhất</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Bùi Tiến Dũng</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Kinh nghiệm lái xe</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">07/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full bg-error-container/30 text-error-dim text-[10px] font-bold uppercase tracking-wider">Đã từ chối</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="px-4 py-1.5 border border-primary/40 text-primary text-xs font-bold rounded hover:bg-primary/10 transition-all active:scale-95">Xem chi tiết</button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination */}
            <div className="bg-[#111827] px-6 py-4 flex items-center justify-between">
              <p className="text-xs text-on-surface-variant">Hiển thị 8 trong số 45 bài viết</p>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-xs font-bold">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container text-on-surface-variant hover:text-on-surface text-xs font-bold">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container text-on-surface-variant hover:text-on-surface text-xs font-bold">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer / Branding */}
        <footer className="p-8 mt-auto text-center border-t border-outline-variant/10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant opacity-40">The Instructor’s Atelier © 2024 Editorial Suite</p>
        </footer>
      </div>
    </div>
  );
};

export default PendingPosts;
