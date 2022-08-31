import { render } from '~/__helpers__/app-tests'
import { Workflow } from './Workflow'

describe('Workflow', () => {
  it('should match snapshot', () => {
    const { container } = render(<Workflow />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
