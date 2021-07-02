import { render,screen } from '@testing-library/react';
import App from './App';
import Login from "./Components/Login/login";
import PatientInfo from "./Components/PatientInfo/PatientInfo";
import { MemoryRouter } from 'react-router';

jest.mock("./Components/Login/login");
jest.mock("./Components/PatientInfo/PatientInfo");
test('renders learn react link', () => {
  // render(<App />);
  Login.mockImplementation(()=><div>Login</div>);
  PatientInfo.mockImplementation(()=><div>PatientInfo</div>);  
  const component = render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  );
   
  const linkElement = screen.getByText(/Logout/i);
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
  // expect(component).toHaveLength(1);
});
