import { render } from '~/__helpers__/app-tests'
import { Customer } from './Customer'

describe('Customer', () => {
  it('should match snapshot', () => {
    const { container } = render(<Customer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
