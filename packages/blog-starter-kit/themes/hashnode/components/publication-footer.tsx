// MobX Stuff
import Image from 'next/legacy/image';

import { HashnodeLogoIconV2 } from './icons/svgs';
import { resizeImage } from '../utils/image';
import Link from 'next/link';

// type PublicationFooterProps = Pick<Publication, 'title' | 'postsCount' | 'imprint' | 'isTeam'> &
//   Pick<Publication['preferences'], 'disableFooterBranding' | 'logo' | 'darkMode'> & {
//     authorName: string;
//   }; // TODO: types need to be fixed

function PublicationFooter(props: any) {
  const { isTeam, authorName, title, imprint, disableFooterBranding, logo } = props;

  return (
    <footer className="blog-footer-area -mt-px border-t bg-slate-100 px-5 py-10 text-center text-slate-800 dark:border-slate-800 dark:bg-black dark:text-slate-500 md:px-10 md:py-12 lg:py-20">
      {imprint && (
        <section className="blog-impressum mx-auto mb-10 rounded-lg border bg-white px-4 py-6 text-left dark:border-slate-800 dark:bg-transparent lg:w-3/4 xl:w-2/3">
          <p className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Impressum
          </p>
          {/* eslint-disable-next-line react/self-closing-comp */}
          <div
            className="prose mx-auto w-full dark:prose-dark"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: `${imprint}` }}
          ></div>
        </section>
      )}
      <div className="flex flex-col items-center justify-center">
        <div className="mb-12 flex flex-col flex-wrap items-center">
          <p className="mb-2 text-slate-600 dark:text-slate-300">
           All Rights Reserved, &copy;{new Date().getFullYear()} {title || `${authorName}'s Blog`}
          </p>
          <p>Made with ❤️ by <a href="https://x.com/solimanware" className='mb-2 text-slate-600 dark:text-slate-300'>Soliman</a></p>
        </div>
      </div>
    </footer>
  );
}

export default PublicationFooter;
