import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../Components/Login';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Login Component', () => {
    
    test('renders welcome text', () => {
        render(<Login />);
        const welcomeText = screen.getByText(/WELCOME TO THE LOGIN SCREEN/i);
        expect(welcomeText).toBeInTheDocument();
    });

   

    test('displays error message for invalid password', async () => {
        render(<Login />);
        
        fireEvent.change(screen.getByPlaceholderText(/Enter Your Email/i), {
            target: { value: 'test@example.com' },
        });

        fireEvent.change(screen.getByPlaceholderText(/Enter The Password/i), {
            target: { value: 'wrongpassword' },
        });

        fireEvent.click(screen.getByRole('button', { name: /LOGIN/i }));

        await waitFor(() => {
            const errorMessage = screen.getByText(/Invalid password. Please try again./i);
            expect(errorMessage).toBeInTheDocument();
        });
    });

    test('navigates to dashboard on correct credentials', async () => {
        render(<Login />);

        fireEvent.change(screen.getByPlaceholderText(/Enter Your Email/i), {
            target: { value: 'test@example.com' },
        });

        fireEvent.change(screen.getByPlaceholderText(/Enter The Password/i), {
            target: { value: 'cityslicka' },
        });

        fireEvent.click(screen.getByRole('button', { name: /LOGIN/i }));

       
    });

    test('snapshot for app component', ()=>{

        const container = render(<Login />);
        expect(container).toMatchSnapshot();
    });
});
