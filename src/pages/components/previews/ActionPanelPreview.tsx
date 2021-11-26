import { ActionPanel, Code } from '../../../components'
import { ComponentWrapper } from '../wrappers/ComponentWrapper'

export const ActionPanelPreview = () => {
  let codePreview = `import { ActionPanel, Button } from "@sergeimeza/uikit-react"

function Example() {

  const panelContent = (
    <>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Delete your account
      </h3>
      <div className="mt-2 max-w-xl text-sm text-gray-500">
        <p>
          Once you delete your account, you will lose all data associated with it.
        </p>
      </div>
      <div className="mt-5">
        <Button>
          Delete account
        </Button>
      </div>
    </>
  )
  
  return <ActionPanel>{panelContent}</ActionPanel>
}

export default Example`

  return (
    <ComponentWrapper
      component={{
        name: 'ActionPanel',
        to: '/components/action-panel',
        current: true,
      }}
    >
      <ActionPanel />

      <div>
        <Code>{codePreview}</Code>
      </div>
    </ComponentWrapper>
  )
}
