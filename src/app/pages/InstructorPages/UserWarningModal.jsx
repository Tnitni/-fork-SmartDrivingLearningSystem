import React from 'react';

const UserWarningModal = () => {
  return (
    <div className="bg-surface text-on-surface min-h-screen overflow-hidden font-body">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-[280px] z-50 bg-[#081328] flex flex-col py-10 px-6 font-['Be_Vietnam_Pro'] text-sm tracking-wide">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-[#dde5ff]">Green Light</h1>
          <p className="text-[#95abde] text-xs uppercase tracking-[0.2em] mt-1">Instructor Atelier</p>
        </div>
        <nav className="flex-1 space-y-6">
          <div className="space-y-4">
            <a className="block text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:translate-x-1 transition-all" href="#">Tổng quan</a>
            <a className="block text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:translate-x-1 transition-all" href="#">Khóa học</a>
            <a className="block text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:translate-x-1 transition-all" href="#">Học viên</a>

            {/* Semantic Mapping: Active Tab for Community Reports */}
            <a className="block text-[#dde5ff] font-bold border-l-2 border-[#bdc7db] pl-4" href="#">Báo cáo cộng đồng</a>
            <a className="block text-[#95abde] font-medium pl-4 hover:text-[#dde5ff] hover:translate-x-1 transition-all" href="#">Cài đặt</a>
          </div>
        </nav>
        <div className="mt-auto pt-10 space-y-4">
          <div className="flex items-center gap-3 px-4 py-2 text-[#95abde] hover:text-[#dde5ff] transition-all cursor-pointer">
            <span className="material-symbols-outlined text-xl">help</span>
            <span>Trợ giúp</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 text-[#95abde] hover:text-[#dde5ff] transition-all cursor-pointer">
            <span className="material-symbols-outlined text-xl">logout</span>
            <span>Đăng xuất</span>
          </div>
        </div>
      </aside>

      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-40 bg-[#081328] h-16 ml-[280px] flex justify-between items-center px-8 border-none font-['Be_Vietnam_Pro'] text-[#dde5ff]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#95abde]">search</span>
          <span className="text-sm text-[#95abde]">Tìm kiếm báo cáo, học viên...</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <span className="material-symbols-outlined text-[#bdc7db]">notifications</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
          </div>
          <span className="material-symbols-outlined text-[#bdc7db]">settings</span>
          <div className="flex items-center gap-3 ml-4">
            <div className="text-right">
              <p className="text-xs font-bold">Admin Panel</p>
              <p className="text-[10px] text-[#95abde]">Moderator Role</p>
            </div>
            <img alt="Instructor Profile" className="w-8 h-8 rounded-full border border-outline-variant/30" data-alt="Close-up portrait of a professional male administrator in a modern office setting with soft cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACpi1uosbDMrpLir7loGR03NTZnETG-BDsBr3D0xtMmNrREu4LtdW45r41D4QDEtFSSXOC6PHbJGRz_1gRljiwmwEEIuY0kym-K0aRbm6votP-GKKqHWXHcFkbCQadVxPeNTTaq2Iuga5S5dQfARdjxC3nLv5yd2cDiv1lSQAmtQyMnbX7tV0gqVPsoMV7XzoHdqePpg8RyVvkorF5fhCjiMRJygqs8Wwg5HiRzKB3BrIic0MRO_plbQ35Dc3Rgec1IAIWtw7UPao" />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-[280px] pt-24 p-8 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8">
          <header className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-on-surface">Danh sách báo cáo vi phạm</h2>
              <p className="text-on-surface-variant mt-2">Quản lý và xử lý các báo cáo từ cộng đồng người dùng.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2.5 bg-surface-container rounded-xl text-on-surface font-medium border border-outline-variant/20">Lọc dữ liệu</button>
              <button className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-bold shadow-lg shadow-primary/10">Xuất báo cáo</button>
            </div>
          </header>

          {/* Table UI Pattern */}
          <div className="bg-surface-container-low rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-surface-container text-on-surface-variant text-[11px] uppercase tracking-widest font-bold">
                <tr>
                  <th className="px-8 py-5">Người gửi</th>
                  <th className="px-8 py-5">Nội dung báo cáo</th>
                  <th className="px-8 py-5">Ngày tạo</th>
                  <th className="px-8 py-5">Trạng thái</th>
                  <th className="px-8 py-5 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center font-bold text-primary">AN</div>
                      <div>
                        <p className="font-bold text-on-surface">An Nguyễn</p>
                        <p className="text-xs text-on-surface-variant">ID: #USR-2024</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 max-w-xs">
                    <p className="truncate text-on-surface-variant">Nội dung bình luận chứa từ ngữ không phù hợp...</p>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant">12:30, 24/05/2024</td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-error-container/20 text-error-dim rounded-full text-xs font-bold">Chờ xử lý</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-primary font-bold hover:underline decoration-primary/30">Xem chi tiết</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal 1: Chi tiết báo cáo vi phạm (The Base Modal) */}
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60">
        <div className="bg-surface-container w-full max-w-2xl rounded-xl shadow-2xl border border-outline-variant/20 overflow-hidden">
          <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
            <h3 className="text-xl font-bold text-on-surface">Chi tiết báo cáo vi phạm</h3>
            <span className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-on-surface">close</span>
          </div>
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Người bị báo cáo</p>
                <div className="flex items-center gap-3 bg-surface p-4 rounded-xl">
                  <img alt="User Avatar" className="w-12 h-12 rounded-full" data-alt="Detailed portrait of a user profile with soft professional lighting in a tech environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM8hf7ZM1mztZMx99BqYh4bq50FpwZtl2nl5BFd-8GGQ12jYV7QVmC5mE4o8tGtciQoMbAxWs96wySmHfyPn2Pci_-3pgdmFK0LifISPviiRim0boeWWhBET3HtpecqSxPGA9WU6nNFI1S4QZDCk0xPHfJiF6dfZpaPWRMb2fEmeTTDNomX4FbwROMxrpoqoigejkQzsnXSzXeORGy469LfQEe-yZ5QmwYghRXnExaP8T9FThl_rqsCH-D1oQO1jqDUFWRYUZlL7s" />
                  <div>
                    <p className="font-bold text-on-surface">Lê Văn Tám</p>
                    <p className="text-xs text-on-surface-variant">levantam@example.com</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Loại vi phạm</p>
                <div className="bg-surface p-4 rounded-xl flex items-center gap-3">
                  <span className="material-symbols-outlined text-error" data-weight="fill">warning</span>
                  <span className="text-on-surface font-medium">Ngôn từ thù ghét</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Bằng chứng vi phạm</p>
              <div className="bg-surface p-4 rounded-xl italic text-on-surface-variant">
                "Cảnh báo: Nội dung này đã bị hệ thống ghi nhận có chứa các cụm từ xúc phạm người khác trong phần bình luận của bài giảng số 12..."
              </div>
            </div>
          </div>
          <div className="p-6 bg-surface-container-low flex justify-end gap-4">
            <button className="px-6 py-2 rounded-lg font-bold text-on-surface-variant hover:bg-surface-container transition-colors">Bỏ qua</button>
            <button className="px-6 py-2 bg-error rounded-lg font-bold text-on-error shadow-lg shadow-error/20">Xử lý vi phạm</button>
          </div>
        </div>
      </div>

      {/* Modal 2: Cảnh báo người dùng (NESTED MODAL - OPEN) */}
      <div className="fixed inset-0 z-[60] flex items-center justify-center backdrop-blur-sm bg-[#070e1d]/80">
        {/* NESTED MODAL */}
        <div className="bg-[#111827] w-[420px] rounded-xl shadow-[0px_20px_40px_rgba(0,0,0,0.6)] border border-[#374151] overflow-hidden">
          <div className="px-6 py-5 border-b border-[#374151]/50 flex justify-between items-center bg-[#111827]">
            <h4 className="text-lg font-bold text-[#dde5ff]">Cảnh báo người dùng</h4>
            <button className="text-[#95abde] hover:text-[#dde5ff] transition-colors">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#95abde] uppercase tracking-widest" htmlFor="warning_content">Nội dung cảnh báo</label>
              <textarea className="w-full bg-[#081328] border border-[#374151] rounded-xl text-[#dde5ff] p-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-[#525c6c]" id="warning_content" placeholder="Nhập nội dung cảnh báo cho người dùng..." rows="5"></textarea>

              {/* Sample validation message in red */}
              <p className="text-error text-[11px] font-medium mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">info</span>
                Nội dung cảnh báo phải có ít nhất 10 ký tự.
              </p>
            </div>

            <div className="bg-[#081328]/50 p-3 rounded-lg flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary-dim shrink-0">visibility</span>
              <p className="text-[11px] text-[#95abde] leading-relaxed">
                Thông báo này sẽ được gửi trực tiếp vào hộp thư đến và hiển thị trên bảng điều khiển của người dùng bị báo cáo.
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="px-6 py-5 bg-[#081328]/30 flex justify-end gap-3">
            <button className="px-5 py-2.5 rounded-lg text-sm font-bold text-[#dde5ff] bg-[#374151] hover:bg-[#4a5566] transition-colors">
              Hủy
            </button>
            <button className="px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#e67e22] hover:bg-[#d35400] transition-all shadow-lg shadow-orange-900/20 active:scale-95">
              Gửi cảnh báo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWarningModal;
