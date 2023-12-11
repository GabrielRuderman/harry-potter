import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import useHarryPotterCharacters from './hooks/useHarryPotterCharacters';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: key => key,
    }),
}));

jest.mock('./hooks/useHarryPotterCharacters', () => ({
    __esModule: true,
    default: jest.fn(),
}));

jest.mock('./hooks/useLanguageChangeReceptor', () => jest.fn());

describe('App component', () => {
    // Restaura mocks despues de cada prueba
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Renders loading state', () => {
        // Configura el estado de carga
        useHarryPotterCharacters.mockReturnValue([[], true, null]);

        render(<App />);

        // Verifica que se muestra el indicador de carga
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    test('Renders error state', () => {
        useHarryPotterCharacters.mockReturnValue([[], false, 'Error']);

        render(<App />);

        // Verifica que se muestra el mensaje de error
        expect(screen.getByText('Error trying to get the characters')).toBeInTheDocument();
    });

    test('Renders characters', () => {
        const characters = [
            { id: 1, name: 'Harry', species: 'Human', gender: 'Male' },
            { id: 2, name: 'Hermione', species: 'Human', gender: 'Male' },
        ];
        useHarryPotterCharacters.mockReturnValue([characters, false, null]);

        render(<App />);

        expect(screen.getByText('Harry')).toBeInTheDocument();
        expect(screen.getByText('Hermione')).toBeInTheDocument();
    });
});