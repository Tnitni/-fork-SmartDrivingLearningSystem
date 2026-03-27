import React from 'react';

const CommunityReportsWithModal = () => {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary/30">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-[280px] z-50 bg-[#081328] flex flex-col py-8 font-['Be_Vietnam_Pro'] antialiased tracking-tight">
        <div className="px-8 mb-12">
          <h1 className="text-xl font-bold text-[#dde5ff] tracking-widest uppercase">Atelier Driving</h1>
          <p className="text-xs text-[#95abde] opacity-70 mt-1">Hệ thống Giảng viên</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center font-medium text-[#95abde] pl-8 py-3 opacity-80 hover:text-[#dde5ff] hover:opacity-100 transition-all duration-200" href="#">
            Tổng quan
          </a>
          <a className="flex items-center font-medium text-[#95abde] pl-8 py-3 opacity-80 hover:text-[#dde5ff] hover:opacity-100 transition-all duration-200" href="#">
            Lịch dạy học
          </a>
          <a className="flex items-center font-medium text-[#95abde] pl-8 py-3 opacity-80 hover:text-[#dde5ff] hover:opacity-100 transition-all duration-200" href="#">
            Quản lý học viên
          </a>
          <a className="flex items-center font-bold text-[#dde5ff] border-l-2 border-[#bdc7db] pl-8 py-3 scale-105 transition-transform bg-[#091f42]/30" href="#">
            Báo cáo cộng đồng
          </a>
          <a className="flex items-center font-medium text-[#95abde] pl-8 py-3 opacity-80 hover:text-[#dde5ff] hover:opacity-100 transition-all duration-200" href="#">
            Tài liệu hướng dẫn
          </a>
          <a className="flex items-center font-medium text-[#95abde] pl-8 py-3 opacity-80 hover:text-[#dde5ff] hover:opacity-100 transition-all duration-200" href="#">
            Cài đặt hệ thống
          </a>
        </nav>
        <div className="px-8 pt-8 border-t border-outline-variant/10">
          <div className="flex items-center gap-3">
            <img alt="Avatar" className="w-10 h-10 rounded-full bg-surface-container" data-alt="close-up portrait of a professional male driving instructor in a clean navy blue uniform against a soft blurred background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMGnmG-tJoWSpWotXM2wdrNwWx_2FPARjoQ01ugTu4NZ9FQi9NGgreH1uVkD8BKRicyV4hChcUnDYjhzksH4QADLzWCAb9VpFCf7t9XF0fVajlb4rzy5ODSGs78Q80lwwLTQnQ_1b0G-gNOueegN7iNFmpJiYyGDIgryp4m06Fr_N8q0Zcsq2yLb2sP5lnMU0K5PE96Dubg-u-B7NY21K-SlJBkkVSP5KqUh06eg1zaqR3cNWimOQxoF8aenNBRILqrI4C7CCg2p4" />
            <div>
              <p className="text-sm font-semibold text-on-surface">Minh Phan</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Giảng viên Cao cấp</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="ml-[280px] min-h-screen">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 w-[calc(100%-280px)] h-16 z-40 bg-[#070e1d]/80 backdrop-blur-xl flex justify-between items-center px-8 border-b border-[#314774]/20">
          <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-96 group focus-within:ring-1 focus-within:ring-[#bdc7db]/30 transition-all">
            <span className="material-symbols-outlined text-[#95abde] text-sm">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-[#95abde]/50 w-full ml-2" placeholder="Tìm kiếm nhanh..." type="text" />
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:bg-[#091f42] rounded-full p-2 transition-colors relative">
              <span className="material-symbols-outlined text-[#bdc7db]">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="hover:bg-[#091f42] rounded-full p-2 transition-colors">
              <span className="material-symbols-outlined text-[#bdc7db]">help_outline</span>
            </button>
            <div className="h-8 w-[1px] bg-outline-variant/20 mx-2"></div>
            <img alt="Ảnh đại diện giảng viên" className="w-8 h-8 rounded-full object-cover" data-alt="Logo of a high-end driving academy with a stylized steering wheel and eagle wings in metallic silver" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDim5frWsO6RK9dgId3qoA477QAo4zlS1IVLmSOfvthYU91xywT5wk79vs4EUHo3bQ5wGmBvWk6YdCGuUdYzm9LJjCQVRJBJr4MIu5aHr0ljZdaF12uP3SZ8FIt3DSZZrwGXz8yHzvLvkRVYmrVlcoSUP3BlKS5zwJiccguaUjVKfhZUWEdQ9lMT_QIdO4ylOz7TYcKhaMmTWK9_4FLWwV_Kt7UBmyiWIIzRph-bEiFpEzR9hvNxqY1Y49OeByTWGT2sAyTi7-ibYE" />
          </div>
        </header>

        {/* Content Area */}
        <div className="pt-24 px-10 pb-12">
          {/* Page Title & Count */}
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Báo cáo cộng đồng</h2>
            <span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm font-bold border border-amber-500/20">15 mới</span>
          </div>

          {/* Bento Filter Bar */}
          <div className="grid grid-cols-12 gap-4 mb-8">
            <div className="col-span-4 bg-surface-container-low p-1 rounded-xl">
              <div className="flex items-center px-4 h-12">
                <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-full text-on-surface placeholder:text-on-surface-variant/40" placeholder="Tìm theo tiêu đề báo cáo..." type="text" />
              </div>
            </div>
            <div className="col-span-2 bg-surface-container-low p-1 rounded-xl">
              <select className="bg-transparent border-none focus:ring-0 text-sm w-full h-12 text-on-surface px-4 appearance-none cursor-pointer">
                <option value="all">Loại vi phạm: Tất cả</option>
                <option value="inappropriate">Nội dung không phù hợp</option>
                <option value="misinfo">Thông tin sai lệch</option>
                <option value="spam">Spam</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div className="col-span-2 bg-surface-container-low p-1 rounded-xl">
              <select className="bg-transparent border-none focus:ring-0 text-sm w-full h-12 text-on-surface px-4 appearance-none cursor-pointer">
                <option value="all">Trạng thái: Tất cả</option>
                <option value="pending">Chờ xử lý</option>
                <option value="resolved">Đã xử lý</option>
              </select>
            </div>
            <div className="col-span-4 flex gap-3">
              <button className="flex-1 bg-primary text-on-primary font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">filter_alt</span>
                Tìm kiếm
              </button>
              <button className="px-4 bg-surface-container-high text-[#dde5ff] rounded-xl hover:bg-surface-variant transition-all">
                <span className="material-symbols-outlined">refresh</span>
              </button>
            </div>
          </div>

          {/* Editorial Table Container */}
          <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container/50">
                  <th className="py-5 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">STT</th>
                  <th className="py-5 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Người báo cáo</th>
                  <th className="py-5 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Tiêu đề báo cáo</th>
                  <th className="py-5 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Loại vi phạm</th>
                  <th className="py-5 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Ngày báo cáo</th>
                  <th className="py-5 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em]">Trạng thái</th>
                  <th className="py-5 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.1em] text-right">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="py-5 px-6 text-sm text-on-surface-variant font-mono">01</td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold">NH</div>
                      <span className="text-sm font-medium text-on-surface">Nguyễn Văn Hùng</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm font-medium text-on-surface">Sai lệch kiến thức luật GTĐB</td>
                  <td className="py-5 px-6">
                    <span className="text-xs px-2 py-1 bg-surface-variant text-on-primary-container rounded-md">Thông tin sai lệch</span>
                  </td>
                  <td className="py-5 px-6 text-sm text-on-surface-variant">14/10/2023</td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Chờ xử lý
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="text-xs font-bold py-2 px-4 rounded-lg border border-outline/30 text-primary hover:bg-primary/10 transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="py-5 px-6 text-sm text-on-surface-variant font-mono">02</td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-container">TL</div>
                      <span className="text-sm font-medium text-on-surface">Trần Thị Lan</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm font-medium text-on-surface">Spam quảng cáo dịch vụ thi hộ</td>
                  <td className="py-5 px-6">
                    <span className="text-xs px-2 py-1 bg-surface-variant text-on-primary-container rounded-md">Spam</span>
                  </td>
                  <td className="py-5 px-6 text-sm text-on-surface-variant">13/10/2023</td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Đã xử lý
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="text-xs font-bold py-2 px-4 rounded-lg border border-outline/30 text-primary hover:bg-primary/10 transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="py-5 px-6 text-sm text-on-surface-variant font-mono">03</td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-[10px] font-bold text-on-tertiary-container">QM</div>
                      <span className="text-sm font-medium text-on-surface">Quốc Minh</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm font-medium text-on-surface">Lời lẽ thô tục trong bình luận</td>
                  <td className="py-5 px-6">
                    <span className="text-xs px-2 py-1 bg-surface-variant text-on-primary-container rounded-md">Nội dung không phù hợp</span>
                  </td>
                  <td className="py-5 px-6 text-sm text-on-surface-variant">12/10/2023</td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Chờ xử lý
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="text-xs font-bold py-2 px-4 rounded-lg border border-outline/30 text-primary hover:bg-primary/10 transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="py-5 px-6 text-sm text-on-surface-variant font-mono">04</td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold text-on-primary-container">HT</div>
                      <span className="text-sm font-medium text-on-surface">Hoàng Thuấn</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm font-medium text-on-surface">Tài liệu học lái xe bị lỗi font</td>
                  <td className="py-5 px-6">
                    <span className="text-xs px-2 py-1 bg-surface-variant text-on-primary-container rounded-md">Khác</span>
                  </td>
                  <td className="py-5 px-6 text-sm text-on-surface-variant">11/10/2023</td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Đã xử lý
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="text-xs font-bold py-2 px-4 rounded-lg border border-outline/30 text-primary hover:bg-primary/10 transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 5 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="py-5 px-6 text-sm text-on-surface-variant font-mono">05</td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-container">BA</div>
                      <span className="text-sm font-medium text-on-surface">Bảo An</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm font-medium text-on-surface">Giảng viên hướng dẫn sai kỹ thuật</td>
                  <td className="py-5 px-6">
                    <span className="text-xs px-2 py-1 bg-surface-variant text-on-primary-container rounded-md">Thông tin sai lệch</span>
                  </td>
                  <td className="py-5 px-6 text-sm text-on-surface-variant">10/10/2023</td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Chờ xử lý
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="text-xs font-bold py-2 px-4 rounded-lg border border-outline/30 text-primary hover:bg-primary/10 transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 6 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="py-5 px-6 text-sm text-on-surface-variant font-mono">06</td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-[10px] font-bold text-on-tertiary-container">VT</div>
                      <span className="text-sm font-medium text-on-surface">Văn Tiến</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm font-medium text-on-surface">Video hướng dẫn bị nhòe</td>
                  <td className="py-5 px-6">
                    <span className="text-xs px-2 py-1 bg-surface-variant text-on-primary-container rounded-md">Khác</span>
                  </td>
                  <td className="py-5 px-6 text-sm text-on-surface-variant">09/10/2023</td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Đã xử lý
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="text-xs font-bold py-2 px-4 rounded-lg border border-outline/30 text-primary hover:bg-primary/10 transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 7 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="py-5 px-6 text-sm text-on-surface-variant font-mono">07</td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold text-on-primary-container">LP</div>
                      <span className="text-sm font-medium text-on-surface">Lâm Phong</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm font-medium text-on-surface">Lừa đảo đóng phí hồ sơ rẻ</td>
                  <td className="py-5 px-6">
                    <span className="text-xs px-2 py-1 bg-surface-variant text-on-primary-container rounded-md">Spam</span>
                  </td>
                  <td className="py-5 px-6 text-sm text-on-surface-variant">08/10/2023</td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Chờ xử lý
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="text-xs font-bold py-2 px-4 rounded-lg border border-outline/30 text-primary hover:bg-primary/10 transition-all">Xem chi tiết</button>
                  </td>
                </tr>
                {/* Row 8 */}
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="py-5 px-6 text-sm text-on-surface-variant font-mono">08</td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-container">NK</div>
                      <span className="text-sm font-medium text-on-surface">Ngọc Khánh</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm font-medium text-on-surface">Link giả mạo website trường lái</td>
                  <td className="py-5 px-6">
                    <span className="text-xs px-2 py-1 bg-surface-variant text-on-primary-container rounded-md">Thông tin sai lệch</span>
                  </td>
                  <td className="py-5 px-6 text-sm text-on-surface-variant">07/10/2023</td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Đã xử lý
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="text-xs font-bold py-2 px-4 rounded-lg border border-outline/30 text-primary hover:bg-primary/10 transition-all">Xem chi tiết</button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination Footer */}
            <div className="p-6 bg-surface-container-low border-t border-outline-variant/10 flex items-center justify-between">
              <p className="text-sm text-on-surface-variant">Hiển thị 8 trong số 15 báo cáo</p>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-outline-variant/20 hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-on-primary font-bold shadow-lg shadow-primary/20">1</button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-outline-variant/20 hover:bg-surface-container transition-all text-on-surface">2</button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-outline-variant/20 hover:bg-surface-container transition-all text-on-surface">3</button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center border border-outline-variant/20 hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contextual Insight Cards (Asymmetric Layout Extra) */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="col-span-1 bg-surface-container-low p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined !text-7xl">trending_up</span>
              </div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">Tỉ lệ giải quyết</p>
              <h3 className="text-4xl font-extrabold text-on-surface mb-4">92%</h3>
              <div className="w-full bg-outline-variant/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[92%]"></div>
              </div>
            </div>
            <div className="col-span-2 bg-gradient-to-br from-surface-container-low to-surface-variant p-8 rounded-2xl border border-outline/5">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold text-on-surface mb-2">Phân tích vi phạm hàng tuần</h4>
                  <p className="text-sm text-on-surface-variant max-w-sm">"Thông tin sai lệch" tăng 12% so với tuần trước. Hãy cập nhật các bộ câu hỏi mới nhất để đồng bộ kiến thức.</p>
                </div>
                <div className="flex gap-2">
                  <div className="h-16 w-3 bg-primary/20 rounded-full self-end"></div>
                  <div className="h-24 w-3 bg-primary/40 rounded-full self-end"></div>
                  <div className="h-12 w-3 bg-primary/20 rounded-full self-end"></div>
                  <div className="h-32 w-3 bg-primary rounded-full self-end"></div>
                  <div className="h-20 w-3 bg-primary/60 rounded-full self-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAB for quick action */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};

export default CommunityReportsWithModal;
