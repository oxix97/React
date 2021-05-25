import PropTypes from "prop-types";

export const DEAD = 0;
export const ALIVE = 1;

export const Users = [
    {nickname: 'user1', life: ALIVE, role: '', vote: 0},
    {nickname: 'user2', life: ALIVE, role: '', vote: 0},
    {nickname: 'user3', life: DEAD, role: '', vote: 0},
    {nickname: 'user4', life: ALIVE, role: '', vote: 0},
    {nickname: 'user5', life: ALIVE, role: '', vote: 0},
    {nickname: 'user6', life: ALIVE, role: '', vote: 0},
    {nickname: 'user7', life: ALIVE, role: '', vote: 0},
    {nickname: 'user8', life: ALIVE, role: '', vote: 0},
    {nickname: 'user9', life: ALIVE, role: '', vote: 0},
    {nickname: 'user10', life: ALIVE, role: '', vote: 0},
]

export const MafiaOne = ['Mafia'];
export const MafiaTwo = ['Mafia','Mafia'];
export const Roles = ['Politician', 'Solider', 'Police', 'Doctor', 'Reporter', 'Terrorist', 'Gangster', 'WatchMan'];

Users.propTypes = {
    nickname: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    life: PropTypes.number.isRequired,
    vote: PropTypes.number.isRequired,
};