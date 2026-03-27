import React from 'react';

const DashboardOverview = () => {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-primary min-h-screen flex">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-[280px] bg-surface flex flex-col py-8 gap-y-6 z-50 overflow-y-auto no-scrollbar">
        <div className="px-8 mb-4">
          <h1 className="text-lg font-bold text-[#dde5ff] tracking-tight">The Instructor’s Atelier</h1>
          <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Green Light System</p>
        </div>
        <nav className="flex flex-col gap-y-1">
          {/* Active State Navigation */}
          <a className="font-bold text-[#dde5ff] border-l-2 border-[#bdc7db] pl-6 py-2 transition-all" href="#">Trang chủ</a>

          {/* Section: DIỄN ĐÀN */}
          <div className="mt-4">
            <span className="px-8 text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-2 block">DIỄN ĐÀN</span>
            <div className="flex flex-col">
              <a className="font-medium text-[#95abde] hover:text-[#dde5ff] transition-colors pl-8 py-2 text-sm hover:bg-surface-container-low" href="#">Tạo bài viết</a>
              <a className="font-medium text-[#95abde] hover:text-[#dde5ff] transition-colors pl-8 py-2 text-sm hover:bg-surface-container-low" href="#">Bài viết của tôi</a>
            </div>
          </div>

          {/* Section: KIỂM DUYỆT & BÁO CÁO */}
          <div className="mt-4">
            <span className="px-8 text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-2 block">KIỂM DUYỆT & BÁO CÁO</span>
            <div className="flex flex-col">
              <a className="font-medium text-[#95abde] hover:text-[#dde5ff] transition-colors pl-8 py-2 text-sm hover:bg-surface-container-low" href="#">Bài viết chờ duyệt</a>
              <a className="font-medium text-[#95abde] hover:text-[#dde5ff] transition-colors pl-8 py-2 text-sm hover:bg-surface-container-low" href="#">Báo cáo cộng đồng</a>
              <a className="font-medium text-[#95abde] hover:text-[#dde5ff] transition-colors pl-8 py-2 text-sm hover:bg-surface-container-low" href="#">Báo cáo lỗi nội dung</a>
              <a className="font-medium text-[#95abde] hover:text-[#dde5ff] transition-colors pl-8 py-2 text-sm hover:bg-surface-container-low" href="#">Duyệt yêu cầu thay đổi</a>
            </div>
          </div>

          {/* Section: ĐÀO TẠO LÝ THUYẾT */}
          <div className="mt-4">
            <span className="px-8 text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-2 block">ĐÀO TẠO LÝ THUYẾT</span>
            <div className="flex flex-col">
              <a className="font-medium text-[#95abde] hover:text-[#dde5ff] transition-colors pl-8 py-2 text-sm hover:bg-surface-container-low" href="#">Quản lý Chương</a>
              <a className="font-medium text-[#95abde] hover:text-[#dde5ff] transition-colors pl-8 py-2 text-sm hover:bg-surface-container-low" href="#">Quản lý Bài học</a>
              <a className="font-medium text-[#95abde] hover:text-[#dde5ff] transition-colors pl-8 py-2 text-sm hover:bg-surface-container-low" href="#">Ngân hàng Câu hỏi</a>
              <a className="font-medium text-[#95abde] hover:text-[#dde5ff] transition-colors pl-8 py-2 text-sm hover:bg-surface-container-low" href="#">Bài thi thử</a>
              <a className="font-medium text-[#95abde] hover:text-[#dde5ff] transition-colors pl-8 py-2 text-sm hover:bg-surface-container-low" href="#">Ngân hàng Biển báo</a>
            </div>
          </div>

          {/* Section: ĐÀO TẠO MÔ PHỎNG */}
          <div className="mt-4">
            <div className="flex items-center justify-between px-8 py-2 cursor-pointer group">
              <span className="text-[10px] font-bold text-outline group-hover:text-on-surface-variant transition-colors uppercase tracking-[0.2em]">ĐÀO TẠO MÔ PHỎNG</span>
              <span className="material-symbols-outlined text-sm text-outline group-hover:text-on-surface-variant">keyboard_arrow_down</span>
            </div>
          </div>

          {/* Section: BẰNG LÁI & PHƯƠNG TIỆN */}
          <div className="mt-4">
            <div className="flex items-center justify-between px-8 py-2 cursor-pointer group">
              <span className="text-[10px] font-bold text-outline group-hover:text-on-surface-variant transition-colors uppercase tracking-[0.2em]">BẰNG LÁI & PHƯƠNG TIỆN</span>
              <span className="material-symbols-outlined text-sm text-outline group-hover:text-on-surface-variant">keyboard_arrow_down</span>
            </div>
          </div>
        </nav>

        <div className="mt-auto px-8 py-4 bg-surface-container-low mx-4 rounded-xl border border-outline-variant/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
              <img alt="Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFvhsGKJGQqMs8kxzYr2k83s6ovddBMZYcySrutis362arOUXxTgeB-um0N6cCsTBVbDdlqQoolgU68NcjTJFiONjABHkGXBxN4HgR05E61LSYI2uk65Em8erz8SzczfTMqNYUph6t1Z-eIk4dSoM1jlcWG8xBvBIWOKRsmqUMmni9d1gDpDNo1NjLPfTRO4hgaGIQ6gUYdRp5QubJA7lxJqsBTfI3Mf_cSlVFZy1wDDYMlFWOrdP5uBezllGU1OpuiuSts_SCNS0" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#dde5ff]">Lê Minh Anh</p>
              <p className="text-[10px] text-on-surface-variant">Quản trị viên Cao cấp</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-[280px] flex-1 min-h-screen">
        {/* Top Navigation Bar */}
        <header className="h-16 bg-surface/80 backdrop-blur-md flex justify-between items-center px-8 z-40 sticky top-0 border-b border-outline-variant/10">
          <div className="flex items-center gap-8">
            <h2 className="text-lg font-bold text-[#dde5ff] tracking-tight">Tổng quan Hệ thống</h2>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
              <input className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-1.5 text-sm w-80 focus:ring-1 focus:ring-primary text-on-surface placeholder:text-outline/50" placeholder="Tìm kiếm tài liệu, bài học..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-12">
          {/* Welcome Header */}
          <section className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Chào buổi sáng, Minh Anh.</h1>
            <p className="text-on-surface-variant font-body">Đây là cập nhật mới nhất về hệ thống đào tạo của bạn hôm nay.</p>
          </section>

          {/* SECTION 1: THỐNG KÊ TỔNG QUAN */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 flex flex-col gap-4 group hover:border-outline-variant/50 transition-all">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-amber-400 bg-amber-400/10 p-2 rounded-lg">pending_actions</span>
                <span className="bg-amber-400/20 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Cần xử lý</span>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-on-surface">24</p>
                <p className="text-xs text-on-surface-variant font-medium mt-1 uppercase tracking-wider">Bài viết chờ duyệt</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 flex flex-col gap-4 group hover:border-outline-variant/50 transition-all">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-blue-400 bg-blue-400/10 p-2 rounded-lg">edit_note</span>
                <span className="bg-blue-400/20 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Yêu cầu mới</span>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-on-surface">12</p>
                <p className="text-xs text-on-surface-variant font-medium mt-1 uppercase tracking-wider">Yêu cầu thay đổi</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 flex flex-col gap-4 group hover:border-outline-variant/50 transition-all">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-error bg-error/10 p-2 rounded-lg">report_problem</span>
                <span className="bg-error/20 text-error text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Nghiêm trọng</span>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-on-surface">08</p>
                <p className="text-xs text-on-surface-variant font-medium mt-1 uppercase tracking-wider">Báo cáo lỗi nội dung</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 flex flex-col gap-4 group hover:border-outline-variant/50 transition-all">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-orange-400 bg-orange-400/10 p-2 rounded-lg">forum</span>
                <span className="bg-orange-400/20 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Cộng đồng</span>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-on-surface">15</p>
                <p className="text-xs text-on-surface-variant font-medium mt-1 uppercase tracking-wider">Báo cáo cộng đồng</p>
              </div>
            </div>
          </section>

          {/* SECTION 2: TRUY CẬP NHANH */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold text-on-surface flex items-center gap-3">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Truy cập nhanh
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container transition-all p-4 rounded-xl border border-outline-variant/10 text-left group">
                <span className="text-2xl group-hover:scale-110 transition-transform">📝</span>
                <span className="text-sm font-semibold text-on-surface">Tạo bài viết</span>
              </button>
              <button className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container transition-all p-4 rounded-xl border border-outline-variant/10 text-left group">
                <span className="text-2xl group-hover:scale-110 transition-transform">❓</span>
                <span className="text-sm font-semibold text-on-surface">Thêm câu hỏi mới</span>
              </button>
              <button className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container transition-all p-4 rounded-xl border border-outline-variant/10 text-left group">
                <span className="text-2xl group-hover:scale-110 transition-transform">🪧</span>
                <span className="text-sm font-semibold text-on-surface">Thêm biển báo mới</span>
              </button>
              <button className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container transition-all p-4 rounded-xl border border-outline-variant/10 text-left group">
                <span className="text-2xl group-hover:scale-110 transition-transform">📹</span>
                <span className="text-sm font-semibold text-on-surface">Thêm mô phỏng mới</span>
              </button>

              <button className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container transition-all p-4 rounded-xl border border-outline-variant/10 text-left group">
                <span className="text-2xl group-hover:scale-110 transition-transform">📋</span>
                <span className="text-sm font-semibold text-on-surface">Ngân hàng câu hỏi</span>
              </button>
              <button className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container transition-all p-4 rounded-xl border border-outline-variant/10 text-left group">
                <span className="text-2xl group-hover:scale-110 transition-transform">📚</span>
                <span className="text-sm font-semibold text-on-surface">Quản lý bài học</span>
              </button>
              <button className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container transition-all p-4 rounded-xl border border-outline-variant/10 text-left group">
                <span className="text-2xl group-hover:scale-110 transition-transform">🗂️</span>
                <span className="text-sm font-semibold text-on-surface">Bài thi thử</span>
              </button>
              <button className="flex items-center gap-4 bg-surface-container-low hover:bg-surface-container transition-all p-4 rounded-xl border border-outline-variant/10 text-left group">
                <span className="text-2xl group-hover:scale-110 transition-transform">🏷️</span>
                <span className="text-sm font-semibold text-on-surface">Ngân hàng biển báo</span>
              </button>
            </div>
          </section>

          {/* SECTION 3: TABLES */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel: Bài viết chờ duyệt */}
            <div className="bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden flex flex-col">
              <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
                <h3 className="font-bold text-on-surface">Bài viết chờ duyệt gần đây</h3>
                <a className="text-xs text-primary hover:underline uppercase tracking-widest font-bold" href="#">Xem tất cả</a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface-container-low">
                      <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Tiêu đề</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Tác giả</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Thời gian</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Hành động</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/5">
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-on-surface truncate max-w-[180px]">Mẹo thi lý thuyết 600 câu</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">Trần Văn T.</td>
                      <td className="px-6 py-4 text-xs text-on-surface-variant">10 phút trước</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="p-1.5 text-green-400 hover:bg-green-400/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-lg">check_circle</span></button>
                        <button className="p-1.5 text-error hover:bg-error/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-lg">cancel</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-on-surface truncate max-w-[180px]">Phân tích tình huống mô phỏng 12</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">Nguyễn Thị H.</td>
                      <td className="px-6 py-4 text-xs text-on-surface-variant">45 phút trước</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="p-1.5 text-green-400 hover:bg-green-400/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-lg">check_circle</span></button>
                        <button className="p-1.5 text-error hover:bg-error/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-lg">cancel</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-on-surface truncate max-w-[180px]">Lưu ý khi lái xe đường đèo</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">Phạm Minh L.</td>
                      <td className="px-6 py-4 text-xs text-on-surface-variant">1 giờ trước</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="p-1.5 text-green-400 hover:bg-green-400/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-lg">check_circle</span></button>
                        <button className="p-1.5 text-error hover:bg-error/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-lg">cancel</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-on-surface truncate max-w-[180px]">Hệ thống biển báo mới 2024</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">Lê Văn K.</td>
                      <td className="px-6 py-4 text-xs text-on-surface-variant">2 giờ trước</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="p-1.5 text-green-400 hover:bg-green-400/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-lg">check_circle</span></button>
                        <button className="p-1.5 text-error hover:bg-error/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-lg">cancel</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-on-surface truncate max-w-[180px]">Kinh nghiệm thi B2 lần đầu</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">Đặng Thu Tr.</td>
                      <td className="px-6 py-4 text-xs text-on-surface-variant">3 giờ trước</td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="p-1.5 text-green-400 hover:bg-green-400/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-lg">check_circle</span></button>
                        <button className="p-1.5 text-error hover:bg-error/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-lg">cancel</span></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Panel: Yêu cầu thay đổi chờ duyệt */}
            <div className="bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden flex flex-col">
              <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
                <h3 className="font-bold text-on-surface">Yêu cầu thay đổi chờ duyệt</h3>
                <a className="text-xs text-primary hover:underline uppercase tracking-widest font-bold" href="#">Xem tất cả</a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface-container-low">
                      <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Tiêu đề yêu cầu</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Người gửi</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Ngày gửi</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Hành động</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/5">
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-on-surface">Cập nhật đáp án câu 452</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">Admin01</td>
                      <td className="px-6 py-4 text-xs text-on-surface-variant">Hôm nay</td>
                      <td className="px-6 py-4">
                        <button className="px-3 py-1 text-xs font-bold border border-primary text-primary hover:bg-primary hover:text-surface transition-all rounded-lg uppercase tracking-tight">Xem chi tiết</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-on-surface">Sửa nội dung bài học Chương 2</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">Instructor_B2</td>
                      <td className="px-6 py-4 text-xs text-on-surface-variant">Hôm nay</td>
                      <td className="px-6 py-4">
                        <button className="px-3 py-1 text-xs font-bold border border-primary text-primary hover:bg-primary hover:text-surface transition-all rounded-lg uppercase tracking-tight">Xem chi tiết</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-on-surface">Thay đổi ảnh biển báo cấm</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">DesignTeam</td>
                      <td className="px-6 py-4 text-xs text-on-surface-variant">Hôm qua</td>
                      <td className="px-6 py-4">
                        <button className="px-3 py-1 text-xs font-bold border border-primary text-primary hover:bg-primary hover:text-surface transition-all rounded-lg uppercase tracking-tight">Xem chi tiết</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-on-surface">Thêm video mô phỏng tình huống mới</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">TechLead</td>
                      <td className="px-6 py-4 text-xs text-on-surface-variant">Hôm qua</td>
                      <td className="px-6 py-4">
                        <button className="px-3 py-1 text-xs font-bold border border-primary text-primary hover:bg-primary hover:text-surface transition-all rounded-lg uppercase tracking-tight">Xem chi tiết</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-on-surface">Hiệu chỉnh biểu phí bằng lái</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">Accounting_S</td>
                      <td className="px-6 py-4 text-xs text-on-surface-variant">2 ngày trước</td>
                      <td className="px-6 py-4">
                        <button className="px-3 py-1 text-xs font-bold border border-primary text-primary hover:bg-primary hover:text-surface transition-all rounded-lg uppercase tracking-tight">Xem chi tiết</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Success Confirmation Toast */}
      <div className="fixed bottom-8 right-8 bg-surface-container-highest/90 backdrop-blur-xl border border-outline/20 p-4 rounded-xl flex items-center gap-4 shadow-2xl z-50 transition-all opacity-0 pointer-events-none translate-y-4" id="toast-success">
        <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined">verified</span>
        </div>
        <div>
          <p className="text-sm font-bold text-on-surface">Thao tác thành công</p>
          <p className="text-xs text-on-surface-variant">Bài viết đã được phê duyệt và công khai trên hệ thống.</p>
        </div>
        <button className="ml-4 text-on-surface-variant hover:text-on-surface" onClick={(e) => e.currentTarget.parentElement.classList.add('opacity-0')}>
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardOverview;
