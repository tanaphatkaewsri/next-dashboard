import village from '@/app/ui/village.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SideNav from './sidenav';
import FooterNav from './footer';

// const menu = [
//   { key: 'About', name: 'เกี่ยวกับสทบ.', href: '/villagefund' },
//   { key: 'News', name: 'ข่าวและกิจกรรม', href: '/villagefund' },
//   { key: 'Infomation', name: 'ศูนย์ข้อมูล', href: '/villagefund' },
//   { key: 'Service', name: 'บริการ', href: '/villagefund' },
//   { key: 'Project', name: 'โครงการ', href: '/villagefund' },
//   { key: 'Contact', name: 'ติดต่อเรา', href: '/villagefund' },
// ];

// const menuJustice = [
//   { key: 'appeal', name: 'ช่องทางการร้องเรียนการทุจริต', href: '/villagefund' },
//   {
//     key: 'policyInformation',
//     name: 'นโยบาลมั่นคงปลอดภัยสารสนเทศ',
//     href: '/villagefund',
//   },

//   {
//     key: 'policyPrivacy',
//     name: 'นโยบาลคุ้มครองข้อมมูลส่วนบุคคล',
//     href: '/villagefund',
//   },
// ];

// const socialIcon = [
//   { key: 'fb', src: '/villagefunds/fb-icon.png' },
//   { key: 'yt', src: '/villagefunds/yt-icon.png' },
//   { key: 'tk', src: '/villagefunds/tk-icon.png' },
//   { key: 'ig', src: '/villagefunds/ig-icon.png' },
//   { key: 'gg', src: '/villagefunds/gg-icon.png' },
//   { key: 'x', src: '/villagefunds/x-icon.png' },
// ];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col border-2 border-black p-0">
      <SideNav />

      <div className={village.body}>
        <h1>Page</h1>
      </div>

      <FooterNav />
    </main>
  );
}
