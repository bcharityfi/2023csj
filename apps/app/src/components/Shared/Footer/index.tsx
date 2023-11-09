import { FC } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * A component that displays a footer that comptains internal and
 * external links to information pages and social media links
 */

const Footer: FC = () => {
  const { t } = useTranslation('common', {
    keyPrefix: 'components.shared.footer'
  })

  return (
    <footer className="overflow-auto bg-accent-content dark:bg-info-content text-center text-neutral-600 dark:text-neutral-200 lg:text-center">
      <div className="mx-6 py-2 pt-5 px-5 lg:px-20">
        <div className="grid lg:grid-cols-3">
          <div className="text-left max-lg:hidden dark:text-gray-300 col-span-5 lg:col-span-2 pr-6">
            <div>
              <h6
                className="mb-2 font-semibold uppercase lg:text-2xl"
                suppressHydrationWarning
              >
                {t('about')}
              </h6>
            </div>
            <div>
              <p
                className="text-xl dark:text-gray-400"
                suppressHydrationWarning
              >
                {t('about-content')}
              </p>
            </div>
          </div>

          <div className="text-left col-span-2 lg:col-span-1 text-center">
            <h6
              className="mb-4 text-left flex justify-center font-semibold uppercase lg:text-2xl"
              suppressHydrationWarning
            >
              {t('links')}
            </h6>
            <p className="mb-4 text-gray-400 text-lg">
              <a
                href="https://polygive.gitbook.io/bcharity/"
                target="_blank"
                className="text-neutral-600 dark:text-neutral-200"
                suppressHydrationWarning
              >
                {t('mission')}
              </a>
            </p>
            <p className="mb-4 text-gray-400 text-lg">
              <a
                href="/tos"
                className="text-neutral-600 dark:text-neutral-200"
                suppressHydrationWarning
              >
                {t('tos')}
              </a>
            </p>
            <p className="mb-4 text-gray-400">
              <a
                href="/privacypolicy"
                className="text-neutral-600 dark:text-neutral-200 text-lg"
                suppressHydrationWarning
              >
                {t('privacy')}
              </a>
            </p>{' '}
            <p className="mb-4">
              <a
                href="/cookies"
                className="text-neutral-600 dark:text-neutral-200 text-lg"
                suppressHydrationWarning
              >
                {t('cookies')}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-5 sm:px-5 lg:px-24">
        <hr className="h-px my-0 bg-secondary-content border-1 dark:bg-base-200"></hr>
      </div>

      <div className="lg:px-24 overflow-y-auto h-20 flex items-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 max-xl:justify-center justify-between">
        <div className="mr-12 max-xl:hidden lg:text-xl">
          <a href="https://ecssen.ca" target="_blank" suppressHydrationWarning>
            {t('bcharity')} #8034586058609
          </a>
        </div>
        <div className="content-center">
          <div className="flex justify-center">
            <a
              href="https://twitter.com/BCharityFi"
              target="_blank"
              className="p-2 border-solid border-2 border-violet-300 dark:border-violet-900 dark:bg-base-300 rounded-full bg-violet-200 hover:bg-violet-300  dark:hover:bg-violet-800 mr-6 text-neutral-600 dark:text-neutral-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/bcharityofficial/"
              target="_blank"
              className="p-2 border-solid border-2 border-violet-300 dark:border-violet-900 dark:bg-base-300 rounded-full bg-violet-200 hover:bg-violet-300 dark:hover:bg-violet-800 mr-6 text-neutral-600 dark:text-neutral-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://github.com/bcharityfi/2023csj"
              target="_blank"
              className="p-2 border-solid border-2 border-violet-300 dark:border-violet-900 dark:bg-base-300 rounded-full bg-violet-200 hover:bg-violet-300 dark:hover:bg-violet-800 mr-2 text-neutral-600 dark:text-neutral-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
