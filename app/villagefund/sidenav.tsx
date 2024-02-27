import village from '@/app/ui/village.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SearchForm from './searchForm';
import UserDropdown from './dropdown';

const menuLeft = [
  { key: 'About', name: 'เกี่ยวกับสทบ.', href: '/villagefund' },
  { key: 'News', name: 'ข่าวและกิจกรรม', href: '/villagefund' },
  { key: 'Infomation', name: 'ศูนย์ข้อมูล', href: '/villagefund' },
  { key: 'Service', name: 'บริการ', href: '/villagefund' },
  { key: 'Project', name: 'โครงการ', href: '/villagefund' },
  { key: 'Contact', name: 'ติดต่อเรา', href: '/villagefund' },
];

export default function SideNav() {
  return (
    <>
      <div className={village.title}>
        <div className="lg:pl-5% hidden lg:block">
          <p className="">
            สำนักงานกองทุนหมู่บ้าน และชุมชนเมืองแช่งชาติ (สทบ.) National Village
            and Urban Community Fund Office
          </p>
        </div>

        <div className="lg:pr-5% max-lg:pl-2% flex">
          <p>ยืนยันชื่อ URL</p>
          <Image
            src="/villagefunds/lock-icon.png"
            width={20}
            height={20}
            alt="lock-icon"
          />
          <p className={village.greenText}>https://</p>
          <p>villagefund.or.th</p>
        </div>
      </div>

      <div className="hidden max-lg:flex h-20">
        <div className={village.logoMenu}>
          <Image
            src="/villagefunds/Logos.png"
            width={50}
            height={50}
            alt="logo-img"
          />
        </div>
        <SearchForm />
        <UserDropdown />
      </div>

      <div className="flex h-20 justify-center max-lg:hidden">
        <div className={village.groupOfMenu}>
          
          <div className={village.groupOfMenuLeft}>

          <div className={village.logoMenu}>
            <Image
              src="/villagefunds/Logos.png"
              width={40}
              height={40}
              alt="logo-img"
            />
          </div>
          
            {menuLeft.map((eachMenu) => {
              return (
                <Link
                  className={village.eachMenu}
                  key={eachMenu.key}
                  href={eachMenu.href}
                >
                  <Image
                    src="/villagefunds/red-dot.png"
                    width={7}
                    height={7}
                    alt="red-dot"
                    className={village.redDot}
                  ></Image>
                  <p>{eachMenu.name}</p>
                </Link>
              );
            })}
          </div>
          <div className={village.groupOfMenuRight}>
            <Link key="search" href="">
              <Image
                src="/villagefunds/search-icon.png"
                width={24}
                height={24}
                alt="search-icon"
              ></Image>
            </Link>

            <div className={village.groupIconRss}>
              <Link key="rss" href="" className="flex gap-1">
                <p className="font-bold">RSS</p>

                <Image
                  src="/villagefunds/rss-icon.png"
                  width={24}
                  height={24}
                  alt="search-icon"
                ></Image>
              </Link>
            </div>

            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-md inline-flex items-center rounded-lg px-5 py-2.5 text-center font-medium text-white dark:bg-blue-800"
              type="button"
            >
              TH{' '}
              <svg
                className="ms-3 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="block lg:hidden">
        <p>Nav Mobile</p>
      </div> */}
    </>
  );
}
