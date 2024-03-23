'use client';
import { useRouter, usePathname, Link } from '@/navigation';
import { useStore } from '@/store/store';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';

export default function LanguageChanger() {
  const pathname = usePathname();
  const router = useRouter();
  let params = useParams();
  const locale = useLocale();

  const { postDetail, savePost }: any = useStore((state) => state);

  const handleChange = (e: any) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      {pathname, params},
      {locale: e.target.value}
    );
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="vi">Vietnam</option>
    </select>
  );
};
