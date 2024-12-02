import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignUp from '../Components/SignUp';
import { useNavigate } from "react-router-dom";

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));



describe('SignUp Compoennet', ()=>{

    test('testCase 1', ()=>{

        render(<SignUp />);
        const text = screen.getByText(/WELCOME TO THE SIGN-UP SCREEN/i);
        expect(text).toBeInTheDocument();
    });

    test('testCase 2', ()=>{

        render(<SignUp />);
        const text = screen.getByText(/PLEASE FILL UP THE CREDENTAILS/i);
        expect(text).toBeInTheDocument();
    });

    test('testcase 3', ()=>{

        const container = render(< SignUp />);
        expect(container).toMatchSnapshot();
    });

    test('testcase 4',  async () =>{

        render(< SignUp />);

        fireEvent.change(screen.getByPlaceholderText(/Enter Your Name/i), {
            target: { value: '' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Enter Your Email/i), {
            target: { value: '' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Enter The Password/i), {
            target: { value: '' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Confirm Password/i), {
            target: { value: '' },
        });

        fireEvent.click(screen.getByRole('button', { name: /SIGN UP/i }));

        await waitFor(() => {
            const errorMessage = screen.getByText(/Name cannot be empty/i);
            expect(errorMessage).toBeInTheDocument();
        });



       
    })

    test('testcase 5', async () => {
        render(< SignUp />);

        
        fireEvent.change(screen.getByPlaceholderText(/Enter Your Name/i), {
            target: { value: 'Ayush' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Enter Your Email/i), {
            target: { value: '' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Enter The Password/i), {
            target: { value: 'cityslicka' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Confirm Password/i), {
            target: { value: 'cityslicka' },
        });

        fireEvent.click(screen.getByRole('button', { name: /SIGN UP/i }));

        

       
    });
})