import village from '@/app/ui/village.module.css';
import SideNav from './sidenav';
import FooterNav from './footer';

export default function Page() {
  return (
    <main className={village.container}>
      <SideNav />

      <div className={village.body}>
        <h1>Page</h1>
      </div>

      <FooterNav />
    </main>
  );
}
