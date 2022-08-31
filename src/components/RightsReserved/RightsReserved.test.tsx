import { render } from '~/__helpers__/app-tests'

import { RightsReserved } from './RightsReserved'

describe('RightsReserved', () => {
  it('should match snapshot', () => {
    const { container } = render(<RightsReserved />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
