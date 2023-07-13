import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Terminal } from './pages/TelaTerminal'
import { Login } from './pages/Login';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='terminal' element={ <Terminal /> } />
        <Route path='login' element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  )
}
