import {
  ChatIcon,
  DeviceMobileIcon,
  LightningBoltIcon,
} from '@heroicons/react/outline'
import {
  ChevronRightIcon,
  InboxIcon,
  SparklesIcon,
  StarIcon,
} from '@heroicons/react/solid'

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]

const footerNavigation = {
  main: [
    { name: 'サービス紹介', href: '#' },
    { name: 'ニュース', href: '#' },
    { name: '採用情報', href: '#' },
  ],
}

export default function LandingPage() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div>
                <img
                  className="h-11 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                  alt="Workflow"
                />
              </div>
              <div className="mt-20">
                <div>
                  <a href="#" className="inline-flex space-x-4">
                    <span className="rounded bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-500 tracking-wide uppercase">
                      ニュース
                    </span>
                    <span className="inline-flex items-center text-sm font-medium text-primary-500 space-x-1">
                      <span>オープンベータテストを実施中</span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    自社サービスを、
                    <br />
                    ソーシャルに。
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
                    Instagramや、PayPay、メルカリなどは最愛のアプリは強力なコミュニティを作って繁栄しています。
                  </p>
                  <p className="mt-1 text-xl text-gray-500">
                    <span className="text-xl font-bold capitalize text-primary-500">
                      Envelope
                    </span>
                    なら、数行のコードでアプリにチャットや音声、・動画機能をスピード導入できます。
                  </p>
                </div>
                <form
                  action="#"
                  className="mt-12 sm:max-w-lg sm:w-full sm:flex"
                >
                  <div className="min-w-0 flex-1">
                    <label htmlFor="hero-email" className="sr-only">
                      メールアドレス
                    </label>
                    <input
                      id="hero-email"
                      type="email"
                      className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="メールアドレス"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-primary-500 text-base font-medium text-white shadow hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:px-10"
                    >
                      資料ダウンロード
                    </button>
                  </div>
                </form>
                <div className="mt-6">
                  <div className="inline-flex items-center divide-x divide-gray-300">
                    <div className="flex-shrink-0 flex pr-5">
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                      <span className="font-medium text-gray-900">
                        導入実績
                      </span>{' '}
                      <span className="font-medium text-rose-500">
                        10社以上
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  />
                </svg>
              </div>
              <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                <img
                  className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/task-app-rose.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Feature Sections */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />

          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              自社アプリにソーシャルコミュニケーション機能を提供
            </h2>

            <div className="mt-16 lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="flex items-end">
                    <span className="h-8 w-8 rounded-md flex items-center justify-center bg-gradient-to-tr from-primary-600 to-primary-400">
                      <InboxIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <h2 className="ml-2 font-bold text-sm">ENVELOPEチャット</h2>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      ユーザーが愛用になる
                      <br />
                      アプリ内のチャット体験
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      わかりやすい
                      <span className="text-lg text-primary-500 font-bold">
                        チャットAPI
                      </span>
                      、iOSとAndroidのネイティブSDK、さらにバックエンドで豊富なチャットプラットフォームが整えていますので、迅速・簡便にチャット機能を導入できます。
                    </p>
                    <div className="mt-4">
                      <blockquote>
                        <ul className="flex flex-col space-y-2">
                          <li className="flex items-center">
                            <div className="h-8 w-8 rounded-full border border-gray-500 flex items-center justify-center">
                              <LightningBoltIcon className="h-4 w-4 text-gray-500" />
                            </div>
                            <p className="ml-2 text-sm">
                              豊富なツールによるスピード導入
                            </p>
                          </li>
                          <li className="flex items-center">
                            <div className="h-8 w-8 rounded-full border border-gray-500 flex items-center justify-center">
                              <DeviceMobileIcon className="h-4 w-4 text-gray-500" />
                            </div>
                            <p className="ml-2 text-sm">
                              ウェッブ/iOS/Androidアプリを対応
                            </p>
                          </li>
                          <li className="flex items-center">
                            <div className="h-8 w-8 rounded-full border border-gray-500 flex items-center justify-center">
                              <InboxIcon className="h-4 w-4 text-gray-500" />
                            </div>
                            <p className="ml-2 text-sm">
                              オフライン、翻訳、既読などの30種類以上の機能
                            </p>
                          </li>
                        </ul>
                      </blockquote>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#"
                        className="inline-flex bg-primary-500 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:bg-primary-700"
                      >
                        お問い合わせ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="flex items-end">
                    <span className="h-8 w-8 rounded-md flex items-center justify-center bg-gradient-to-tr from-primary-600 to-primary-400">
                      <ChatIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <h2 className="ml-2 font-bold text-sm">ENVELOPEデスク</h2>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      顧客向けのかんたんな
                      <br />
                      アプリ内チャットサポート
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      ライブチャットサポートを簡単に導入して、顧客にスピードに情報を提供し豊かな顧客体験を提供することができます。
                    </p>
                    <div className="mt-4">
                      <blockquote>
                        <ul className="flex flex-col space-y-2">
                          <li className="flex items-center">
                            <div className="h-8 w-8 rounded-full border border-gray-500 flex items-center justify-center">
                              <InboxIcon className="h-4 w-4 text-gray-500" />
                            </div>
                            <p className="ml-2 text-sm">
                              リアルタイムのチャットサポートによる簡便・迅速な問題解決
                            </p>
                          </li>
                          <li className="flex items-center">
                            <div className="h-8 w-8 rounded-full border border-gray-500 flex items-center justify-center">
                              <SparklesIcon className="h-4 w-4 text-gray-500" />
                            </div>
                            <p className="ml-2 text-sm">
                              分かりやすいCMSで効率的な顧客管理
                            </p>
                          </li>
                          <li className="flex items-center">
                            <div className="h-8 w-8 rounded-full border border-gray-500 flex items-center justify-center">
                              <DeviceMobileIcon className="h-4 w-4 text-gray-500" />
                            </div>
                            <p className="ml-2 text-sm">
                              ウェッブアプリや、iOS/Androidアプリを対応
                            </p>
                          </li>
                        </ul>
                      </blockquote>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#"
                        className="inline-flex bg-primary-500 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:bg-primary-700"
                      >
                        お問い合わせ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative mt-24 sm:mt-32 sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
            <svg
              className="absolute top-8 left-1/2 -ml-3"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-rose-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-rose-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-rose-600 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    オープンベータテストを実施中
                  </h2>
                  {/* <p className="mt-6 mx-auto max-w-2xl text-lg text-rose-100">
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                    Dictum urna sed consectetur neque tristique pellentesque.
                  </p> */}
                </div>
                <form
                  action="#"
                  className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
                >
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                      メールアドレス
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                      placeholder="メールアドレス"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                    >
                      資料ダウンロード
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer section */}
      <footer className="mt-24 bg-gray-900 sm:mt-12">
        <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {footerNavigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2021 Appcrunch Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
