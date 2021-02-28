import { BedwarsAchievementsDTO, BedwarsPropertiesDTO, BedwarsStatsDTO, OneInTheBattleDTO, PartiesPartiesDTO, PartyGamesDTO, SurvivalGamesDTO, TowerDefenseDTO } from "./models/DTOs";

const axios = require('axios').default;

export const getBedwarsAcheivements = async (): Promise<BedwarsAchievementsDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/bedwarsachievements/all');
}

export const getBedwarsProperties = async (): Promise<BedwarsPropertiesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/bedwarsproperties/all');
}

export const getBedwarsStats = async (): Promise<BedwarsStatsDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/bedwarsstats/all');
}

export const getBedwarsStatsByKey = async (key: string): Promise<BedwarsStatsDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/bedwarsstats/key/' + key);
}

export const getOneInTheBattle = async (): Promise<OneInTheBattleDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/oneinthebattle/all');
}

export const getPartiesParties = async (): Promise<PartiesPartiesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/partiesparties/all');
}

export const getPartiesPartiesByExp = async (): Promise<PartiesPartiesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/partiesparties/all/exp');
}

export const getPartiesPartiesByKills = async (): Promise<PartiesPartiesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/partiesparties/all/kills');
}

export const getPartyGames = async (): Promise<PartyGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/partygames/all');
}

export const getSurvivalGames = async (): Promise<SurvivalGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/survivalgames/all');
}

export const getSurvivalGamesByCoins = async (): Promise<SurvivalGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/survivalgames/coins');
}

export const getSurvivalGamesByDeaths = async (): Promise<SurvivalGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/survivalgames/deaths');
}

export const getSurvivalGamesByGamesPlayed = async (): Promise<SurvivalGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/survivalgames/gamesplayed');
}

export const getSurvivalGamesByKills = async (): Promise<SurvivalGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/survivalgames/kills');
}

export const getSurvivalGamesWins = async (): Promise<SurvivalGamesDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/survivalgames/wins');
}

export const getTowerDefense = async (): Promise<TowerDefenseDTO[]> => {
    return axios.get('http://mcbcc.minecraftr.us/api/scores/towerdefense/all');
}