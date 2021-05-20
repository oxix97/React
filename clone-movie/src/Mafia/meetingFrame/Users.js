import PropTypes from "prop-types";

export const DEAD = 0;
export const ALIVE = 1;
export const HEAL = 2;

export const Users = [
    {nickname: 'user1', life: ALIVE, role: '', key: 'user1'},
    {nickname: 'user2', life: ALIVE, role: '', key: 'user2'},
    {nickname: 'user3', life: DEAD, role: '', key: 'user3'},
    {nickname: 'user4', life: ALIVE, role: '', key: 'user4'},
    {nickname: 'user5', life: ALIVE, role: '', key: 'user5'},
    {nickname: 'user6', life: DEAD, role: '', key: 'user6'},
    {nickname: 'user7', life: ALIVE, role: '', key: 'user7'},
    {nickname: 'user8', life: ALIVE, role: '', key: 'user8'},
]

Users.propTypes = {
    nickname: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    life: PropTypes.bool.isRequired,
    skill: PropTypes.string,
};