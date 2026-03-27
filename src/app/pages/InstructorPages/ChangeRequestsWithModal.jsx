import React from 'react';

const ChangeRequestsWithModal = () => {
  return (
    <div className="bg-surface text-on-surface antialiased">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-[280px] z-50 bg-[#081328] flex flex-col py-8 px-0 gap-6 font-['Be_Vietnam_Pro'] text-[0.875rem] tracking-[0.01em] antialiased">
        <div className="px-8 mb-4">
          <h1 className="text-lg font-bold text-[#dde5ff] tracking-tight">The Instructor’s Atelier</h1>
          <p className="text-xs text-on-surface-variant/60">The Digital Curator</p>
        </div>
        <nav className="flex flex-col gap-1">
          <a className="font-medium text-[#95abde] pl-4 transition-colors py-3 hover:text-[#dde5ff] hover:bg-[#091935]" href="#">Trang chủ</a>
          <a className="font-medium text-[#95abde] pl-4 transition-colors py-3 hover:text-[#dde5ff] hover:bg-[#091935]" href="#">DIỄN ĐÀN</a>

          {/* Active State: KIỂM DUYỆT & BÁO CÁO corresponds to 'Duyệt yêu cầu thay đổi' intent */}
          <a className="font-bold text-[#dde5ff] border-l-2 border-[#bdc7db] pl-4 transition-all py-3 bg-[#091935]" href="#">KIỂM DUYỆT & BÁO CÁO</a>

          <a className="font-medium text-[#95abde] pl-4 transition-colors py-3 hover:text-[#dde5ff] hover:bg-[#091935]" href="#">ĐÀO TẠO LÝ THUYẾT</a>
          <a className="font-medium text-[#95abde] pl-4 transition-colors py-3 hover:text-[#dde5ff] hover:bg-[#091935]" href="#">ĐÀO TẠO MÔ PHỎNG</a>
          <a className="font-medium text-[#95abde] pl-4 transition-colors py-3 hover:text-[#dde5ff] hover:bg-[#091935]" href="#">BẰNG LÁI & PHƯƠNG TIỆN</a>
        </nav>
      </aside>

      {/* Top Navigation */}
      <header className="fixed top-0 right-0 w-[calc(100%-280px)] z-40 bg-[#070e1d]/80 backdrop-blur-md border-b border-[#314774]/20 flex justify-between items-center h-16 px-8 ml-[280px]">
        <div className="flex items-center gap-4 bg-surface-container rounded-full px-4 py-1.5 w-96">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-full placeholder:text-on-surface-variant/50" placeholder="Tìm kiếm yêu cầu..." type="text" />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors" data-icon="notifications">notifications</span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors" data-icon="settings">settings</span>
          </div>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant/30">
            <img alt="Instructor Profile" className="h-full w-full object-cover" data-alt="Portrait of a professional instructor in a dark suit against a minimalist studio background with soft dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfzVzqrzXIX4XycPx8UOq4V_Bj0v2jaVeEQU5o_NU0jPn1mcKGP1L8DXNjzO80KOlOPikyyqR9juyipaMA2WxHYiwgk6ASgN8npMfY-WLXGjHc7eKYm7wvgVur_PaFhaZfi6rZVdMEPee9lfzvkQMkZb6E-cVci98JkhHf0cns5tGtDQf6Yb8gVxmFxllVdf28Tm9w93YQx9AMAn7_XvtE0Yx8aSAqq-h-nLDKKVAovdtdGKN2JJMiYB5Lj-oLkbhYVVZ2wIzInVg" />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-[280px] pt-24 px-10 pb-12 min-h-screen">
        <header className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-2">Duyệt yêu cầu thay đổi</h2>
          <p className="text-on-surface-variant">Quản lý và phê duyệt các yêu cầu cập nhật nội dung đào tạo từ đội ngũ giảng viên.</p>
        </header>

        {/* Mock List Behind the Modal */}
        <div className="grid gap-4 opacity-40 select-none pointer-events-none">
          <div className="bg-surface-container p-6 rounded-xl flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Cập nhật giáo trình: Thiết kế UI nâng cao - Chương 4</h3>
              <p className="text-sm text-on-surface-variant">Lê Văn Thành • 12/10/2023</p>
            </div>
            <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs rounded-full">Đang chờ</span>
          </div>
          <div className="bg-surface-container p-6 rounded-xl flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Điều chỉnh bài thi: Kỹ thuật lái xe an toàn</h3>
              <p className="text-sm text-on-surface-variant">Nguyễn Minh Tú • 11/10/2023</p>
            </div>
            <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs rounded-full">Đang chờ</span>
          </div>
        </div>

        {/* MODAL OVERLAY */}
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          {/* Modal Container */}
          <div className="bg-[#111827] border border-[#374151] w-full max-w-[700px] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[921px]">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[#374151] flex justify-between items-center">
              <h3 className="text-lg font-bold text-on-surface font-headline uppercase tracking-wide">Chi tiết yêu cầu thay đổi</h3>
              <button className="text-on-surface-variant hover:text-on-surface transition-colors p-1">
                <span className="material-symbols-outlined" data-icon="close">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6">
              <div>
                <h4 className="text-2xl font-extrabold text-[#dde5ff] leading-tight mb-2">Cập nhật giáo trình: Thiết kế UI nâng cao - Chương 4</h4>
                <div className="flex items-center gap-4 text-sm text-on-surface-variant">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]" data-icon="person">person</span>
                    <span>Người gửi: <span className="text-on-surface">Lê Văn Thành</span></span>
                  </div>
                  <span className="text-outline-variant">|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]" data-icon="calendar_today">calendar_today</span>
                    <span>Ngày gửi: <span className="text-on-surface">12/10/2023 14:30</span></span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest">Nội dung yêu cầu</label>
                <textarea className="w-full bg-[#1F2937] border-none rounded-xl p-4 text-on-surface leading-relaxed text-sm h-32 resize-none focus:ring-0" readOnly defaultValue={`Tôi muốn đề xuất cập nhật lại toàn bộ video bài giảng và tài liệu PDF của Chương 4: "Layout & Spacing". Nội dung cũ hiện tại đã lỗi thời do không cập nhật các xu hướng thiết kế Responsive mới nhất và các tính năng Auto Layout mới của Figma.`}></textarea>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest">Hình ảnh đính kèm</label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square rounded-lg overflow-hidden border border-outline-variant/20 group cursor-pointer">
                    <img className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="Screenshot of a modern minimalist dashboard UI design with deep navy tones and clean typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCktKMGjwalbuEXPYxYT43IaAZ42ewrspI5E_M8VBjdVSQmxuKzTn7wEnAZSKUc-AR853b7O9zs2t-0j5WRe8DvSFYwwFIzlxH-VPXrKxv45QSkLyNjsJUaptNYXRqJQH8zRY70Wlo0rGcsLT0uls5_GimOdXedjcOU9Gl3KvmXfWyo_KyCM0HAh3xyxWA6Lg0ja_bG843OzA-liIasBYxYW8rccyGgEEajzf1MVr0pElC3d_IVvtOuZF9HiQSHzNkhGmSpOl1YlvM" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden border border-outline-variant/20 group cursor-pointer">
                    <img className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="Close up of a mobile application interface showing grid systems and spacing guides on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCseu6WzWbEDAwRjmp8h7pm_1MeWFtikDS2pEqvx1HoQm27SFH1EztFGOPOBLtYGm6Ccd4rOu_tAJOlrYOWtuAztDt3h0M86YWC9CcyOkHZ-svlU1Uh2cfVzZq8lV1L7ppJssnKOtQGil5laoQY5y_JZXDY7Vb2lgIOPiNzdiVVBKCm1X7mvcvqscWW2TOS8IO9sTC1jsEtordmnAlHgtlbY3kAzM_6t0DqBrAqEypP9J5YvcNas6U8U7gXtORHcKcuMQSWpm2GdZA" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden border border-outline-variant/20 group cursor-pointer">
                    <img className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="Conceptual UI design layout showcasing responsive breakpoints and fluid spacing systems in a professional editor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMr71V2WhxXc1K3r3TCYsXeNlmCgasKJIMpOQ7LynnK_qeW_iWY9WSDegep1VfdLf2iM5fhPvOtTNjNLZCf1foX2lpg44-liK3E0rJfkhviMKOakCTVpe-cAMqs5_i3ZiMBwHLc_i5rHvVfpqlVrEq64nuIcGDTr0GpCPcP8-IlKojV_4wcBDKHSCCUqGcmPV38_NJ9RdEixgyCKXrWhZRA6Z2bhYAlv6rgBbOQJPDedsyGO0meAfSNYTMDGs4Yt4q4A31QgaHNbM" />
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-6 bg-[#091935] flex items-center justify-between border-t border-[#374151]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-sm font-medium text-amber-500 uppercase tracking-tighter">Trạng thái: Chờ xử lý</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold py-2 px-6 rounded-lg transition-all active:scale-95 text-sm">
                  Từ chối
                </button>
                <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold py-2 px-6 rounded-lg transition-all active:scale-95 text-sm shadow-lg shadow-green-900/20">
                  Chấp nhận
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChangeRequestsWithModal;
