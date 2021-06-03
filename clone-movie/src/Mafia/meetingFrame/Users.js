import PropTypes from "prop-types";

export const DEAD = 0;
export const ALIVE = 1;

export const Game = {
    users: [
        {nickname: 'user1', life: ALIVE, role: '', vote: 0, skill: true},
        {nickname: 'user2', life: ALIVE, role: '', vote: 0, skill: true},
        {nickname: 'user3', life: ALIVE, role: '', vote: 0, skill: true},
        {nickname: 'user4', life: ALIVE, role: '', vote: 0, skill: true},
        {nickname: 'user5', life: ALIVE, role: '', vote: 0, skill: true},
        {nickname: 'user6', life: ALIVE, role: '', vote: 0, skill: true},
        {nickname: 'user7', life: ALIVE, role: '', vote: 0, skill: true},
        {nickname: 'user8', life: ALIVE, role: '', vote: 0, skill: true},
        {nickname: 'user9', life: ALIVE, role: '', vote: 0, skill: true},
        {nickname: 'user10', life: ALIVE, role: '', vote: 0, skill: true},
    ],
}

export const Roles = [
    'Politician',
    'Solider', 'Police',
    'Doctor', 'Reporter',
    'Undertaker', 'Thief',
    'Terrorist', 'Stalker',
];


Game.propTypes = {
    nickname: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    life: PropTypes.number.isRequired,
    vote: PropTypes.number.isRequired,
};