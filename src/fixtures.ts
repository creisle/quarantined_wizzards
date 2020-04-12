// fixed game states for helping in development components
import { GameState } from "./Context"

export const startState: GameState = {
    players: [
        'abbey', 
        'fritz', 
        'karen', 
    ],
    cards: [],
    scores: {},
    roundNumber: 0,
    trickNumber: 0,
    trickCards: {},
    stage: 'awaiting-players',
    playerNumber: 0,
    trickLeader: null,
    activePlayer: null,
    trumpCard: null,
}

export const bettingState: GameState = {
    players: [
        'abbey', 
        'fritz', 
        'karen', 
        'martin', 
        'caralyn', 
        'natalie'
    ],
    cards: [
        { special: 'jester' },
        { special: 'wizard' },
        { special: 'jester' },
        { special: 'wizard' },
        { special: 'jester' },
        { special: 'wizard' },
        { suit: 'hearts', number: 1 },
        { suit: 'hearts', number: 11 },
        { suit: 'hearts', number: 7 },
        { suit: 'clubs', number: 1 },
        { suit: 'clubs', number: 3 },
        { suit: 'clubs', number: 12 },
        { special: 'jester' },
        { special: 'wizard' },
        { suit: 'hearts', number: 1 },
        { suit: 'hearts', number: 11 },
        { suit: 'hearts', number: 7 },
        { suit: 'clubs', number: 1 },
        { suit: 'clubs', number: 3 },
        { suit: 'clubs', number: 12 },
    ],
    scores: {
        0: {
            0: { bet: 0 },
            2: { bet: 1 },
            5: { bet: 1 },
        },
    },
    roundNumber: 0,
    trickNumber: 0,
    trickCards: {},
    stage: 'betting',
    playerNumber: 0,
    trickLeader: 0,
    activePlayer: null,
    trumpCard: { suit: 'diamonds', number: 2 },
}

export const playingState: GameState = {
    players: [
        'abbey', 
        'fritz', 
        'karen', 
        'martin', 
        'caralyn', 
        'natalie'
    ],
    cards: [
        { special: 'jester' },
        { suit: 'hearts', number: 1 },
        { suit: 'clubs', number: 12 },
    ],
    scores: {
        0: {
            0: { bet: 0, taken: 0 },
            1: { bet: 0, taken: 0 },
            2: { bet: 0, taken: 0 },
            3: { bet: 1, taken: 0 },
            4: { bet: 1, taken: 0 },
            5: { bet: 1, taken: 1 },
        },
        1: {
            0: { bet: 0, taken: 0 },
            1: { bet: 0, taken: 1 },
            2: { bet: 2, taken: 1 },
            3: { bet: 1, taken: 0 },
            4: { bet: 1, taken: 0 },
            5: { bet: 0, taken: 0 },
        }
    },
    roundNumber: 2,
    trickNumber: 0,
    trickCards: {},
    stage: 'playing',
    playerNumber: 0,
    trickLeader: 0,
    activePlayer: null,
    trumpCard: { suit: 'diamonds', number: 2 },
}

export const playingDuringTrickState: GameState = {
    players: [
        'abbey', 
        'fritz', 
        'karen', 
        'martin', 
        'caralyn', 
        'natalie'
    ],
    cards: [
        { special: 'jester' },
        { suit: 'clubs', number: 12 },
    ],
    scores: {
        0: {
            0: { bet: 0, taken: 0 },
            1: { bet: 0, taken: 0 },
            2: { bet: 0, taken: 0 },
            3: { bet: 1, taken: 0 },
            4: { bet: 1, taken: 0 },
            5: { bet: 1, taken: 1 },
        },
        1: {
            0: { bet: 0, taken: 0 },
            1: { bet: 0, taken: 1 },
            2: { bet: 2, taken: 1 },
            3: { bet: 1, taken: 0 },
            4: { bet: 1, taken: 0 },
            5: { bet: 0, taken: 0 },
        }
    },
    roundNumber: 2,
    trickNumber: 0,
    trickCards: {
        0: { suit: 'hearts', number: 1 },
        1: { suit: 'hearts', number: 7 },
        2: { special: 'jester' },
    },
    stage: 'playing',
    playerNumber: 0,
    trickLeader: 0,
    activePlayer: 3,
    trumpCard: { suit: 'diamonds', number: 2 },
}