import React from 'react';

const ContentErrorReportsWithModal = () => {
  return (
    <div className="bg-surface font-body text-on-surface antialiased overflow-hidden">
      {/* TopNavBar */}
      <header className="bg-[#070e1d] dark:bg-[#070e1d] font-be-vietnam-pro headline-md text-[#dde5ff] docked full-width top-0 z-50 no-line tonal-transition flat no-shadows flex justify-between items-center w-full px-8 py-4 fixed left-0 right-0">
        <div className="text-xl font-bold tracking-tight text-[#dde5ff]">The Instructor’s Atelier</div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center bg-surface-container rounded-full px-4 py-1.5 border border-outline-variant/10">
            <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder-on-surface-variant" placeholder="Tìm kiếm nội dung..." type="text" />
          </div>
          <div className="flex items-center gap-4 text-[#bdc7db] dark:text-[#bdc7db]">
            <span className="material-symbols-outlined cursor-pointer hover:text-[#dde5ff] transition-colors duration-200">notifications</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-[#dde5ff] transition-colors duration-200">settings</span>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-primary/20">
              <img alt="Instructor Profile" data-alt="close-up portrait of a professional instructor in a dark modern studio environment with soft rim lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSDfY1RRainwu5gNk8HQAxYU_sDfsNslhqhk1mzm_YjyIt4Vt0aGcObAxynKYhGKqswI_eWr0A_xe_BzZ-IaItltwJe7IqDsSqAQHGFt3xsDLVwtU8tqogORqY4qEE-tQW8VMoTj5OQTPk3uvmZc8x4TUAjkRBWGAgHmMFUHpzlrmXPz6ecZlRVMl2waMGrE9u4zk73SyJkNui-azq-27cxaVf97kM6ouUYHmxU1UrpEN207e8dXDiuaKZTZOLRMoTG1LFGlGlbnc" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-20 h-screen">
        {/* SideNavBar */}
        <aside className="bg-[#081328] dark:bg-[#081328] font-be-vietnam-pro title-sm uppercase tracking-wider fixed left-0 top-0 h-full w-[280px] no-line bg-step-up flat no-shadows flex flex-col py-8 gap-y-2 overflow-y-auto z-40">
          <div className="px-8 mb-10 mt-12">
            <div className="text-lg font-bold text-[#dde5ff]">Atelier CMS</div>
            <div className="text-[10px] text-[#95abde] font-medium tracking-widest mt-1">Hệ thống Giảng viên</div>
          </div>
          <nav className="flex flex-col gap-1">
            <div className="text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer py-2 px-8">Trang chủ</div>

            <div className="text-[11px] text-outline px-8 mt-6 mb-2 tracking-[0.2em] font-bold">DIỄN ĐÀN</div>
            <div className="text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer py-2 px-8">Tạo bài viết</div>
            <div className="text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer py-2 px-8">Bài viết của tôi</div>

            <div className="text-[11px] text-outline px-8 mt-6 mb-2 tracking-[0.2em] font-bold">KIỂM DUYỆT & BÁO CÁO</div>
            <div className="text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer py-2 px-8">Bài viết chờ duyệt</div>
            <div className="text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer py-2 px-8">Báo cáo cộng đồng</div>
            <div className="font-bold text-[#dde5ff] border-l-2 border-[#bdc7db] pl-4 bg-[#091935] py-2 px-8 cursor-pointer">Báo cáo lỗi nội dung</div>
            <div className="text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer py-2 px-8">Duyệt yêu cầu thay đổi</div>

            <div className="text-[11px] text-outline px-8 mt-6 mb-2 tracking-[0.2em] font-bold">ĐÀO TẠO LÝ THUYẾT</div>
            <div className="text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer py-2 px-8">Quản lý Chương</div>
            <div className="text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer py-2 px-8">Quản lý Bài học</div>
            <div className="text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:bg-[#091935] transition-all cursor-pointer py-2 px-8">Ngân hàng Câu hỏi</div>
          </nav>
        </aside>

        {/* Main Content Area (Dimmed Background for Modal) */}
        <main className="ml-[280px] flex-1 p-8 bg-surface-dim relative overflow-y-auto">
          <div className="opacity-30 pointer-events-none">
            <h1 className="font-headline text-3xl font-bold mb-8 text-on-surface">Báo cáo lỗi nội dung</h1>
            <div className="grid grid-cols-1 gap-6">
              {/* Placeholder Rows */}
              <div className="bg-surface-container rounded-xl p-6 flex justify-between items-center">
                <div className="space-y-2">
                  <div className="text-primary font-semibold">Lỗi đáp án câu 452</div>
                  <div className="text-sm text-on-surface-variant">Người báo cáo: Nguyễn Văn A • 24/05/2024</div>
                </div>
                <div className="bg-error-container/20 text-error px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Chưa xử lý</div>
              </div>
              <div className="bg-surface-container rounded-xl p-6 flex justify-between items-center">
                <div className="space-y-2">
                  <div className="text-primary font-semibold">Biển báo sai hình ảnh chương 3</div>
                  <div className="text-sm text-on-surface-variant">Người báo cáo: Trần Thị B • 23/05/2024</div>
                </div>
                <div className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Đang xem xét</div>
              </div>
            </div>
          </div>

          {/* MODAL OVERLAY */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-surface/80 backdrop-blur-sm">
            {/* Modal Box */}
            <div className="bg-[#111827] border border-[#374151] rounded-2xl w-full max-w-[750px] flex flex-col max-h-[921px] shadow-2xl overflow-hidden">
              {/* Modal Header */}
              <div className="px-6 py-5 flex justify-between items-center border-b border-outline-variant/10">
                <h2 className="font-headline text-xl font-bold text-on-surface">Xử lý báo cáo lỗi nội dung</h2>
                <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8 overflow-y-auto space-y-10">
                {/* Section A: Thông tin báo cáo */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary text-lg">info</span>
                    <h3 className="font-headline text-xs font-bold uppercase tracking-[0.15em] text-on-surface-variant">Thông tin báo cáo</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-6 bg-surface-container-low p-5 rounded-xl border border-outline-variant/5">
                    <div>
                      <div className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">Người báo cáo</div>
                      <div className="text-on-surface font-medium">Nguyễn Văn A</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">Ngày gửi</div>
                      <div className="text-on-surface font-medium">24/05/2024</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">Loại nội dung</div>
                      <div className="text-on-surface font-medium">Câu hỏi lý thuyết</div>
                    </div>
                    <div className="col-span-3">
                      <div className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">Tiêu đề</div>
                      <div className="text-on-surface font-semibold text-lg">Lỗi đáp án câu 452</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">Mô tả lỗi</div>
                      <div className="text-on-surface-variant text-sm leading-relaxed">
                        Đáp án đúng phải là C thay vì B theo luật mới của Bộ Giao thông Vận tải ban hành tháng 04/2024 về quy định biển báo cấm rẽ trái...
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-[10px] text-outline font-bold uppercase tracking-wider mb-2">Ảnh đính kèm</div>
                      <div className="relative group cursor-zoom-in rounded-lg overflow-hidden h-24 bg-surface-container border border-outline-variant/10">
                        <img alt="Error proof" className="w-full h-full object-cover" data-alt="close-up photo of a traffic document showing article C with highlighting, cinematic dark photography style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ1bb7CQKLnpHbO9pdPCYYHvdhn3rrUPk9s12eohAvp7n6sbdKoMblJKz1BVweIFDD4o_IQjqTbtRCT4pMOCG8IInI3KlrhqBbXHcM6gG1E8iNiBhKYFaMGiOmtPYrb6mUbsx5DI2Z5nIRCY8ydVA1SJWRXc8u6yt3Olq1Hd-aBkny7DBS5HVWcM4QsMmf7Q55hVZva8M0zCBSwFBmy_RRx04M4LFFzK4ZkumP7JYEzzblj9r0X9JW21mn9pO-VfPIE1ooGFIaHPM" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="material-symbols-outlined text-white text-sm">visibility</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section B: Nội dung cần chỉnh sửa */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary text-lg">edit_note</span>
                    <h3 className="font-headline text-xs font-bold uppercase tracking-[0.15em] text-on-surface-variant">Nội dung cần chỉnh sửa</h3>
                  </div>
                  <div className="bg-surface-container rounded-xl p-5 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">quiz</span>
                      </div>
                      <div>
                        <div className="text-xs text-on-surface-variant mb-0.5">Linked content</div>
                        <div className="text-on-surface font-semibold">Câu 452: Biển nào cấm xe rẽ trái?</div>
                      </div>
                    </div>
                    <button className="bg-[#eab308] hover:bg-[#ca8a04] text-[#17212e] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-yellow-900/10">
                      <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                      Chỉnh sửa trực tiếp
                    </button>
                  </div>
                </section>

                {/* Section C: Phản hồi */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary text-lg">reply</span>
                    <h3 className="font-headline text-xs font-bold uppercase tracking-[0.15em] text-on-surface-variant">Phản hồi cho người báo cáo</h3>
                  </div>
                  <textarea className="w-full h-32 bg-surface-container border-outline-variant/20 rounded-xl text-sm focus:ring-1 focus:ring-primary/50 focus:border-primary/50 placeholder-on-surface-variant/40 p-4 transition-all" placeholder="Nhập nội dung phản hồi cho người dùng đã báo cáo..."></textarea>
                </section>
              </div>

              {/* Modal Footer */}
              <div className="px-8 py-6 bg-surface-container-high/30 border-t border-outline-variant/10 flex justify-end items-center gap-4">
                <button className="px-6 py-2.5 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors bg-surface-container border border-outline-variant/20 rounded-lg">
                  Hủy
                </button>
                <button className="px-6 py-2.5 text-sm font-bold bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-lg flex items-center gap-2 shadow-lg shadow-green-900/20 transition-all">
                  <span className="material-symbols-outlined text-[20px]">task_alt</span>
                  Lưu & Đánh dấu đã xử lý
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContentErrorReportsWithModal;
