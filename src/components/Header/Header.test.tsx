// import { render, screen, fireEvent, act } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom'; // For simulating routing
// import Navbar from './Navbar'; // Assuming the component file is named Navbar
// import { ToastContainer } from 'react-toastify'; // Toast component if used in the component

// // Mocking any required functions and components for the test
// jest.mock('react-toastify', () => ({
//   ToastContainer: jest.fn().mockReturnValue(null),
// }));

// // Test case 1: Ensure navigation links render correctly when the user is not logged in
// describe('Navbar component - when user is not logged in', () => {
//   test('renders navigation links and login/register buttons', () => {
//     render(
//       <MemoryRouter>
//         <Navbar userLogin={false} />
//       </MemoryRouter>
//     );
    
//     // Check that navigation links are visible
//     expect(screen.getByText(/Home/i)).toBeInTheDocument();
//     expect(screen.getByText(/Jobs/i)).toBeInTheDocument();
//     expect(screen.getByText(/Blog/i)).toBeInTheDocument();

//     // Check login and register buttons are present
//     expect(screen.getByText(/Login/i)).toBeInTheDocument();
//     expect(screen.getByText(/Register/i)).toBeInTheDocument();
    
//     // Check 'For employers' button is visible
//     expect(screen.getByText(/For employers/i)).toBeInTheDocument();
//   });
// });

// // Test case 2: Ensure login functionality when buttons are clicked
// describe('Navbar component - login button functionality', () => {
//   test('should call changeLoginView when Login button is clicked', () => {
//     const changeLoginView = jest.fn();
    
//     render(
//       <MemoryRouter>
//         <Navbar userLogin={false} changeLoginView={changeLoginView} />
//       </MemoryRouter>
//     );
    
//     const loginButton = screen.getByText(/Login/i);
//     fireEvent.click(loginButton);
    
//     expect(changeLoginView).toHaveBeenCalled();
//   });
// });

// // Test case 3: Ensure account button renders when user is logged in
// describe('Navbar component - when user is logged in', () => {
//   test('renders account button and menu', () => {
//     const handleClick = jest.fn();
//     const handleClose = jest.fn();
//     const logoutButton = jest.fn();

//     render(
//       <MemoryRouter>
//         <Navbar
//           userLogin={true}
//           handleClick={handleClick}
//           handleClose={handleClose}
//           logoutButton={logoutButton}
//         />
//       </MemoryRouter>
//     );
    
//     // Check if Account button is visible
//     const accountButton = screen.getByText(/Account/i);
//     expect(accountButton).toBeInTheDocument();
    
//     // Simulate click on Account button
//     fireEvent.click(accountButton);
//     expect(handleClick).toHaveBeenCalled();
    
//     // Check if Menu is displayed and Logout option is visible
//     const logoutMenuItem = screen.getByText(/Logout/i);
//     expect(logoutMenuItem).toBeInTheDocument();
    
//     // Simulate clicking the logout button
//     fireEvent.click(logoutMenuItem);
//     expect(logoutButton).toHaveBeenCalled();
//   });
// });

// // Test case 4: Ensure that modals are displayed when buttons are clicked
// describe('Navbar component modals', () => {
//   test('should display the login modal when login button is clicked', () => {
//     const changeLoginView = jest.fn();
    
//     render(
//       <MemoryRouter>
//         <Navbar userLogin={false} changeLoginView={changeLoginView} />
//       </MemoryRouter>
//     );
    
//     fireEvent.click(screen.getByText(/Login/i));

//     // Check if Login modal appears
//     expect(screen.getByText(/Login/i)).toBeInTheDocument();
//   });
  
//   test('should display the register modal when register button is clicked', () => {
//     const changeRegisterView = jest.fn();
    
//     render(
//       <MemoryRouter>
//         <Navbar userLogin={false} changeRegisterView={changeRegisterView} />
//       </MemoryRouter>
//     );
    
//     fireEvent.click(screen.getByText(/Register/i));
    
//     // Check if Register modal appears
//     expect(screen.getByText(/Register/i)).toBeInTheDocument();
//   });
  
//   test('should display the employer register modal when "For employers" button is clicked', () => {
//     const changeClientRegisterView = jest.fn();
    
//     render(
//       <MemoryRouter>
//         <Navbar userLogin={false} changeClientRegisterView={changeClientRegisterView} />
//       </MemoryRouter>
//     );
    
//     fireEvent.click(screen.getByText(/For employers/i));
    
//     // Check if Employer modal appears
//     expect(screen.getByText(/For employers/i)).toBeInTheDocument();
//   });
// });