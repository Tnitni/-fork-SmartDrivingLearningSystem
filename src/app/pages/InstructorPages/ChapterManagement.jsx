import React from 'react';

const ChapterManagement = () => {
  return (
    <div className="bg-background text-on-surface selection:bg-primary/30 min-h-screen">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] z-50 bg-[#081328] flex flex-col py-8 px-0 font-['Be_Vietnam_Pro'] text-sm tracking-[0.01em] uppercase font-medium">
        <div className="px-8 mb-10">
          <h2 className="text-xl font-bold text-[#dde5ff] tracking-tight mb-1">The Instructor’s Atelier</h2>
          <p className="text-[10px] text-on-surface-variant tracking-widest opacity-60 uppercase">Digital Curator</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center py-3 px-8 text-[#95abde] opacity-80 hover:bg-[#091935] hover:text-[#dde5ff] transition-colors scale-100 active:scale-[0.98] duration-200" href="#">
            Trang chủ
          </a>
          <a className="flex items-center py-3 px-8 text-[#95abde] opacity-80 hover:bg-[#091935] hover:text-[#dde5ff] transition-colors scale-100 active:scale-[0.98] duration-200" href="#">
            Diễn đàn
          </a>
          <a className="flex items-center py-3 px-8 text-[#95abde] opacity-80 hover:bg-[#091935] hover:text-[#dde5ff] transition-colors scale-100 active:scale-[0.98] duration-200" href="#">
            Kiểm duyệt & Báo cáo
          </a>
          {/* Active State: Đào tạo lý thuyết */}
          <a className="flex items-center py-3 px-8 font-bold text-[#dde5ff] border-l-2 border-[#bdc7db] pl-8 transition-all bg-[#091935]/50" href="#">
            Đào tạo lý thuyết
          </a>
          <a className="flex items-center py-3 px-8 text-[#95abde] opacity-80 hover:bg-[#091935] hover:text-[#dde5ff] transition-colors scale-100 active:scale-[0.98] duration-200" href="#">
            Đào tạo mô phỏng
          </a>
          <a className="flex items-center py-3 px-8 text-[#95abde] opacity-80 hover:bg-[#091935] hover:text-[#dde5ff] transition-colors scale-100 active:scale-[0.98] duration-200" href="#">
            Bằng lái & Phương tiện
          </a>
        </nav>
        <div className="px-8 mt-auto pt-8">
          <div className="flex items-center gap-3 p-3 bg-surface-container rounded-xl">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex-shrink-0">
              <img className="w-full h-full object-cover" data-alt="Professional instructor portrait with a focused expression in a dark studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdaKvB4b8qaKikepTvy0ZQdpzlw31xQN6jSelqX7T7D-xVacCdJSyzwYmQEOwkFXGh19uWj6DEjvQA1V9IGD0oBVMw8PX1TEEQBvVzl7t6Ddoxw4upQ7aoH_z8lOzU2WxRwlUN9z8j0y6mb3YNEfHmDllYbDrmYMzkv-CosaJA28eHu_DNKELSfycHG513ww7rijilmVp_1jlQJPfa7huh3rSELzyH0Asn1yl8EmsS0IM2Rqsdf-wPvmKogtXy5ZU3xn558_IVxI8" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-on-surface truncate">Minh Quân</p>
              <p className="text-[10px] text-on-surface-variant lowercase truncate">quan.instructor@atelier.vn</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[280px] min-h-screen">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 w-[calc(100%-280px)] z-40 bg-[#070e1d]/80 backdrop-blur-xl flex justify-between items-center h-16 px-8 border-b border-[#314774]/20 font-['Be_Vietnam_Pro'] text-sm">
          <div className="flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/10 w-96">
            <span className="material-symbols-outlined text-on-surface-variant text-lg" data-icon="search">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-on-surface-variant/50 w-full" placeholder="Tìm kiếm tài liệu..." type="text" />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="relative text-on-surface-variant hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-[#070e1d]"></span>
              </button>
              <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined" data-icon="settings">settings</span>
              </button>
            </div>
            <div className="h-8 w-px bg-outline-variant/20"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <span className="text-xs font-medium text-on-surface-variant">Quản lý Đào tạo</span>
              <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant/30">
                <img className="w-full h-full object-cover" data-alt="Avatar icon for instructor profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVAH4f_F8WV5iC_-kPh_NMwkFadj7aoi-mHl6-f_6STz6657hMQVJxiQ97VmLoSj6mMBTtWfBhyxwIEaABHwZshvSEjZHdDxuWtkcFtfbkdWtGHGBJKwQB3sKvr8Kd42C9rHkxxNL5myMpDAcci7zmLUYPoomJzM0mrNJo8TYOf4GwU25tn4-0trVSFxPZFvHX0w7y49zDgocXs36imkFJQ3uhoMmZ2z85fJrNMlhB0g56roNQvK42x8v4rD7dZF9mPRvcYwg2Lcc" />
              </div>
            </div>
          </div>
        </header>

        {/* Canvas Area */}
        <div className="pt-24 px-10 pb-12">
          {/* Page Header */}
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-on-surface-variant mb-3">
                <span>Đào tạo lý thuyết</span>
                <span className="material-symbols-outlined text-[12px]" data-icon="chevron_right">chevron_right</span>
                <span className="text-primary font-bold">Chương trình đào tạo</span>
              </nav>
              <h1 className="text-4xl font-extrabold text-on-surface tracking-tight leading-tight">Quản lý Chương</h1>
              <p className="text-on-surface-variant mt-2 text-lg font-light leading-relaxed">Điều chỉnh cấu trúc bài giảng và phân loại tài liệu đào tạo theo từng hạng bằng lái xe chuyên biệt.</p>
            </div>
            <button className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-bold hover:bg-primary-dim active:scale-95 transition-all shadow-lg shadow-primary/10">
              <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
              <span>Thêm chương mới</span>
            </button>
          </div>

          {/* Bento Filter Bar */}
          <div className="grid grid-cols-12 gap-4 mb-8">
            <div className="col-span-12 md:col-span-8 flex gap-4 bg-surface-container-low p-2 rounded-2xl border border-outline-variant/10 shadow-sm">
              <div className="relative group">
                <select className="appearance-none bg-surface-container border-none text-on-surface px-6 pr-10 py-3 rounded-xl focus:ring-2 focus:ring-primary/30 transition-all cursor-pointer min-w-[180px]">
                  <option>Tất cả Hạng bằng</option>
                  <option>Hạng A1</option>
                  <option>Hạng A</option>
                  <option>Hạng B1</option>
                  <option>Hạng B</option>
                  <option>Hạng C</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" data-icon="expand_more">expand_more</span>
              </div>
              <div className="flex-1 flex items-center bg-surface-container rounded-xl px-4 border border-transparent focus-within:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-on-surface-variant mr-3" data-icon="search_check">search_check</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-on-surface-variant/40 w-full" placeholder="Tìm theo tên chương đào tạo..." type="text" />
              </div>
              <button className="bg-surface-container-high hover:bg-surface-variant text-on-surface px-8 py-3 rounded-xl font-semibold transition-colors">
                Tìm kiếm
              </button>
            </div>
            <div className="col-span-12 md:col-span-4 flex items-center justify-end gap-2 px-2">
              <p className="text-xs text-on-surface-variant">Sắp xếp theo:</p>
              <button className="text-xs font-bold text-on-surface flex items-center gap-1 hover:text-primary transition-colors">
                MỚI NHẤT <span className="material-symbols-outlined text-[14px]" data-icon="arrow_downward">arrow_downward</span>
              </button>
            </div>
          </div>

          {/* Content Table Shell */}
          <div className="bg-surface-container-low rounded-[2rem] overflow-hidden shadow-2xl border border-outline-variant/5">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-surface-container/50">
                    <th className="px-8 py-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">STT</th>
                    <th className="px-6 py-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Tên chương</th>
                    <th className="px-6 py-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Bằng lái</th>
                    <th className="px-6 py-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center">Số bài học</th>
                    <th className="px-6 py-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Ngày tạo</th>
                    <th className="px-6 py-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Trạng thái</th>
                    <th className="px-8 py-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container/30 transition-colors group">
                    <td className="px-8 py-5 text-sm font-medium text-on-surface-variant/60">01</td>
                    <td className="px-6 py-5 text-sm font-bold text-on-surface">Luật giao thông đường bộ</td>
                    <td className="px-6 py-5">
                      <span className="px-2 py-1 bg-primary-container/30 text-primary-fixed text-[10px] font-bold rounded-md border border-primary/10">HẠNG B1, B2</span>
                    </td>
                    <td className="px-6 py-5 text-sm text-center text-on-surface">24</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">12/10/2023</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase rounded-full">
                        <span className="w-1 h-1 rounded-full bg-green-400"></span> Hoạt động
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-primary hover:bg-primary/10 transition-colors" title="Xem bài học">
                          <span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span>
                        </button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-colors" title="Chỉnh sửa">
                          <span className="material-symbols-outlined text-lg" data-icon="edit">edit</span>
                        </button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-error hover:bg-error/10 transition-colors" title="Xóa chương">
                          <span className="material-symbols-outlined text-lg" data-icon="delete">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container/30 transition-colors group">
                    <td className="px-8 py-5 text-sm font-medium text-on-surface-variant/60">02</td>
                    <td className="px-6 py-5 text-sm font-bold text-on-surface">Kỹ thuật lái xe ô tô</td>
                    <td className="px-6 py-5">
                      <span className="px-2 py-1 bg-primary-container/30 text-primary-fixed text-[10px] font-bold rounded-md border border-primary/10">HẠNG B2, C</span>
                    </td>
                    <td className="px-6 py-5 text-sm text-center text-on-surface">18</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">15/10/2023</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase rounded-full">
                        <span className="w-1 h-1 rounded-full bg-green-400"></span> Hoạt động
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-primary hover:bg-primary/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-error hover:bg-error/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container/30 transition-colors group">
                    <td className="px-8 py-5 text-sm font-medium text-on-surface-variant/60">03</td>
                    <td className="px-6 py-5 text-sm font-bold text-on-surface">Cấu tạo và sửa chữa thông thường</td>
                    <td className="px-6 py-5">
                      <span className="px-2 py-1 bg-primary-container/30 text-primary-fixed text-[10px] font-bold rounded-md border border-primary/10">TẤT CẢ</span>
                    </td>
                    <td className="px-6 py-5 text-sm text-center text-on-surface">12</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">18/10/2023</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold uppercase rounded-full">
                        <span className="w-1 h-1 rounded-full bg-on-surface-variant"></span> Ẩn
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-primary hover:bg-primary/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-error hover:bg-error/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-surface-container/30 transition-colors group">
                    <td className="px-8 py-5 text-sm font-medium text-on-surface-variant/60">04</td>
                    <td className="px-6 py-5 text-sm font-bold text-on-surface">Nghiệp vụ vận tải</td>
                    <td className="px-6 py-5">
                      <span className="px-2 py-1 bg-primary-container/30 text-primary-fixed text-[10px] font-bold rounded-md border border-primary/10">HẠNG C, D, E</span>
                    </td>
                    <td className="px-6 py-5 text-sm text-center text-on-surface">15</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">20/10/2023</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase rounded-full">
                        <span className="w-1 h-1 rounded-full bg-green-400"></span> Hoạt động
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-primary hover:bg-primary/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-error hover:bg-error/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-surface-container/30 transition-colors group">
                    <td className="px-8 py-5 text-sm font-medium text-on-surface-variant/60">05</td>
                    <td className="px-6 py-5 text-sm font-bold text-on-surface">Đạo đức người lái xe và văn hóa giao thông</td>
                    <td className="px-6 py-5">
                      <span className="px-2 py-1 bg-primary-container/30 text-primary-fixed text-[10px] font-bold rounded-md border border-primary/10">TẤT CẢ</span>
                    </td>
                    <td className="px-6 py-5 text-sm text-center text-on-surface">10</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">22/10/2023</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase rounded-full">
                        <span className="w-1 h-1 rounded-full bg-green-400"></span> Hoạt động
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-primary hover:bg-primary/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-error hover:bg-error/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 6 */}
                  <tr className="hover:bg-surface-container/30 transition-colors group">
                    <td className="px-8 py-5 text-sm font-medium text-on-surface-variant/60">06</td>
                    <td className="px-6 py-5 text-sm font-bold text-on-surface">Phòng chống cháy nổ & Cứu nạn</td>
                    <td className="px-6 py-5">
                      <span className="px-2 py-1 bg-primary-container/30 text-primary-fixed text-[10px] font-bold rounded-md border border-primary/10">HẠNG C, D</span>
                    </td>
                    <td className="px-6 py-5 text-sm text-center text-on-surface">06</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">25/10/2023</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold uppercase rounded-full">
                        <span className="w-1 h-1 rounded-full bg-on-surface-variant"></span> Ẩn
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-primary hover:bg-primary/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-error hover:bg-error/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 7 */}
                  <tr className="hover:bg-surface-container/30 transition-colors group">
                    <td className="px-8 py-5 text-sm font-medium text-on-surface-variant/60">07</td>
                    <td className="px-6 py-5 text-sm font-bold text-on-surface">Biển báo và sa hình cơ bản</td>
                    <td className="px-6 py-5">
                      <span className="px-2 py-1 bg-primary-container/30 text-primary-fixed text-[10px] font-bold rounded-md border border-primary/10">HẠNG A1, A2</span>
                    </td>
                    <td className="px-6 py-5 text-sm text-center text-on-surface">30</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">28/10/2023</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase rounded-full">
                        <span className="w-1 h-1 rounded-full bg-green-400"></span> Hoạt động
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-primary hover:bg-primary/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-error hover:bg-error/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 8 */}
                  <tr className="hover:bg-surface-container/30 transition-colors group">
                    <td className="px-8 py-5 text-sm font-medium text-on-surface-variant/60">08</td>
                    <td className="px-6 py-5 text-sm font-bold text-on-surface">Luật Giao thông nâng cao</td>
                    <td className="px-6 py-5">
                      <span className="px-2 py-1 bg-primary-container/30 text-primary-fixed text-[10px] font-bold rounded-md border border-primary/10">HẠNG D, E</span>
                    </td>
                    <td className="px-6 py-5 text-sm text-center text-on-surface">20</td>
                    <td className="px-6 py-5 text-sm text-on-surface-variant">01/11/2023</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase rounded-full">
                        <span className="w-1 h-1 rounded-full bg-green-400"></span> Hoạt động
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-primary hover:bg-primary/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="visibility">visibility</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
                        <button className="p-2 rounded-lg border border-outline-variant/30 text-error hover:bg-error/10 transition-colors"><span className="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination (Design System compliant) */}
            <div className="px-8 py-6 bg-surface-container flex items-center justify-between">
              <p className="text-xs text-on-surface-variant">Hiển thị <span className="text-on-surface font-bold">1 - 8</span> trong số <span className="text-on-surface font-bold">42</span> chương đào tạo</p>
              <div className="flex items-center gap-1">
                <button className="p-2 text-on-surface-variant hover:text-on-surface disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined" data-icon="first_page">first_page</span>
                </button>
                <button className="p-2 text-on-surface-variant hover:text-on-surface disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                </button>
                <div className="flex items-center mx-2 gap-1">
                  <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-bold text-xs">1</button>
                  <button className="w-8 h-8 rounded-lg hover:bg-surface-variant text-on-surface text-xs transition-colors">2</button>
                  <button className="w-8 h-8 rounded-lg hover:bg-surface-variant text-on-surface text-xs transition-colors">3</button>
                  <span className="text-on-surface-variant mx-1">...</span>
                  <button className="w-8 h-8 rounded-lg hover:bg-surface-variant text-on-surface text-xs transition-colors">6</button>
                </div>
                <button className="p-2 text-on-surface-variant hover:text-on-surface">
                  <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                </button>
                <button className="p-2 text-on-surface-variant hover:text-on-surface">
                  <span className="material-symbols-outlined" data-icon="last_page">last_page</span>
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Insights Grid (Optional UI Flourish) */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
                </div>
                <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded">+4.2%</span>
              </div>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Tổng bài học</p>
              <h3 className="text-3xl font-extrabold text-on-surface mt-1">1,284</h3>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-surface-variant rounded-xl flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant bg-surface-variant px-2 py-0.5 rounded">ỔN ĐỊNH</span>
              </div>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Chương hoạt động</p>
              <h3 className="text-3xl font-extrabold text-on-surface mt-1">36</h3>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-error/10 rounded-xl flex items-center justify-center text-error">
                  <span className="material-symbols-outlined" data-icon="warning">warning</span>
                </div>
                <span className="text-[10px] font-bold text-error bg-error/10 px-2 py-0.5 rounded">CẦN XEM LẠI</span>
              </div>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Chương đang ẩn</p>
              <h3 className="text-3xl font-extrabold text-on-surface mt-1">06</h3>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Tooltip for context */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined" data-icon="help_outline" data-weight="fill">help_outline</span>
        </button>
      </div>
    </div>
  );
};

export default ChapterManagement;
