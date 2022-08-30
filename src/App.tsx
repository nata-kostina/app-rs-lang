import ReactDOM from "react-dom/client";
import { RouteNames } from './router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Authorization';
import Textbook from './pages/Textbook';
import Games from './pages/Games';
import Statistics from './pages/Statistics';
import NotFound from './pages/NotFound/index';
import Unit from "./pages/Textbook/Unit";
import Signin from './pages/Signup/index';
import DifficultWords from './pages/Textbook/DifficultWords/index';
import TextbookLayout from "./pages/Textbook/TextbookLayout";
import UserDictionary from "./pages/Textbook/UserDictionary";
import SprintGame from './pages/Games/SprintGame/index';
import GamesNavigation from "./pages/Games/GamesNavigation";
import { GameMode } from "./types/types";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteNames.HOMEPAGE} element={<Homepage />} />
        <Route path={RouteNames.AUTHORIZATION} element={<Login />} />
        <Route path={RouteNames.SIGNIN} element={<Signin />} />
        <Route path={RouteNames.TEXTBOOK} element={<TextbookLayout />}>
          <Route path={`${RouteNames.TEXTBOOK}`} element={<Textbook />} >
            <Route path={'units'}>
              <Route path={':id'} element={<Unit />}></Route>
            </Route>
          </Route>
          <Route path={RouteNames.USER_DICTIONATY} element={<UserDictionary />}>
            <Route index element={<p>Some content</p>} />
            <Route path={RouteNames.DIFFICULT_WORDS} element={<DifficultWords />} />
          </Route>
        </Route>

        <Route path={RouteNames.GAMES} element={<Games />}>
          <Route index element={<GamesNavigation state={GameMode.MENU_GAME}/>}/>
          <Route path={RouteNames.SPRINT_GAME} element={<SprintGame />}/>
        </Route>
        <Route path={RouteNames.STATISTICS} element={<Statistics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
