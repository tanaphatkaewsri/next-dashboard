import village from '@/app/ui/village.module.css';
import Image from 'next/image';
import Link from 'next/link';

const menu = [
  { key: 'About', name: 'เกี่ยวกับสทบ.', href: '/villagefund' },
  { key: 'News', name: 'ข่าวและกิจกรรม', href: '/villagefund' },
  { key: 'Infomation', name: 'ศูนย์ข้อมูล', href: '/villagefund' },
  { key: 'Service', name: 'บริการ', href: '/villagefund' },
  { key: 'Project', name: 'โครงการ', href: '/villagefund' },
  { key: 'Contact', name: 'ติดต่อเรา', href: '/villagefund' },
];

const menuJustice = [
  { key: 'appeal', name: 'ช่องทางการร้องเรียนการทุจริต', href: '/villagefund' },
  {
    key: 'policyInformation',
    name: 'นโยบาลมั่นคงปลอดภัยสารสนเทศ',
    href: '/villagefund',
  },

  {
    key: 'policyPrivacy',
    name: 'นโยบาลคุ้มครองข้อมมูลส่วนบุคคล',
    href: '/villagefund',
  },
];

const socialIcon = [
  { key: 'fb', src: '/villagefunds/fb-icon.png' },
  { key: 'yt', src: '/villagefunds/yt-icon.png' },
  { key: 'tk', src: '/villagefunds/tk-icon.png' },
  { key: 'ig', src: '/villagefunds/ig-icon.png' },
  { key: 'gg', src: '/villagefunds/gg-icon.png' },
  { key: 'x', src: '/villagefunds/x-icon.png' },
];

export default function FooterNav() {
  return (
    <div className="flex flex-col">
      <div className={village.footer}>
        <Image
          src="/villagefunds/bg-footer.png"
          width={1000}
          height={500}
          alt="bg-footer"
          className={village.bgFooter}
        />
        <div className={village.footerContent}>
          <div className={village.logoFooter}>
            <Image
              src="/villagefunds/Logos.png"
              width={55}
              height={55}
              alt="logo-img"
            />
          </div>
          <div className={village.containerFooter}>
            <div className={village.contentFooter}>
              <div className={village.contentFooterLeft}>
                <div className={village.contentFooterTop}>
                  <div className="flex gap-2">
                    <p className="font-bold">ที่ตั้งสำนักงานส่วนกลาง</p>
                    <Link key="navigate-key" href="" className="z-10">
                      <Image
                        src="/villagefunds/navigate-icon.png"
                        width={20}
                        height={15}
                        alt="navigate-icon"
                      />
                    </Link>
                  </div>

                  <p className="text-sm">
                    200 หมู่ 4 อาคารจัสมิน อินเตอร์เนชั่นแนล ทาวเวอร์ ชั้น 24
                    ถ.แจ้งวัฒนะ ปากเกร็ด นนทบุรี 11120 (National Village and
                    Urban Community fund Office , 200, moo 4 , Jasmine
                    International Tower , 24 th Floor, Chaengwatana Road ,
                    Pakkred District , Pakkred Sub-district , Nonthaburi 11120 ,
                    Thailand.)
                  </p>
                </div>
                <div className={village.contentFooterBottom}>
                  <p className="font-bold">ช่องทางการติดต่อ</p>
                  <div className="flex gap-2 max-md:items-start">
                    <Image
                      src="/villagefunds/phone-icon.png"
                      width={20}
                      height={15}
                      alt="phone-icon"
                    />
                    <div className="flex flex-wrap">
                      <p className="font-bold underline ">0-2100-4203, </p>
                      <p className="font-bold underline">0-2100-4205,</p>
                      <p className="font-bold underline">0-2100-4206</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Image
                      src="/villagefunds/add-icon.png"
                      width={20}
                      height={15}
                      alt="add-icon"
                    />
                    <Link className="z-10" key="e-mail" href="">
                      <p className="font-bold underline">
                        saraban@villagefund.or.th
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className={village.contentFooterMiddle}> */}
              <div className="max-lg:hidden lg:flex lg:w-1/4 lg:justify-center">
                <div className="flex flex-col gap-2">
                  <Link className="z-10" key="home" href="">
                    <p className="font-bold underline">หน้าหลัก</p>
                  </Link>
                  {menu.map((eachMenu) => {
                    return (
                      <Link
                        className="z-10 flex flex-col font-bold"
                        key={eachMenu.key}
                        href={eachMenu.href}
                      >
                        <p>{eachMenu.name}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
              {/* <div className={village.contentFooterRight}> */}
              <div className="max-lg:hidden">
                <div className="flex flex-col gap-2">
                  <Link className="z-10" key="firstJustice" href="">
                    <p className="font-bold underline">คุณธรรมและความโปร่งใส</p>
                  </Link>

                  {menuJustice.map((eachMenu) => {
                    return (
                      <Link
                        className="z-10 flex flex-col font-bold"
                        key={eachMenu.key}
                        href={eachMenu.href}
                      >
                        {eachMenu.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <hr className={village.hrLine} />

            <div className="flex max-lg:flex-col max-lg:items-center max-lg:justify-center lg:justify-between">
              <div className="flex gap-7 max-lg:mb-7">
                <Link className="z-10" key="policy-footer" href="">
                  <p className="text-sm underline">นโยบายความเป็นส่วนตัว</p>
                </Link>
                <Link className="z-10" key="cookie" href="">
                  <p className="text-sm underline">ตั้งค่าคุ๊กกี้</p>
                </Link>
              </div>

              <div className={village.groupIcon}>
                {socialIcon.map((icon) => {
                  return (
                    <Link key={icon.key} href="" className="z-10">
                      <Image
                        src={icon.src}
                        width={24}
                        height={24}
                        alt={'icon-' + icon.key}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={village.footerTitle}>
        <p>© 2023 สำนักงานกองทุนหมู่บ้านและชุมชนเมืองแห่งชาติ (สทบ.)</p>
      </div>
    </div>
  );
}
