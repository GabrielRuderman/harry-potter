import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Character from './Character';
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: key => key,
  }),
}));

describe('Character Component', () => {
  test('Renders character details correctly', () => {
    const characterData = {
      name: 'Harry Potter',
      species: 'Human',
      gender: 'Male',
      image: 'url_img',
    };

    render(
      <Character
        name={characterData.name}
        species={characterData.species}
        gender={characterData.gender}
        image={characterData.image}
      />
    );

    const nameElement = screen.getByText(characterData.name);
    const speciesElement = screen.getByText(`${t('species')}: ${t(characterData.species.toLowerCase())}`);
    const genderElement = screen.getByText(`${t('gender')}: ${t(characterData.gender.toLowerCase())}`);
    const imageElement = screen.getByAltText(characterData.name);

    expect(nameElement).toBeInTheDocument();
    expect(speciesElement).toBeInTheDocument();
    expect(genderElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
