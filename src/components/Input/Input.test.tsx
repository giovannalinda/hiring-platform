import { render } from '~/__helpers__/app-tests'
import { Input } from './Input'

describe('Input', () => {
  it('matches snapshot', () => {
    const { container } = render(<Input />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
