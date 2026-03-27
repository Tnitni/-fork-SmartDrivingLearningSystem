import React from 'react';

const ChapterManagementAddModal = () => {
  return (
    <div className="overflow-hidden bg-[#070e1d] text-[#dde5ff] font-['Inter']">
      {/* SideNavBar Anchor */}
      <aside className="fixed left-0 top-0 h-full w-[280px] z-50 bg-[#081328] flex flex-col py-8 px-0 font-['Be_Vietnam_Pro'] text-sm tracking-[0.01em] uppercase font-medium">
        <div className="px-8 mb-12">
          <h1 className="text-xl font-bold text-[#dde5ff] tracking-tight">The Instructor’s Atelier</h1>
          <p className="text-[10px] text-[#95abde] tracking-[0.2em] mt-1">DIGITAL CURATOR</p>
        </div>
        <nav className="flex-1 flex flex-col space-y-1">
          <a className="group flex items-center py-3 text-[#95abde] pl-4 opacity-80 hover:bg-[#091935] hover:text-[#dde5ff] transition-colors scale-100 active:scale-[0.98] duration-200" href="#">
            <span>Trang chủ</span>
          </a>
          <a className="group flex items-center py-3 text-[#95abde] pl-4 opacity-80 hover:bg-[#091935] hover:text-[#dde5ff] transition-colors scale-100 active:scale-[0.98] duration-200" href="#">
            <span>Diễn đàn</span>
          </a>
          <a className="group flex items-center py-3 text-[#95abde] pl-4 opacity-80 hover:bg-[#091935] hover:text-[#dde5ff] transition-colors scale-100 active:scale-[0.98] duration-200" href="#">
            <span>Kiểm duyệt & Báo cáo</span>
          </a>
          {/* Active State: Đào tạo lý thuyết */}
          <a className="group flex items-center py-3 font-bold text-[#dde5ff] border-l-2 border-[#bdc7db] pl-4 transition-all hover:bg-[#091935] scale-100 active:scale-[0.98] duration-200" href="#">
            <span>Đào tạo lý thuyết</span>
          </a>
          <a className="group flex items-center py-3 text-[#95abde] pl-4 opacity-80 hover:bg-[#091935] hover:text-[#dde5ff] transition-colors scale-100 active:scale-[0.98] duration-200" href="#">
            <span>Đào tạo mô phỏng</span>
          </a>
          <a className="group flex items-center py-3 text-[#95abde] pl-4 opacity-80 hover:bg-[#091935] hover:text-[#dde5ff] transition-colors scale-100 active:scale-[0.98] duration-200" href="#">
            <span>Bằng lái & Phương tiện</span>
          </a>
        </nav>
        <div className="mt-auto px-8 pt-8 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
            <img alt="Instructor Portrait" className="w-full h-full object-cover" data-alt="close-up portrait of an experienced male instructor with spectacles and professional attire in a soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg3C2i_HUbuvEUKafZOkmbLBn7ocy8YlEV6VbqgIaffFfyxgrC9QHeFJTSHT99-WAkoN4lAdYvFLiRRMMVZcw2goijF5RX0ZSkidhjfkWzzIMsmCO_Qc-J3ExUg6dGSHBa7unI6nKNW2rjhGXdy7sA08-EFiA-n__p2A_CYMVaClfeNu-ZvnY4LWCNPXmf6u6WR2cbinxMckt1t2XS77WDTObK3BJGKuKT0JUK_qWYkHFnzXhTMvta6HTMYeaPetql_jScg5rYrgo" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#dde5ff]">Minh Tuấn</p>
            <p className="text-[10px] text-[#95abde]">QUẢN TRỊ VIÊN</p>
          </div>
        </div>
      </aside>

      {/* TopNavBar Anchor */}
      <header className="fixed top-0 right-0 w-[calc(100%-280px)] z-40 bg-[#070e1d]/80 backdrop-blur-xl flex justify-between items-center h-16 px-8 border-b border-[#314774]/20 font-['Be_Vietnam_Pro'] text-sm">
        <div className="flex items-center gap-4 w-1/3">
          <div className="relative w-full max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
            <input className="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-1 focus:ring-outline-variant transition-all" placeholder="Tìm kiếm tài liệu, chương học..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button className="relative text-[#bdc7db] hover:text-[#dde5ff] transition-colors cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-[#070e1d]"></span>
            </button>
            <button className="text-[#bdc7db] hover:text-[#dde5ff] transition-colors cursor-pointer">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          <div className="h-8 w-px bg-[#314774]/30"></div>
          <div className="flex items-center gap-3">
            <span className="font-medium text-[#dde5ff]">Hệ thống Quản lý</span>
            <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-sm">school</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-[280px] pt-24 px-10 pb-12 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface mb-2">Quản lý Chương</h2>
                <p className="text-on-surface-variant">Cấu trúc hóa nội dung giảng dạy theo các hạng bằng lái.</p>
              </div>
              <button className="px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl flex items-center gap-2 hover:opacity-90 transition-all active:scale-95">
                <span className="material-symbols-outlined">add</span>
                Thêm chương mới
              </button>
            </div>
          </header>

          {/* Bento-style Stats */}
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-4 p-8 bg-surface-container-low rounded-xl">
              <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-4">Tổng số chương</p>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold font-headline text-on-surface">14</span>
                <span className="text-primary-dim mb-1 font-medium">+2 tháng này</span>
              </div>
            </div>
            <div className="col-span-8 p-8 bg-surface-container rounded-xl flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-4">Phân bổ hạng lái</p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-2xl font-bold text-on-surface">04</p>
                    <p className="text-[10px] text-on-surface-variant uppercase">Hạng B1/B2</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-on-surface">06</p>
                    <p className="text-[10px] text-on-surface-variant uppercase">Hạng A1/A2</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-on-surface">04</p>
                    <p className="text-[10px] text-on-surface-variant uppercase">Hạng C/D/E</p>
                  </div>
                </div>
              </div>
              <div className="h-full w-32 relative">
                {/* Decorative visual representation of data */}
                <div className="absolute inset-0 flex items-center justify-around gap-1">
                  <div className="w-2 h-[60%] bg-primary rounded-full"></div>
                  <div className="w-2 h-[85%] bg-outline rounded-full"></div>
                  <div className="w-2 h-[45%] bg-primary-dim rounded-full"></div>
                  <div className="w-2 h-[70%] bg-surface-bright rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-surface-container-low rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container/30">
                  <th className="py-5 px-8 text-[11px] font-bold tracking-widest text-on-surface-variant uppercase">Tên Chương</th>
                  <th className="py-5 px-8 text-[11px] font-bold tracking-widest text-on-surface-variant uppercase">Hạng Bằng</th>
                  <th className="py-5 px-8 text-[11px] font-bold tracking-widest text-on-surface-variant uppercase">Bài học</th>
                  <th className="py-5 px-8 text-[11px] font-bold tracking-widest text-on-surface-variant uppercase">Trạng thái</th>
                  <th className="py-5 px-8 text-[11px] font-bold tracking-widest text-on-surface-variant uppercase">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm">auto_stories</span>
                      </div>
                      <span className="font-medium">Khái niệm & Quy tắc giao thông</span>
                    </div>
                  </td>
                  <td className="py-5 px-8 text-on-surface-variant">Tất cả các hạng</td>
                  <td className="py-5 px-8 text-on-surface-variant">24 bài</td>
                  <td className="py-5 px-8">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full">Hoạt động</span>
                  </td>
                  <td className="py-5 px-8">
                    <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm">construction</span>
                      </div>
                      <span className="font-medium">Kỹ thuật lái xe ô tô</span>
                    </div>
                  </td>
                  <td className="py-5 px-8 text-on-surface-variant">Hạng B1, B2</td>
                  <td className="py-5 px-8 text-on-surface-variant">18 bài</td>
                  <td className="py-5 px-8">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full">Hoạt động</span>
                  </td>
                  <td className="py-5 px-8">
                    <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm">settings_input_component</span>
                      </div>
                      <span className="font-medium">Cấu tạo & Sửa chữa thông thường</span>
                    </div>
                  </td>
                  <td className="py-5 px-8 text-on-surface-variant">Hạng B2, C</td>
                  <td className="py-5 px-8 text-on-surface-variant">12 bài</td>
                  <td className="py-5 px-8">
                    <span className="px-3 py-1 bg-on-surface-variant/10 text-on-surface-variant text-[10px] font-bold uppercase rounded-full">Nháp</span>
                  </td>
                  <td className="py-5 px-8">
                    <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal Overlay */}
      <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
        {/* Modal Content */}
        <div className="w-full max-w-[520px] bg-[#111827] border border-[#374151] rounded-2xl shadow-[0px_20px_40px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col">
          {/* Modal Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-[#374151]/50">
            <h3 className="text-xl font-bold font-headline text-[#dde5ff]">Thêm chương mới</h3>
            <button className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors text-[#95abde]">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-8 space-y-6">
            {/* Tên chương */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#95abde]">Tên chương</label>
              <input className="w-full bg-[#070e1d] border border-error rounded-xl px-4 py-3 text-[#dde5ff] placeholder:text-[#95abde]/30 focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Nhập tên chương..." type="text" defaultValue="" />
              <p className="text-xs text-error mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">error</span>
                Vui lòng nhập tên chương.
              </p>
            </div>

            {/* Bằng lái */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#95abde]">Bằng lái</label>
              <div className="relative">
                <select className="w-full appearance-none bg-[#070e1d] border border-[#374151] rounded-xl px-4 py-3 text-[#dde5ff] focus:ring-1 focus:ring-primary outline-none transition-all" defaultValue="Hạng B">
                  <option value="Hạng A1">Hạng A1</option>
                  <option value="Hạng A">Hạng A</option>
                  <option value="Hạng B1">Hạng B1</option>
                  <option value="Hạng B">Hạng B</option>
                  <option value="Hạng C">Hạng C</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#95abde] pointer-events-none">expand_more</span>
              </div>
            </div>

            {/* Mô tả */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#95abde]">Mô tả</label>
              <textarea className="w-full bg-[#070e1d] border border-[#374151] rounded-xl px-4 py-3 text-[#dde5ff] placeholder:text-[#95abde]/30 focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Nhập mô tả ngắn về chương..." rows="3"></textarea>
            </div>

            {/* Trạng thái */}
            <div className="flex items-center justify-between pt-2">
              <label className="text-sm font-semibold text-[#95abde]">Trạng thái</label>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-primary">Hoạt động</span>
                <button className="relative w-12 h-6 bg-primary rounded-full transition-colors">
                  <span className="absolute right-1 top-1 w-4 h-4 bg-[#070e1d] rounded-full transition-all"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-8 py-6 bg-[#070e1d]/30 border-t border-[#374151]/50 flex items-center justify-end gap-3">
            <button className="px-6 py-2.5 rounded-xl text-sm font-bold text-[#95abde] hover:bg-white/5 transition-all">Hủy</button>
            <button className="px-8 py-2.5 rounded-xl text-sm font-bold bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-lg shadow-blue-500/20 transition-all">Lưu</button>
          </div>
        </div>
      </div>

      {/* Decorative Grain Texture */}
      <div className="pointer-events-none fixed inset-0 z-[1000] opacity-[0.03]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_64L46KioY8ba9uhgDdH9jIPx9xtqIHmKQZR9Hs2tf-Uo7XLiNYFcUw9aQbESuHw5t08iSNxAu7926UJ5ziI7tHkfvVcXsxlmM_C_w8QA7m5Lt2ifyL0n2UEUeF6qeSVlZN0M_rg-EWtFPcSpIuq4XJULOgj64MMzpuvVlc9hlkSySqWSGPPmJs9rKNVSguc0G2qVS7elCacBDKkz0BD1LUihML5xeEVPjgDehR53BkYczkeozc-KzF58UFSLfKDX8y7IZRTUKs4')" }}></div>
    </div>
  );
};

export default ChapterManagementAddModal;
