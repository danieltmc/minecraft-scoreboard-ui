import { BedwarsAchievementsDTO, BedwarsPropertiesDTO, BedwarsStatsDTO, OneInTheBattleDTO, PartiesPartiesDTO, PartyGamesDTO, SurvivalGamesDTO, TowerDefenseDTO } from "./models/DTOs";

const axios = require('axios').default;

export const getBedwarsAcheivements = (): Promise<BedwarsAchievementsDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/bedwarsachievements/all');
}

export const getBedwarsProperties = (): Promise<BedwarsPropertiesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/bedwarsproperties/all');
}

export const getBedwarsStats = (): Promise<BedwarsStatsDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/bedwarsstats/all');
}

export const getBedwarsStatsByKey = (key: string): Promise<BedwarsStatsDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/bedwarsstats/key/' + key);
}

export const getOneInTheBattle = (): Promise<OneInTheBattleDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/oneinthebattle/all');
}

export const getPartiesParties = (): Promise<PartiesPartiesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/partiesparties/all');
}

export const getPartiesPartiesByExp = (): Promise<PartiesPartiesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/partiesparties/all/exp');
}

export const getPartiesPartiesByKills = (): Promise<PartiesPartiesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/partiesparties/all/kills');
}

export const getPartyGames = (): Promise<PartyGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/partygames/all');
}

export const getSurvivalGames = (): Promise<SurvivalGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/survivalgames/all');
}

export const getSurvivalGamesByCoins = (): Promise<SurvivalGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/survivalgames/coins');
}

export const getSurvivalGamesByDeaths = (): Promise<SurvivalGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/survivalgames/deaths');
}

export const getSurvivalGamesByGamesPlayed = (): Promise<SurvivalGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/survivalgames/gamesplayed');
}

export const getSurvivalGamesByKills = (): Promise<SurvivalGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/survivalgames/kills');
}

export const getSurvivalGamesWins = (): Promise<SurvivalGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/survivalgames/wins');
}

export const getTowerDefense = (): Promise<TowerDefenseDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/towerdefense/all');
}