import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const CharacterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    padding: 10px;
    background-color: whitesmoke;
    margin-bottom: 10px;
`;

const CharacterImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
`;

const CharacterInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const CharacterDetail = styled.span`
    margin-bottom: 5px;
`;

const Character = ({ name, species, gender, image }) => {
  const { t } = useTranslation();

  return (
    <CharacterWrapper>
      <CharacterImage src={image} alt={name} />
      <CharacterInfo>
        <CharacterDetail><b>{name}</b></CharacterDetail>
        <CharacterDetail>{t('species')}: {t(species.toLowerCase())}</CharacterDetail>
        <CharacterDetail>{t('gender')}: {t(gender.toLowerCase())}</CharacterDetail>
      </CharacterInfo>
    </CharacterWrapper>
  );
};

export default Character;