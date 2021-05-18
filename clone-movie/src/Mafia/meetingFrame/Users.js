import PropTypes from "prop-types";

const DEAD = 0;
const ALIVE = 1;
const HEAL = 2;

export const InitUser = [{
    nickname: 'user1',
    role: '',
    life: ALIVE,
    skill: '',
}, {
    nickname: 'user2',
    role: '',
    life: ALIVE,
    skill: '',
}
]

function Users(nickname, role, life, skill) {

}

Users.propTypes = {
    nickname: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    life: PropTypes.bool.isRequired,
    skill: PropTypes.string,
};