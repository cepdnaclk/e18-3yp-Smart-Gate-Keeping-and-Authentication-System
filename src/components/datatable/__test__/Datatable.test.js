import { render,screen } from '@testing-library/react';
// import Login from './../login'
import Datatable from '../Datatable';

// describe('Login', () => {
//   it('should have a text called LOGIN', () => {
//     const { getByText } = render(<Login />)
//     expect(getByText('LOGIN')).toBeInTheDocument()
//   })
// })
test('renders the landing page', () => {
  render(<Datatable />);
  // const textElement = screen.getAllByText("Login Page");
  // expect(textElement).toBeInTheDocument();
});