import React from 'react';

const PendingPostsWithModal = () => {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] z-50 bg-[#081328] flex flex-col py-8 gap-y-6 font-['Be_Vietnam_Pro'] text-sm tracking-wide">
        <div className="px-8 mb-4">
          <h1 className="text-xl font-bold text-[#dde5ff] uppercase tracking-tighter">The Atelier</h1>
          <p className="text-xs text-[#95abde] mt-1">Driving Instructor CMS</p>
        </div>
        <nav className="flex flex-col gap-y-2">
          <a className="font-medium text-[#95abde] hover:text-[#dde5ff] pl-4 transition-colors py-3 flex items-center gap-x-3 hover:bg-[#091935]" href="#">
            <span>DIỄN ĐÀN</span>
          </a>
          <a className="font-bold text-[#dde5ff] border-l-2 border-[#bdc7db] pl-4 transition-all py-3 flex items-center gap-x-3 bg-[#091935]" href="#">
            <span>KIỂM DUYỆT</span>
          </a>
          <a className="font-medium text-[#95abde] hover:text-[#dde5ff] pl-4 transition-colors py-3 flex items-center gap-x-3 hover:bg-[#091935]" href="#">
            <span>BÁO CÁO</span>
          </a>
          <a className="font-medium text-[#95abde] hover:text-[#dde5ff] pl-4 transition-colors py-3 flex items-center gap-x-3 hover:bg-[#091935]" href="#">
            <span>LỊCH TRÌNH</span>
          </a>
          <a className="font-medium text-[#95abde] hover:text-[#dde5ff] pl-4 transition-colors py-3 flex items-center gap-x-3 hover:bg-[#091935]" href="#">
            <span>HỌC VIÊN</span>
          </a>
        </nav>
        <div className="mt-auto px-8 pt-8 border-t border-outline-variant/10">
          <div className="flex items-center gap-3">
            <img alt="Instructor Profile" className="w-10 h-10 rounded-xl object-cover" data-alt="professional portrait of a senior driving instructor in a clean modern uniform, soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJkL2eoVucpI7VJcMv73PJEsIsO-pV9bdK_sbF535k2fNeZivj4_dlyJBMOi7m67yCOoMxoEvRHEg5bD6d2UFa9WXfynfu3IU1lNr_YcxUhMKCGRlKGpCM31eDmiWnyZSlMAJpQeehyS8659_lFpldXhI9rReTEG2eDRDqhFfv4_5JYW9dpUwh5MZtHA52Cx6tCBISR6OLkaY6B5IdDW-PRDRzTpJhw5DF1UYMxU2--aVS0CxZlylmRyVr6TYWY8_QKQqUIUbbn44" />
            <div className="overflow-hidden">
              <p className="text-on-surface font-semibold truncate">Minh Hoàng</p>
              <p className="text-[#95abde] text-xs">Quản trị viên</p>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 right-0 w-[calc(100%-280px)] z-40 bg-[#070e1d]/80 backdrop-blur-xl border-b border-[#314774]/20 flex justify-between items-center h-16 px-8">
        <div className="flex items-center gap-4 bg-surface-container rounded-xl px-4 py-1.5 w-96 border border-outline-variant/10 focus-within:ring-1 focus-within:ring-[#314774]/50 transition-all">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-sm w-full text-on-surface placeholder:text-on-surface-variant" placeholder="Tìm kiếm bài viết..." type="text" />
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-[#dde5ff] transition-colors relative">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-[#dde5ff] transition-colors">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
          </button>
          <div className="h-8 w-[1px] bg-outline-variant/20 mx-2"></div>
          <img alt="Instructor Avatar" className="w-8 h-8 rounded-lg" data-alt="minimalist abstract profile avatar with geometric blue patterns on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmLcgHNTlF6Ue5zrichUeHfkqclSj09YLIVGHZ8fm8MN570uxzuTvFVddkV2cceopfQyZ_ajE1RqKcNjCoQlErPwslVTSXhrIfltZwwLV1hQ6sVzz-ykKb99doI01y1xqr2RHfF3ZfiOb2vjpBMxu3r-jN3-y6YtO6UNXczKx9ntjoYL2UVfSlym5DI7i6dBBzUL56sWX4t8gDPj8i-6Pb1B3R6uKTfC1nFUf16E-7keKRbq3mao2-f47ops28kI9anzgd07gW6qU" />
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-[280px] pt-24 pb-12 px-10 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Bài viết chờ duyệt</h2>
              <p className="text-on-surface-variant text-lg">Hiện có <span className="text-primary font-bold">12</span> nội dung đang cần kiểm duyệt hệ thống.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-surface-container-high text-on-surface border border-outline-variant/30 rounded-xl hover:bg-surface-variant transition-all font-medium text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-base">filter_list</span>
                Lọc nâng cao
              </button>
              <button className="px-6 py-2.5 bg-primary text-on-primary rounded-xl hover:opacity-90 transition-all font-bold text-sm">
                Phê duyệt hàng loạt
              </button>
            </div>
          </header>

          {/* Filter Bar */}
          <section className="bg-surface-container-low rounded-xl p-6 mb-8 border border-outline-variant/10 shadow-sm flex flex-wrap gap-6 items-center">
            <div className="flex flex-col gap-1.5 min-w-[200px]">
              <label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant px-1">Danh mục</label>
              <select className="bg-surface border border-outline-variant/20 rounded-lg text-sm px-4 py-2 text-on-surface focus:ring-1 focus:ring-primary outline-none appearance-none cursor-pointer">
                <option>Tất cả danh mục</option>
                <option>Lý thuyết B2</option>
                <option>Kỹ thuật lái xe</option>
                <option>Luật giao thông</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 min-w-[200px]">
              <label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant px-1">Thời gian</label>
              <select className="bg-surface border border-outline-variant/20 rounded-lg text-sm px-4 py-2 text-on-surface focus:ring-1 focus:ring-primary outline-none">
                <option>Mới nhất</option>
                <option>Cũ nhất</option>
                <option>Ưu tiên cao</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 min-w-[200px]">
              <label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant px-1">Tác giả</label>
              <input className="bg-surface border border-outline-variant/20 rounded-lg text-sm px-4 py-2 text-on-surface focus:ring-1 focus:ring-primary outline-none" placeholder="Tên giảng viên..." type="text" />
            </div>
            <div className="ml-auto self-end">
              <button className="text-primary hover:underline text-sm font-medium px-4">Xóa bộ lọc</button>
            </div>
          </section>

          {/* Content Table */}
          <div className="bg-surface-container rounded-xl overflow-hidden shadow-2xl border border-outline-variant/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/10">
                  <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant">Tác giả</th>
                  <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant w-1/2">Tiêu đề bài viết</th>
                  <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant">Chuyên mục</th>
                  <th className="px-6 py-5 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {/* Row 1 (Targeted for Modal) */}
                <tr className="hover:bg-[#374151]/40 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold text-on-primary-container">AN</div>
                      <span className="font-medium text-on-surface text-sm">Lê Anh Nam</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Mẹo thi lý thuyết B2: Nhận diện biển báo cực nhanh</p>
                    <p className="text-xs text-on-surface-variant mt-1">Gửi lúc 09:45 - 24/10/2023</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-surface-variant text-[#95abde] text-[10px] font-bold uppercase rounded-full tracking-wider border border-outline-variant/20">Lý thuyết</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="px-3 py-1.5 border border-outline-variant rounded-lg text-xs font-semibold hover:bg-surface-container-high transition-all text-on-surface">Xem chi tiết</button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-error-container text-error hover:bg-error/10 transition-all">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-[#374151]/40 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-[10px] font-bold text-on-tertiary-container">TH</div>
                      <span className="font-medium text-on-surface text-sm">Trần Thanh Hà</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-semibold text-on-surface">Hướng dẫn lùi chuồng dọc trong 3 bước cơ bản</p>
                    <p className="text-xs text-on-surface-variant mt-1">Gửi lúc 14:20 - 23/10/2023</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-surface-variant text-[#95abde] text-[10px] font-bold uppercase rounded-full tracking-wider border border-outline-variant/20">Thực hành</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="px-3 py-1.5 border border-outline-variant rounded-lg text-xs font-semibold hover:bg-surface-container-high transition-all text-on-surface">Xem chi tiết</button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-error-container text-error hover:bg-error/10 transition-all">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-[#374151]/40 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-container">DQ</div>
                      <span className="font-medium text-on-surface text-sm">Đặng Quốc Quân</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-semibold text-on-surface">Những lưu ý về nồng độ cồn theo nghị định mới 2024</p>
                    <p className="text-xs text-on-surface-variant mt-1">Gửi lúc 11:15 - 23/10/2023</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-surface-variant text-[#95abde] text-[10px] font-bold uppercase rounded-full tracking-wider border border-outline-variant/20">Luật GT</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="px-3 py-1.5 border border-outline-variant rounded-lg text-xs font-semibold hover:bg-surface-container-high transition-all text-on-surface">Xem chi tiết</button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-error-container text-error hover:bg-error/10 transition-all">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="px-6 py-4 bg-surface-container-low flex items-center justify-between border-t border-outline-variant/10">
              <span className="text-xs text-on-surface-variant">Hiển thị 1 - 10 của 12 bài viết</span>
              <div className="flex gap-1">
                <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                <button className="w-8 h-8 rounded flex items-center justify-center bg-primary text-on-primary text-xs font-bold">1</button>
                <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors text-xs font-medium">2</button>
                <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal: Chi tiết bài viết (State: Open) */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-lowest/80 backdrop-blur-md">
        <div className="bg-surface-container-low w-full max-w-3xl max-h-[921px] overflow-hidden rounded-2xl shadow-[0px_20px_40px_rgba(0,0,0,0.4)] border border-outline-variant/20 flex flex-col">
          {/* Modal Header */}
          <div className="px-8 py-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-high/50">
            <div>
              <span className="text-[10px] font-extrabold text-primary tracking-widest uppercase mb-1 block">Chi tiết kiểm duyệt</span>
              <h3 className="text-xl font-bold text-on-surface">Mẹo thi lý thuyết B2: Nhận diện biển báo</h3>
            </div>
            <button className="w-10 h-10 rounded-full hover:bg-surface-container-highest flex items-center justify-center transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Modal Body (Content) */}
          <div className="flex-1 overflow-y-auto px-10 py-8 font-['Inter'] leading-relaxed text-on-surface-variant">
            <div className="mb-8 flex items-center gap-6 p-4 rounded-xl bg-surface-container border border-outline-variant/5">
              <img alt="Author" className="w-12 h-12 rounded-full border-2 border-primary/20" data-alt="close up headshot of a smiling asian male driving teacher, clean lighting, soft background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkIYC395cAGY1WBsRHBgC1tL1-NMb-C-poPZslbS7DlHvNJB3oJ55m3NBNOri6n7ofwrlCNP6y5Iek_AdLhEcUzY31U25ku3dn03YVNgwK7qquM_iSO_sn_-UPQUtuxoyHNrTitOPIJj9yxYdYsiIr4fSscCObjIwNy9XqbddCzsvBXihl74g6Yb4VdYBL4hsOWSHBZR0yt7U7q8D2hguko1RljQLVy4g5r5LzKJF0u1aZ5DELfCgjBN0golzQXMr96WnwZuT6Vns" />
              <div>
                <p className="text-sm font-bold text-on-surface">Giảng viên: Lê Anh Nam</p>
                <p className="text-xs">Chuyên môn: Lý thuyết & Luật giao thông</p>
                <p className="text-xs opacity-60">Thâm niên: 8 năm</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-[10px] uppercase font-bold text-on-surface-variant">Ngày gửi</p>
                <p className="text-sm font-medium text-on-surface">24 Th10, 2023</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h4 className="text-on-surface font-headline font-bold text-lg mb-4">I. Nguyên tắc "Vàng" trong nhận diện biển báo</h4>
              <p className="mb-4">Phần thi lý thuyết 600 câu luôn là nỗi ám ảnh với nhiều học viên. Tuy nhiên, nếu nắm vững quy tắc "Hình dáng - Màu sắc", bạn có thể loại trừ được 70% phương án sai ngay lập tức.</p>

              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-error-container/10 p-4 rounded-lg border border-error-container/20">
                  <p className="font-bold text-error flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                    Biển Nguy Hiểm
                  </p>
                  <p className="text-xs">Hình tam giác đều, viền đỏ, nền vàng, hình vẽ màu đen.</p>
                </div>
                <div className="bg-primary-container/10 p-4 rounded-lg border border-primary-container/20">
                  <p className="font-bold text-primary flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                    Biển Chỉ Dẫn
                  </p>
                  <p className="text-xs">Hình vuông hoặc chữ nhật, nền xanh lam, hình vẽ trắng.</p>
                </div>
              </div>

              <h4 className="text-on-surface font-headline font-bold text-lg mb-4">II. Phân biệt các loại biển cấm</h4>
              <p className="mb-4">Quy tắc quan trọng nhất cần nhớ: <strong>Cấm xe nhỏ thì cấm luôn xe lớn, nhưng cấm xe lớn không cấm xe nhỏ.</strong></p>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-sm">
                <li>Cấm ô tô con (Biển 103a) =&gt; Cấm luôn xe tải, xe khách, máy kéo.</li>
                <li>Cấm xe tải (Biển 106a) =&gt; Không cấm ô tô con và xe khách.</li>
                <li>Cấm máy kéo (Biển 109) =&gt; Không cấm ô tô con, xe tải và xe khách.</li>
              </ul>

              <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-highest relative group mb-6">
                <img alt="Traffic Signs" className="w-full h-full object-cover opacity-60" data-alt="a professional instructional diagram of international traffic signs, clear typography, educational layout, dark blue theme" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYEzqJpXxNwbDEkjvkrN_fPDdwPCo2Jnxu2nGoQnRraMaKOL1Y2Y0AevXSCNgYj0CPn6yoyY-t7Gvmb0_9_ZV3ffeTJGKg2N6xEV8d8FZS0DCr3X3j3xltqf61cGA5LJ4zKpqgVRyrTp_4-JJdkJuXWXvbaRP7WUEw1QK7XyfAtmvMf-AtesJ3J4dMrXNLMSkwm1leEZkmLOmAFtOvO9eoYsEFK_kk-E_np8ASYUjWeYVsPYt1GW7cWSQ9vRSamY-H0SGHHbsBfbE" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-4 py-2 bg-surface-lowest/80 backdrop-blur-sm rounded-lg border border-outline-variant/20 text-xs font-medium">Ảnh minh họa bài viết</span>
                </div>
              </div>

              <p>Hy vọng với những mẹo nhỏ này, các học viên sẽ tự tin hơn trong kỳ thi sắp tới. Chúc các bạn ôn tập tốt và đạt kết quả cao nhất!</p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-8 py-6 border-t border-outline-variant/10 flex justify-end gap-3 bg-surface-container-low">
            <button className="px-6 py-2 border border-error-container text-error hover:bg-error/10 transition-all rounded-xl font-bold text-sm">Từ chối</button>
            <button className="px-8 py-2 bg-primary text-on-primary hover:opacity-90 transition-all rounded-xl font-extrabold text-sm shadow-lg shadow-primary/10">PHÊ DUYỆT NGAY</button>
          </div>
        </div>
      </div>

      {/* Toast: Success Notification */}
      <div className="fixed bottom-8 right-8 z-[200] flex items-center gap-4 bg-surface-container-highest/80 backdrop-blur-xl border border-outline/15 rounded-xl px-6 py-4 shadow-[0px_20px_40px_rgba(0,0,0,0.4)] animate-in fade-in slide-in-from-bottom-5">
        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <div>
          <p className="text-sm font-bold text-on-surface">Thành công!</p>
          <p className="text-xs text-on-surface-variant">Bài viết đã được phê duyệt và hiển thị công khai.</p>
        </div>
        <button className="ml-4 text-on-surface-variant hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>
    </div>
  );
};

export default PendingPostsWithModal;
