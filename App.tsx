import { GameProvider } from './src/context/GameContext';
import { Routes } from './src/routes/routes';

export default function App() {
  return (
    <GameProvider>
      <Routes/>
    </GameProvider>
  );
}