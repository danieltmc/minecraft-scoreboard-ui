import { BedwarsStatsKeyEnum } from "./Enums";

export interface BedwarsAchievementsDTO {
    playerUuid: string;
    userName: string;
    id: string;
    earnDate: string;
}

export interface BedwarsPropertiesDTO {
    playerUuid: string;
    userName: string;
    id: string;
    value: string;
}

export interface BedwarsStatsDTO {
    playerUuid: string;
    userName: string;
    key: BedwarsStatsKeyEnum;
}

export interface OneInTheBattleDTO {
    playerUuid: string;
    playerName: string;
    stats: string;
    loadout: string;
    inventory: string;
}

export interface PartiesPartiesDTO {
    id: string;
    name: string;
    tag: string;
    leader: string;
    description: string;
    motd: string;
    color: string;
    kills: number;
    password: string;
    home: string;
    protection: number;
    experience: number;
    follow: number;
}

export interface PartiesSchemaHistoryDTO {
    id: number;
    version: number;
    description: string;
    scriptName: string;
    installDate: number;
}

export interface PartyGamesDTO {
    playerUuid: string;
    playerName: string;
    data: string;
}

export interface SurvivalGamesDTO {
    playerUuid: string;
    playerName: string;
    coins: number;
    kills: number;
    deaths: number;
    wins: number;
    gamesPlayed: number;
    modifier: number;
    playTime: string;
    kits: string;
    exp: number;
}

export interface TowerDefenseDTO {
    playerUuid: string;
    playerName: string;
    data: string;
}