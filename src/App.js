import React from 'react';
import useHarryPotterCharacters from './hooks/useHarryPotterCharacters';
import Character from './components/Character';
import { Alert, CircularProgress } from '@mui/material';
import useLanguageChangeReceptor from './hooks/useLanguageChangeReceptor';

const App = () => {
  const [characters, isLoading, error] = useHarryPotterCharacters();
  useLanguageChangeReceptor();
  
  return (
    <>
      {error ?
        <Alert severity='error'>
          Error trying to get the characters
        </Alert>
      : isLoading ?
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      :
      characters.map(character => (
        <Character key={character.id} {...character} />
      ))}
    </>
  );
}

export default App;