import { render } from '~/__helpers__/app-tests'

import { Services } from './Services'

describe('Services', () => {
  it('should match snapshot', () => {
    const { container } = render(<Services />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
