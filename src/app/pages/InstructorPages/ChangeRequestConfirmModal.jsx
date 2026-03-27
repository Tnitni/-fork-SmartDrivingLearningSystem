import React from 'react';

const ChangeRequestConfirmModal = () => {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-hidden">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] z-50 bg-[#081328] dark:bg-[#081328] flex flex-col py-8 px-0 gap-6 font-['Be_Vietnam_Pro'] text-[0.875rem] tracking-[0.01em] antialiased">
        <div className="px-8 mb-4">
          <h1 className="text-lg font-bold text-[#dde5ff] tracking-tight">The Instructor’s Atelier</h1>
          <p className="text-xs text-[#95abde] mt-1">The Digital Curator</p>
        </div>
        <nav className="flex flex-col gap-1">
          <a className="font-medium text-[#95abde] pl-4 py-3 hover:text-[#dde5ff] hover:bg-[#091935] transition-all flex items-center gap-3" href="#">
            Trang chủ
          </a>
          <a className="font-medium text-[#95abde] pl-4 py-3 hover:text-[#dde5ff] hover:bg-[#091935] transition-all flex items-center gap-3" href="#">
            DIỄN ĐÀN
          </a>
          <a className="font-bold text-[#dde5ff] border-l-2 border-[#bdc7db] pl-4 py-3 transition-all flex items-center gap-3 bg-[#091935]" href="#">
            KIỂM DUYỆT & BÁO CÁO
          </a>
          <a className="font-medium text-[#95abde] pl-4 py-3 hover:text-[#dde5ff] hover:bg-[#091935] transition-all flex items-center gap-3" href="#">
            ĐÀO TẠO LÝ THUYẾT
          </a>
          <a className="font-medium text-[#95abde] pl-4 py-3 hover:text-[#dde5ff] hover:bg-[#091935] transition-all flex items-center gap-3" href="#">
            ĐÀO TẠO MÔ PHỎNG
          </a>
          <a className="font-medium text-[#95abde] pl-4 py-3 hover:text-[#dde5ff] hover:bg-[#091935] transition-all flex items-center gap-3" href="#">
            BẰNG LÁI & PHƯƠNG TIỆN
          </a>
        </nav>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 w-[calc(100%-280px)] z-40 bg-[#070e1d]/80 backdrop-blur-md border-b border-[#314774]/20 flex justify-between items-center h-16 px-8 ml-[280px] font-['Be_Vietnam_Pro'] text-sm text-[#bdc7db]">
        <div className="flex items-center bg-[#091935] rounded-full px-4 py-1.5 w-96">
          <span className="material-symbols-outlined text-[#95abde] text-lg mr-2">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-sm w-full text-on-surface" placeholder="Tìm kiếm yêu cầu..." type="text" />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:text-[#dde5ff] hover:bg-[#091f42] rounded-lg transition-all relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button className="p-2 hover:text-[#dde5ff] hover:bg-[#091f42] rounded-lg transition-all">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant cursor-pointer active:opacity-80">
            <img alt="Instructor Profile" className="w-full h-full object-cover" data-alt="Close-up portrait of a professional male instructor with gray hair and glasses in a corporate studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW1C5xmZKzI1XuR6Pa038HcWxn3McnJo_AqwWEthbjjDBKk4f5pAkU0nekP1noNy8JwlwBg_o4-UQcpq_R6FQvpX4dYIuzL3iSoggMcGsnZj-1SKvxVHCss_spEaKO-gDxZZvhMsYD4CYhK2jlWD5hqM76TIcseE8YYAzOwfOsWd5WDgQtm77__v3m9cYyejHV6mg0HCzJZTzLPG1HGhF1FLT5NvLE6ne-7-s7ec4q3tlwM__SIXfdqEh_GyHu7EOBJjdiTU8hAzU" />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-[280px] pt-16 min-h-screen p-10">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <h2 className="text-3xl font-extrabold text-on-surface tracking-tight mb-2">Duyệt yêu cầu thay đổi</h2>
            <p className="text-on-surface-variant max-w-2xl">Quản lý và phê duyệt các yêu cầu thay đổi thông tin đào tạo từ đội ngũ giảng viên và học viên.</p>
          </header>

          {/* Request List Preview (Background Content) */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-surface-container rounded-xl p-8 flex justify-between items-center group hover:bg-surface-container-high transition-all">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface">Thay đổi giáo trình hạng B2</h3>
                  <p className="text-sm text-on-surface-variant">Yêu cầu bởi: Nguyễn Văn An • 2 giờ trước</p>
                </div>
              </div>
              <button className="px-6 py-2 bg-surface-container-highest text-on-surface rounded-lg font-medium hover:bg-primary-container transition-all">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </main>

      {/* FIRST MODAL LAYER: Chi tiết yêu cầu thay đổi */}
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="w-full max-w-3xl bg-[#091935] rounded-xl overflow-hidden shadow-2xl border border-[#314774]/30">
          {/* Modal Header */}
          <div className="px-8 py-6 border-b border-[#314774]/20 flex justify-between items-center">
            <h3 className="text-xl font-bold text-[#dde5ff]">Chi tiết yêu cầu thay đổi</h3>
            <button className="text-[#95abde] hover:text-[#dde5ff]">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-8 space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-[#95abde] font-semibold">Mã yêu cầu</p>
                <p className="text-on-surface font-medium">#REQ-88291</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-[#95abde] font-semibold">Ngày tạo</p>
                <p className="text-on-surface font-medium">14/10/2023 09:45</p>
              </div>
            </div>

            <div className="bg-[#081328] rounded-lg p-6 space-y-4">
              <h4 className="text-sm font-bold text-[#bdc7db] flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">history_edu</span> Nội dung thay đổi
              </h4>
              <p className="text-sm leading-relaxed text-[#95abde]">Cập nhật bài giảng lý thuyết số 4: Biển báo hiệu đường bộ. Thêm video minh họa thực tế cho phần biển báo cấm và biển báo nguy hiểm tại các nút giao thông trọng yếu.</p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#091f42]/40 rounded-lg border border-[#314774]/20">
              <img className="w-12 h-12 rounded object-cover" data-alt="Close up of digital document on a dark tablet screen showing educational curriculum details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwDtY-rW4h7ME-iVrfLB97VNWlYPVyai5L3BsS16fV_CJyWvIItEpX1_jZujgjAgRVeLhCcBi3SBTyEvoF8LKA0wdg9Dh30Kl4wI7Fm-UQ5zAhZ3WVI3BF5jbHYojo1L-UZVVZRx9DMHw62PnIlMCh_MBWi3Q3hBVuP4gEfDty6nhV0ct6z166RUnet3zj0cK_OjhZH71gN_zcajq9EYTFIAtr2se3ea64n9_x8J8VriZRh-s8OcSBdQBym1YqWmxOIloGgPYzo4A" />
              <div>
                <p className="text-sm font-medium text-on-surface">Curriculum_Update_B2.pdf</p>
                <p className="text-xs text-[#95abde]">2.4 MB • Tài liệu đính kèm</p>
              </div>
              <span className="material-symbols-outlined ml-auto text-[#95abde]">download</span>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-8 py-6 bg-[#081328] flex justify-end gap-3">
            <button className="px-6 py-2.5 rounded-lg border border-[#314774] text-on-surface hover:bg-[#091f42] transition-all font-medium">Từ chối</button>
            <button className="px-6 py-2.5 rounded-lg bg-[#22C55E] text-white hover:bg-[#16a34a] transition-all font-bold">Chấp nhận</button>
          </div>
        </div>
      </div>

      {/* NESTED MODAL LAYER: Xác nhận chấp nhận */}
      <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
        <div className="w-[420px] bg-[#111827] rounded-xl border border-[#374151] shadow-[0px_20px_40px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-[#374151] flex justify-between items-center bg-[#1f2937]/30">
            <h4 className="font-bold text-on-surface">Xác nhận chấp nhận</h4>
            <button className="text-[#95abde] hover:text-[#dde5ff] flex items-center">
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#95abde] mb-2">Lý do / Ghi chú phản hồi</label>
                <textarea className="w-full bg-[#030712] border border-[#374151] rounded-lg p-3 text-sm text-on-surface placeholder:text-[#374151] focus:ring-1 focus:ring-[#22C55E] focus:border-[#22C55E] outline-none transition-all resize-none" placeholder="Nhập lý do để thông báo cho Quản trị viên..." rows="4" defaultValue="Yêu cầu"></textarea>
                <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">error</span>
                  Phản hồi phải có ít nhất 10 ký tự.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-[#1f2937]/20 flex flex-col gap-2">
            <button className="w-full py-3 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-lg transition-all active:scale-[0.98]">
              Xác nhận chấp nhận
            </button>
            <button className="w-full py-3 bg-[#374151] hover:bg-[#4b5563] text-on-surface font-medium rounded-lg transition-all active:scale-[0.98]">
              Hủy
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div className="fixed bottom-8 right-8 z-[80] animate-in slide-in-from-right duration-300">
        <div className="bg-[#1F2937] border border-[#EF4444]/50 rounded-xl p-4 shadow-2xl flex items-center gap-4 min-w-[320px] backdrop-blur-md">
          <div className="w-10 h-10 bg-[#EF4444]/20 rounded-full flex items-center justify-center text-[#EF4444]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>close</span>
          </div>
          <div className="flex-1">
            <p className="text-on-surface font-semibold text-sm">Cảnh báo</p>
            <p className="text-[#95abde] text-xs mt-0.5">Vui lòng nhập lý do phản hồi.</p>
          </div>
          <button className="text-[#374151] hover:text-[#95abde]">
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeRequestConfirmModal;
