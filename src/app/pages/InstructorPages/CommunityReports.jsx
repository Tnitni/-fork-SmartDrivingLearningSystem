import React from 'react';

const CommunityReports = () => {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-hidden">
      {/* Background UI Layer (SideNavBar & TopNavBar) */}
      <aside className="fixed left-0 top-0 h-screen w-[280px] z-50 bg-[#081328] flex flex-col py-8 font-['Be_Vietnam_Pro'] antialiased tracking-tight">
        <div className="px-8 mb-10">
          <div className="text-xl font-bold text-[#dde5ff] tracking-widest uppercase">Atelier Driving</div>
          <div className="text-xs text-[#95abde] opacity-60 mt-1">Hệ thống Giảng viên</div>
        </div>
        <nav className="flex-1 space-y-2">
          <div className="font-medium text-[#95abde] pl-4 py-3 opacity-80 hover:text-[#dde5ff] hover:opacity-100 transition-all duration-200 flex items-center gap-3">
            <span>Tổng quan</span>
          </div>
          <div className="font-medium text-[#95abde] pl-4 py-3 opacity-80 hover:text-[#dde5ff] hover:opacity-100 transition-all duration-200 flex items-center gap-3">
            <span>Lịch dạy học</span>
          </div>
          <div className="font-medium text-[#95abde] pl-4 py-3 opacity-80 hover:text-[#dde5ff] hover:opacity-100 transition-all duration-200 flex items-center gap-3">
            <span>Quản lý học viên</span>
          </div>
          <div className="font-bold text-[#dde5ff] border-l-2 border-[#bdc7db] pl-4 py-3 scale-105 transition-transform flex items-center gap-3">
            <span>Báo cáo cộng đồng</span>
          </div>
          <div className="font-medium text-[#95abde] pl-4 py-3 opacity-80 hover:text-[#dde5ff] hover:opacity-100 transition-all duration-200 flex items-center gap-3">
            <span>Tài liệu hướng dẫn</span>
          </div>
          <div className="font-medium text-[#95abde] pl-4 py-3 opacity-80 hover:text-[#dde5ff] hover:opacity-100 transition-all duration-200 flex items-center gap-3">
            <span>Cài đặt hệ thống</span>
          </div>
        </nav>
      </aside>

      <header className="fixed top-0 right-0 w-[calc(100%-280px)] h-16 z-40 bg-[#070e1d]/80 backdrop-blur-xl border-b border-[#314774]/20 flex justify-between items-center px-8">
        <div className="flex items-center gap-4 flex-1">
          <div className="bg-surface-container rounded-full px-4 py-1.5 flex items-center gap-3 w-96 focus-within:ring-1 focus-within:ring-[#bdc7db]/30">
            <span className="material-symbols-outlined text-on-surface-variant text-sm" data-icon="search">search</span>
            <input className="bg-transparent border-none text-sm focus:ring-0 text-on-surface w-full" placeholder="Tìm kiếm báo cáo..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button className="hover:bg-[#091f42] rounded-full p-2 transition-colors relative">
              <span className="material-symbols-outlined text-[#bdc7db]" data-icon="notifications">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="hover:bg-[#091f42] rounded-full p-2 transition-colors">
              <span className="material-symbols-outlined text-[#bdc7db]" data-icon="help_outline">help_outline</span>
            </button>
          </div>
          <div className="flex items-center gap-3 border-l border-outline-variant/30 pl-6">
            <div className="text-right">
              <div className="text-xs font-semibold text-[#dde5ff]">Lê Minh Tuấn</div>
              <div className="text-[10px] text-[#95abde]">Giảng viên cao cấp</div>
            </div>
            <img alt="Ảnh đại diện giảng viên" className="w-8 h-8 rounded-full object-cover" data-alt="Professional portrait of a male instructor in a modern office environment with warm rim lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYxR-c5HDHxI1obgRjdPjwqooR5TWHOXmGIKhGRuJOBdXez8pbDRdhN7OrdcrTizNbv3P088s9lyRULH1Uf3a553U3n4b74XKMhkSoEc_sMxtwbwVRg7T-dtL2L7ZOFIDjmvZEx4ZERL56vr4sZKB_o5w0Lmbc3bVkNZbE8sqbuJpyhnWjZtulcG6AJOAJ5fgbMX8pztl-3veTLXYC-5Xw79hnkst9ybcYogWIGZI8Lk1zOV_GLoNfsiv1D-q_TyzpY_hUngea6g0" />
          </div>
        </div>
      </header>

      <main className="ml-[280px] pt-16 p-8 min-h-screen">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-[#dde5ff]">Danh sách báo cáo</h1>
              <p className="text-on-surface-variant mt-1">Quản lý và xử lý các phản hồi từ cộng đồng học viên</p>
            </div>
          </div>

          {/* Content Grid Preview (Behind Modal) */}
          <div className="grid grid-cols-1 gap-4 opacity-40">
            <div className="bg-surface-container-low p-6 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary" data-icon="warning">warning</span>
                </div>
                <div>
                  <div className="text-on-surface font-semibold">Hướng dẫn lách luật giao thông tại ngã tư...</div>
                  <div className="text-xs text-on-surface-variant flex items-center gap-4 mt-1">
                    <span>Người báo cáo: Nguyễn Văn A</span>
                    <span>Ngày: 24/10/2023</span>
                    <span className="text-error">Vi phạm nội dung</span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-surface-container-high rounded-lg text-sm font-medium">Chi tiết</button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Overlay */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        {/* Modal Container: Width 720px, bg-primary #111827 (Surface Container Lowest/Low mapped), border #374151 (Outline Variant mapped) */}
        <div className="w-full max-w-[720px] bg-[#111827] border border-[#374151] rounded-xl shadow-2xl overflow-hidden flex flex-col">

          {/* Header */}
          <div className="px-8 py-5 border-b border-[#374151] flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#dde5ff]">Chi tiết báo cáo vi phạm</h2>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#1F2937] transition-colors">
              <span className="material-symbols-outlined text-[#95abde]" data-icon="close">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="p-8 space-y-8 overflow-y-auto max-h-[819px]">
            {/* Row 1: labels/values */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold mb-1">Người báo cáo</p>
                <p className="text-on-surface font-medium">Nguyễn Văn A</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold mb-1">Ngày báo cáo</p>
                <p className="text-on-surface font-medium">24/10/2023 14:30</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold mb-1">Loại vi phạm</p>
                <span className="px-2 py-0.5 bg-error/10 text-error text-xs font-bold rounded border border-error/20">Nội dung không phù hợp</span>
              </div>
            </div>

            {/* Row 2: Title */}
            <div>
              <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold mb-2">Tiêu đề báo cáo</p>
              <h3 className="text-2xl font-extrabold text-[#dde5ff] leading-tight">Yêu cầu gỡ bỏ nội dung hướng dẫn sai lệch quy định giao thông</h3>
            </div>

            {/* Section: Lý do báo cáo */}
            <div>
              <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold mb-2">Lý do báo cáo</p>
              <div className="bg-[#1F2937] p-4 rounded-lg border border-[#374151]/50 text-sm text-on-surface/90 leading-relaxed min-h-[100px]">
                Nội dung trong bài viết này trực tiếp khuyến khích học viên thực hiện các hành vi vi phạm pháp luật giao thông bằng cách lợi dụng các điểm mù của camera phạt nguội tại ngã tư. Điều này cực kỳ nguy hiểm và gây ảnh hưởng xấu đến uy tín của cộng đồng Atelier Driving.
              </div>
            </div>

            {/* Section: Hình ảnh đính kèm */}
            <div>
              <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold mb-3">Hình ảnh đính kèm</p>
              <div className="flex gap-4">
                <div className="w-32 h-32 rounded-lg overflow-hidden border border-[#374151] bg-[#1F2937] group relative">
                  <img alt="Vi phạm 1" className="w-full h-full object-cover" data-alt="Close up of a busy city intersection with traffic lights and car silhouettes in evening light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBcWElMhcQdwfy-gnlQ_lddVjZzCKUXE-CQ8yLMSzdeF4Zh0GBlwYr6mcCL0Q7svApZ8yMPDFRcPuodJZOfAaKmyTa3JEhCqtAMDHD2dbf4gmAGUtki_CCOdhPpxLCDE5FE9IS0clSO1ohE70ntPcjEZFT3DcRT_EEkLfsINAVfxCBx_hkpOKMYd2Dz3SWOb-P3hMra8pxtISqz8_f19lT7_dMwvDWCCRCi2ICMEe8-eY9G-Cio-lLhIhU5TH69d3TTobX29d5f6c" />
                </div>
                <div className="w-32 h-32 rounded-lg overflow-hidden border border-[#374151] bg-[#1F2937]">
                  <img alt="Vi phạm 2" className="w-full h-full object-cover" data-alt="Interior view of a modern car dashboard focusing on the speedometer and driving controls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp0MVjIAdGdsgtVX93dHH2B9SdlG3Hogag_A9HGavfs7uOkDkqcAY6LJ4_7OxsOy2QW1fuC6Zct7-TzPGQOyVkhFNX2aY5HndzjHXGFu_DABFkrVpnVz3GNZdoe4qUC3rAbh5oaky7xHM91FIcD5b797phY62SrboyjTrS2U7tDnIENIaM_Y-Yo4blF0MX9U1iEinr5cOCNjHrpfkovub_WY9-kG3KLQhFQENW2plkXJOvrAEyGVgcfhNH_JgDljxo1IJSlOmSUD0" />
                </div>
                <div className="w-32 h-32 rounded-lg overflow-hidden border border-[#374151] bg-[#1F2937]">
                  <img alt="Vi phạm 3" className="w-full h-full object-cover" data-alt="Macro shot of a road sign with blurred background showing urban infrastructure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9QsGpUZMxYsL9_e13I-AC6zgmobwyMjsahLHSjf-AQuO1DWm8EJ1Mq20NMLWWPAoHO4JRbySAJblv5zwsEcBNM_Bo7EgWpTnaLSNXK8ESoUDl8EVBlBDVpeuvbmbBYkz4rw2S--R0mJHBQV35g_PJPoxFhN3o4V8j_zNuWc5r_A91XmY2TVjDBbZjujn2d142udmavcrV4bTzoN9ulAr9cWINhv0NfKDGbOC93Z_bZ0kiwIeHUbfYmPGcxmafCI4R_jIf4lqaL-Y" />
                </div>
              </div>
            </div>

            <div className="h-px bg-[#374151]"></div>

            {/* Section: Nội dung bị báo cáo */}
            <div className="bg-[#1F2937] rounded-xl p-6 border border-outline-variant/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-[0.1em] text-primary px-2 py-1 bg-primary/10 rounded">BÀI VIẾT</span>
                <button className="text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 border border-[#374151] px-3 py-1.5 rounded-lg">
                  Xem bài viết gốc
                  <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
                </button>
              </div>
              <p className="text-lg font-bold text-[#dde5ff] mb-2">Hướng dẫn lách luật giao thông tại ngã tư trung tâm</p>
              <p className="text-sm text-on-surface-variant line-clamp-2">
                Chào các bạn, hôm nay mình sẽ chia sẻ bí kíp làm sao để không bị phạt nguội khi đi qua các ngã tư có lắp camera quan sát. Chỉ cần quan sát góc đặt của cam và di chuyển sát vào lề...
              </p>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="px-8 py-6 border-t border-[#374151] flex justify-between gap-4 bg-[#0d1421]">
            <button className="px-6 py-2.5 rounded-xl border border-[#374151] text-on-surface-variant font-semibold hover:bg-[#1F2937] transition-all text-sm">
              Bỏ qua báo cáo
            </button>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 rounded-xl bg-orange-600/10 text-orange-400 border border-orange-500/30 font-semibold hover:bg-orange-600/20 transition-all text-sm">
                Cảnh báo người dùng
              </button>
              <button className="px-6 py-2.5 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 shadow-lg shadow-red-900/20 transition-all text-sm">
                Xóa bài viết vi phạm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityReports;
