import { render } from '~/__helpers__/app-tests'
import { HiringProcess } from './HiringProcess'

describe('HiringProcess', () => {
  it('should match snapshot', () => {
    const { container } = render(<HiringProcess />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
