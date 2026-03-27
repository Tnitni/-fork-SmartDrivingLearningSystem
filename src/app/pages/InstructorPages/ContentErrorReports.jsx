import React from 'react';

const ContentErrorReports = () => {
  return (
    <div className="flex min-h-screen overflow-hidden bg-[#070e1d] text-[#dde5ff] font-['Inter']">
      {/* SideNavBar (The Anchor) */}
      <aside className="fixed left-0 top-0 h-full w-[280px] bg-[#081328] flex flex-col py-8 gap-y-2 overflow-y-auto z-50">
        <div className="px-8 mb-10">
          <h1 className="text-lg font-bold text-[#dde5ff] font-headline">Atelier CMS</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#95abde] font-label mt-1">Hệ thống Giảng viên</p>
        </div>
        <nav className="flex flex-col gap-y-1">
          <div className="px-8 py-2 text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer font-headline title-sm uppercase tracking-wider">Trang chủ</div>

          <div className="mt-4 px-8 mb-2 text-[11px] font-bold text-[#5f75a5] uppercase tracking-widest">DIỄN ĐÀN</div>
          <div className="px-8 py-2 text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer font-headline title-sm uppercase tracking-wider">Tạo bài viết</div>
          <div className="px-8 py-2 text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer font-headline title-sm uppercase tracking-wider">Bài viết của tôi</div>

          <div className="mt-4 px-8 mb-2 text-[11px] font-bold text-[#5f75a5] uppercase tracking-widest">KIỂM DUYỆT & BÁO CÁO</div>
          <div className="px-8 py-2 text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer font-headline title-sm uppercase tracking-wider">Bài viết chờ duyệt</div>
          <div className="px-8 py-2 text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer font-headline title-sm uppercase tracking-wider">Báo cáo cộng đồng</div>
          {/* Active State: Báo cáo lỗi nội dung */}
          <div className="px-8 py-2 font-bold text-[#dde5ff] border-l-2 border-[#bdc7db] pl-4 bg-[#091935]/50 cursor-pointer font-headline title-sm uppercase tracking-wider">Báo cáo lỗi nội dung</div>
          <div className="px-8 py-2 text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer font-headline title-sm uppercase tracking-wider">Duyệt yêu cầu thay đổi</div>

          <div className="mt-4 px-8 mb-2 text-[11px] font-bold text-[#5f75a5] uppercase tracking-widest">ĐÀO TẠO LÝ THUYẾT</div>
          <div className="px-8 py-2 text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer font-headline title-sm uppercase tracking-wider">Quản lý Chương</div>
          <div className="px-8 py-2 text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer font-headline title-sm uppercase tracking-wider">Quản lý Bài học</div>
          <div className="px-8 py-2 text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer font-headline title-sm uppercase tracking-wider">Ngân hàng Câu hỏi</div>
          <div className="px-8 py-2 text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer font-headline title-sm uppercase tracking-wider">Bài thi thử</div>
          <div className="px-8 py-2 text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer font-headline title-sm uppercase tracking-wider">Ngân hàng Biển báo</div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[280px] flex-1 flex flex-col h-screen overflow-hidden">
        {/* TopNavBar */}
        <header className="bg-[#070e1d] flex justify-between items-center w-full px-8 py-4 z-50 tonal-transition">
          <div className="flex items-center gap-4">
            <span className="font-headline headline-md text-[#dde5ff] font-bold">Báo cáo lỗi nội dung</span>
            <span className="bg-error-container text-on-error-container px-2 py-0.5 rounded-full text-xs font-bold tracking-tighter">08</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <span className="material-symbols-outlined text-[#95abde] absolute left-3 top-1/2 -translate-y-1/2 text-lg">notifications</span>
              <div className="absolute top-2 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-[#070e1d]"></div>
            </div>
            <span className="material-symbols-outlined text-[#95abde] hover:text-[#dde5ff] cursor-pointer transition-colors">settings</span>
            <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/20">
              <img className="w-10 h-10 rounded-full border border-primary/20 bg-surface-container" data-alt="Professional portrait of a male instructor with a friendly expression, wearing a dark blue blazer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwSuIhHxjhhUxhIzYNhTUjypyRh305mO5gnzAL2ijTsywrx7vJTMHJCOTQdbVcVYknq4v3LrS0UmG0VEIly6x681UWH-MrqR-Vxf9iETnO_ZFI2IKFuohCg-eG7zBQ_G0kFHHSbR7lJ4Aig68B6JjRV54FcxQVgvG4nvGw5WOik7phs4QxQNk4WvljXJ5lb8oEA4EyvELKwH3xITM3ks7pioJ7h3-x3me1IkXzE-3U7jIe6BAUncyaiuduQxqHVq62TY8lxd5tEyE" />
              <div className="hidden lg:block">
                <p className="text-sm font-bold text-[#dde5ff]">Trần Minh Quân</p>
                <p className="text-[10px] text-[#95abde]">Quản trị viên hệ thống</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <section className="flex-1 overflow-y-auto px-8 py-6 space-y-8 bg-surface">
          {/* Filter Bar (Editorial Style) */}
          <div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
            <div className="flex flex-wrap items-end gap-6">
              <div className="flex-1 min-w-[300px] space-y-2">
                <label className="text-[11px] font-bold text-[#95abde] uppercase tracking-widest pl-1">Tìm kiếm</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5f75a5] group-focus-within:text-primary transition-colors">search</span>
                  <input className="w-full bg-surface-container border-none rounded-lg pl-12 pr-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-[#5f75a5]" placeholder="Tìm theo tiêu đề báo cáo..." type="text" />
                </div>
              </div>
              <div className="w-48 space-y-2">
                <label className="text-[11px] font-bold text-[#95abde] uppercase tracking-widest pl-1">Loại nội dung</label>
                <select className="w-full bg-surface-container border-none rounded-lg px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary/30 appearance-none">
                  <option>Tất cả</option>
                  <option>Câu hỏi lý thuyết</option>
                  <option>Mô phỏng</option>
                </select>
              </div>
              <div className="w-48 space-y-2">
                <label className="text-[11px] font-bold text-[#95abde] uppercase tracking-widest pl-1">Trạng thái</label>
                <select className="w-full bg-surface-container border-none rounded-lg px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary/30 appearance-none">
                  <option>Tất cả trạng thái</option>
                  <option>Chờ xử lý</option>
                  <option>Đã xử lý</option>
                </select>
              </div>
              <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/10 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">filter_list</span>
                Tìm kiếm
              </button>
            </div>
          </div>

          {/* Data Table Module */}
          <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container/50">
                  <th className="px-6 py-4 label-md text-on-surface-variant uppercase tracking-[0.1em] text-[11px] font-bold">STT</th>
                  <th className="px-6 py-4 label-md text-on-surface-variant uppercase tracking-[0.1em] text-[11px] font-bold">Tiêu đề báo cáo</th>
                  <th className="px-6 py-4 label-md text-on-surface-variant uppercase tracking-[0.1em] text-[11px] font-bold">Người báo cáo</th>
                  <th className="px-6 py-4 label-md text-on-surface-variant uppercase tracking-[0.1em] text-[11px] font-bold">Loại nội dung</th>
                  <th className="px-6 py-4 label-md text-on-surface-variant uppercase tracking-[0.1em] text-[11px] font-bold">Ngày gửi</th>
                  <th className="px-6 py-4 label-md text-on-surface-variant uppercase tracking-[0.1em] text-[11px] font-bold">Trạng thái</th>
                  <th className="px-6 py-4 label-md text-on-surface-variant uppercase tracking-[0.1em] text-[11px] font-bold text-right">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-[#5f75a5]">01</td>
                  <td className="px-6 py-5 text-sm font-semibold text-on-surface">Lỗi hiển thị hình ảnh câu hỏi 452</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Nguyễn Văn A</td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-surface-container-highest text-primary font-bold uppercase tracking-wider">Lý thuyết</span>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">12/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-error-container/20 text-error">Chờ xử lý</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-primary border border-primary/30 hover:bg-primary/10 px-4 py-1.5 rounded-lg text-xs font-bold transition-all">Xử lý</button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-[#5f75a5]">02</td>
                  <td className="px-6 py-5 text-sm font-semibold text-on-surface">Sai đáp án tình huống mô phỏng 23</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Lê Thị B</td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant font-bold uppercase tracking-wider">Mô phỏng</span>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">11/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">Đã xử lý</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-[#5f75a5] border border-[#5f75a5]/30 hover:bg-surface-container-high px-4 py-1.5 rounded-lg text-xs font-bold transition-all">Xem lại</button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-[#5f75a5]">03</td>
                  <td className="px-6 py-5 text-sm font-semibold text-on-surface">Nội dung câu 128 không rõ ràng</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Phạm Minh C</td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-surface-container-highest text-primary font-bold uppercase tracking-wider">Lý thuyết</span>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">10/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-error-container/20 text-error">Chờ xử lý</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-primary border border-primary/30 hover:bg-primary/10 px-4 py-1.5 rounded-lg text-xs font-bold transition-all">Xử lý</button>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-[#5f75a5]">04</td>
                  <td className="px-6 py-5 text-sm font-semibold text-on-surface">Video mô phỏng bị giật lag</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Trần Hoàng D</td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant font-bold uppercase tracking-wider">Mô phỏng</span>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">09/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-error-container/20 text-error">Chờ xử lý</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-primary border border-primary/30 hover:bg-primary/10 px-4 py-1.5 rounded-lg text-xs font-bold transition-all">Xử lý</button>
                  </td>
                </tr>
                {/* Row 5 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-[#5f75a5]">05</td>
                  <td className="px-6 py-5 text-sm font-semibold text-on-surface">Sai biển báo trong câu hỏi 55</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Hoàng Văn E</td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-surface-container-highest text-primary font-bold uppercase tracking-wider">Lý thuyết</span>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">08/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">Đã xử lý</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-[#5f75a5] border border-[#5f75a5]/30 hover:bg-surface-container-high px-4 py-1.5 rounded-lg text-xs font-bold transition-all">Xem lại</button>
                  </td>
                </tr>
                {/* Row 6 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-[#5f75a5]">06</td>
                  <td className="px-6 py-5 text-sm font-semibold text-on-surface">Lỗi chính tả câu hỏi 600</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Vũ Thu F</td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-surface-container-highest text-primary font-bold uppercase tracking-wider">Lý thuyết</span>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">07/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-error-container/20 text-error">Chờ xử lý</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-primary border border-primary/30 hover:bg-primary/10 px-4 py-1.5 rounded-lg text-xs font-bold transition-all">Xử lý</button>
                  </td>
                </tr>
                {/* Row 7 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-[#5f75a5]">07</td>
                  <td className="px-6 py-5 text-sm font-semibold text-on-surface">Thời điểm gắn cờ tình huống 02 sai</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Đặng Văn G</td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant font-bold uppercase tracking-wider">Mô phỏng</span>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">06/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-error-container/20 text-error">Chờ xử lý</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-primary border border-primary/30 hover:bg-primary/10 px-4 py-1.5 rounded-lg text-xs font-bold transition-all">Xử lý</button>
                  </td>
                </tr>
                {/* Row 8 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-6 py-5 text-sm font-medium text-[#5f75a5]">08</td>
                  <td className="px-6 py-5 text-sm font-semibold text-on-surface">Thiếu phương án trả lời câu 331</td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">Mai Anh H</td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-surface-container-highest text-primary font-bold uppercase tracking-wider">Lý thuyết</span>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">05/10/2023</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-error-container/20 text-error">Chờ xử lý</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-primary border border-primary/30 hover:bg-primary/10 px-4 py-1.5 rounded-lg text-xs font-bold transition-all">Xử lý</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination Module */}
          <div className="flex items-center justify-between pb-10">
            <p className="text-sm text-on-surface-variant font-label">Hiển thị <span className="text-on-surface font-bold">1 - 8</span> trong tổng số <span className="text-on-surface font-bold">124</span> báo cáo</p>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-low text-[#5f75a5] hover:text-primary hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold text-sm">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-low text-[#95abde] hover:bg-surface-container transition-all font-bold text-sm">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-low text-[#95abde] hover:bg-surface-container transition-all font-bold text-sm">3</button>
              <span className="text-[#5f75a5] px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-low text-[#95abde] hover:bg-surface-container transition-all font-bold text-sm">16</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-low text-[#5f75a5] hover:text-primary hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Success/Notification Toast (Glassmorphism) */}
      <div className="fixed bottom-8 right-8 z-[100] bg-surface-container-highest/80 backdrop-blur-xl border border-outline/15 rounded-xl px-6 py-4 flex items-center gap-4 shadow-2xl max-w-md">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-primary" data-weight="fill">check_circle</span>
        </div>
        <div>
          <p className="text-sm font-bold text-on-surface">Hệ thống ổn định</p>
          <p className="text-xs text-on-surface-variant">Tất cả dữ liệu báo cáo đã được đồng bộ.</p>
        </div>
        <button className="ml-auto text-[#5f75a5] hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-sm">close</span>
        </button>
      </div>
    </div>
  );
};

export default ContentErrorReports;
