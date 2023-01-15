import { render,screen } from '@testing-library/react';
// import Login from './../login'
import Login from '../Login';



// describe('Login', () => {
//   it('should have a text called LOGIN', () => {
//     const { getByText } = render(<Login />)
//     expect(getByText('LOGIN')).toBeInTheDocument()
//   })
// })
test('renders the landing page', () => {
  render(<Login />);
  // const textElement = screen.getAllByText("Login Page");
  // expect(textElement).toBeInTheDocument();
});