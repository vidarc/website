import { shallow } from 'enzyme'

import TodoList, { Props } from '../TodoList'

describe('TodoList component', () => {
  const props: Props = {
    onTodoClick: jest.fn(),
    todos: [
      {
        completed: false,
        id: 'shortid01',
        text: 'hello',
      },
      {
        completed: true,
        id: 'shortid02',
        text: 'another todo',
      },
    ],
  }

  it('renders without crashing', () => {
    expect(shallow(<TodoList {...props} />)).toBeDefined()
  })

  it('calls onTodoClick when element is clicked', () => {
    shallow(<TodoList {...props} />)
      .childAt(0)
      .simulate('click')

    expect(props.onTodoClick).toHaveBeenCalled()
  })
})
