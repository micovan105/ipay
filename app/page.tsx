'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Bell,
  ChevronRight,
  CircleHelp,
  Eye,
  GraduationCap,
  Headphones,
  History,
  Landmark,
  Menu,
  MoreHorizontal,
  QrCode,
  ScanLine,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WalletCards,
  Wifi,
  X,
} from 'lucide-react'

const services = [
  { label: 'Chuyển tiền\ntrong nước', icon: ArrowRight, tone: 'blue' },
  { label: 'Nạp tiền điện\nthoại', icon: Smartphone, tone: 'pink' },
  { label: 'Dịch vụ tiết\nkiệm', icon: WalletCards, tone: 'gold' },
  { label: 'Hóa đơn tiền\nđiện', icon: Search, tone: 'red' },
  { label: 'Hóa đơn tiền\nnước', icon: Sparkles, tone: 'blue' },
  { label: 'Hóa đơn\ntruyền hình ...', icon: MoreHorizontal, tone: 'blue', badge: 'Gợi ý' },
  { label: 'HomeLife', icon: Landmark, tone: 'pink', badge: 'Hot' },
  { label: 'Thanh toán\nhóa đơn', icon: ScanLine, tone: 'blue' },
  { label: 'Thanh toán\nhọc phí', icon: GraduationCap, tone: 'pink' },
]

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('Tổng quan')
  const [showBalance, setShowBalance] = useState(false)
  const [notice, setNotice] = useState('')

  const notify = (message: string) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2200)
  }

  return (
    <main className="ipay-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="topbar">
        <div className="brand"><span className="brand-mark">V</span><div><strong>VietinBank</strong><span>iPay Mobile</span></div></div>
        <div className="status">12:08 <span>⌁</span> <small>129 KB/S</small> <Wifi size={16} /> <span>▮▮▮</span> <span>▮ 71%</span></div>
        <nav className="header-actions" aria-label="Tiện ích">
          <button aria-label="Ưu đãi" onClick={() => notify('Bạn có 3 ưu đãi mới')} className="round-action crown">♛</button>
          <button aria-label="Thông báo" onClick={() => notify('Không có thông báo mới')} className="round-action"><Bell size={23} /><b>9+</b></button>
          <button aria-label="Cài đặt" onClick={() => notify('Mở cài đặt tài khoản')} className="round-action"><Settings size={24} /></button>
        </nav>
      </header>

      <section className="welcome-row">
        <div className="avatar"><span /></div>
        <div className="welcome-copy"><p>NGUYEN TIEN NAM</p><button onClick={() => { setLoggedIn(!loggedIn); notify(loggedIn ? 'Đã đăng xuất' : 'Đăng nhập thành công') }}>{loggedIn ? 'Đã đăng nhập' : 'Đăng nhập'} <ArrowRight size={18} /></button></div>
      </section>

      <section className="balance-card" aria-label="Số dư tài khoản">
        <div><p className="account-number">**** **** 6206</p><div className="balance-value">{showBalance ? '12,580,000' : '*** *** ***'} <span>VND</span><button aria-label="Hiện số dư" onClick={() => setShowBalance(!showBalance)}><Eye size={21} /></button></div></div>
        <button aria-label="Xem tài khoản" className="balance-next" onClick={() => notify('Đang mở chi tiết tài khoản')}><ArrowRight size={25} /></button>
        <div className="card-chip"><Wifi size={18} /><span>▣</span><i>›</i></div>
      </section>

      <div className="quick-links"><button onClick={() => notify('Danh mục tài chính')}><Landmark size={21} /> Danh mục tài chính</button><button onClick={() => notify('Lịch sử giao dịch')}><History size={21} /> Lịch sử giao dịch <ChevronRight size={17} /></button></div>

      <section className="content-section"><div className="section-heading"><h1>Chức năng yêu thích</h1><button onClick={() => notify('Bạn có thể sắp xếp chức năng')}>Tùy chỉnh</button></div><div className="service-grid">{services.map(({ label, icon: Icon, tone, badge }) => <button className="service-item" key={label} onClick={() => notify(label.replace('\n', ' '))}>{badge && <em className={`badge ${badge === 'Hot' ? 'hot' : ''}`}>{badge}</em>}<span className={`service-icon ${tone}`}><Icon size={28} /></span><span>{label.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</span></button>)}</div></section>

      <nav className="bottom-nav" aria-label="Điều hướng chính">{[['Tổng quan', WalletCards], ['Hỗ trợ', Headphones], ['Quét mã', QrCode], ['Tra cứu', Search]].map(([label, Icon]) => <button key={label as string} className={activeTab === label ? 'active' : ''} onClick={() => { setActiveTab(label as string); notify(label as string) }}><Icon size={23} /><span>{label as string}</span></button>)}</nav>
      {notice && <div className="toast" role="status"><ShieldCheck size={17} /> {notice}<button onClick={() => setNotice('')} aria-label="Đóng"><X size={15} /></button></div>}
    </main>
  )
}
