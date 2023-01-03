import { createAsyncThunk } from '@reduxjs/toolkit';

export const FETCH_GAMES = 'FETCH_GAMES';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_CATEGORY = 'GET_CATEGORY';

const GAME_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const DETAIL_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=';
const CATEGORY_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3620fe1321mshc266a8afae118a6p1c032djsn9475d8691535',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

export const fetchGames = createAsyncThunk(FETCH_GAMES, async () => {
  const response = await fetch(GAME_URL, options);
  const data = await response.json();
  return data;
});

export const getDetailData = createAsyncThunk(GET_DETAIL, async (id) => {
  const response = await fetch(`${DETAIL_URL}${id}`, options);
  const data = await response.json();
  return data;
});

export const getCategoryData = createAsyncThunk(GET_CATEGORY, async (name) => {
  const response = await fetch(`${CATEGORY_URL}${name}`, options);
  const data = await response.json();
  return data;
});
