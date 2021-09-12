import { classNames, PageHeading } from '../../../components'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

const SampleHeadingTitle = () => {
  return (
    <div className={classNames('mt-2', 'flex-1 min-w-0')}>
      <div className={classNames('flex items-start space-x-5')}>
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              alt=""
            />
            <span
              className="absolute inset-0 shadow-inner rounded-full"
              aria-hidden="true"
            />
          </div>
        </div>
        {/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}
        <div className="pt-1.5">
          <h1 className="text-2xl font-bold text-gray-900">Ricardo Cooper</h1>
          <p className="text-sm font-medium text-gray-500">
            Applied for{' '}
            <a href="#" className="text-gray-900">
              Front End Developer
            </a>{' '}
            on <time dateTime="2020-08-25">August 25, 2020</time>
          </p>
        </div>
      </div>
    </div>
  )
}

export const PageHeadingPreview = () => {
  return (
    <ComponentWrapper
      component={{
        name: 'PageHeading',
        to: '/components/page-heading',
        current: true,
      }}
    >
      <PageHeading
        title={<SampleHeadingTitle />}
        // breadcrumb={<></>}
        // back={<></>}
        // actions={<></>}
        meta={<></>}
      />
      <PageHeading
        title="Front End Developer"
        // breadcrumb={<></>}
        // back={<></>}
        // actions={<></>}
        meta={<></>}
      />
      <PageHeading
        title="Front End Developer"
        breadcrumb={<></>}
        back={<></>}
        // actions={<></>}
        // meta={<></>}
      />
      <PageHeading
        title="Front End Developer"
        breadcrumb={<></>}
        back={<></>}
        actions={<></>}
        meta={<></>}
      />
    </ComponentWrapper>
  )
}

export default PageHeadingPreview
