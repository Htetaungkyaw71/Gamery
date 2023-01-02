import { createAsyncThunk } from "@reduxjs/toolkit";

export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_DETAIL = 'FETCH_DETAIL';

const GAME_URL = "https://free-to-play-games-database.p.rapidapi.com/api/games";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3620fe1321mshc266a8afae118a6p1c032djsn9475d8691535',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

export const fetchGames = createAsyncThunk(FETCH_GAMES, async()=>{
    const response = await fetch(GAME_URL, options);
    const data = await response.json()
    return data
})
