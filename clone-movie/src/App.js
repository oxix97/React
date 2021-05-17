import react from 'react';
import PropTypes from 'prop-types';

function Food({name, picture,rating}) {
    return (
        <div>
            <h1>I like {name}</h1>
            <h4>{rating} / 5.0</h4>
            <img width='200px' height='200px' src={picture} alt={name}/>
        </div>
    )
}

const foodLike = [
    {
        id : '1',
        name: 'Number1',
        image: 'data:image/png;base64,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',
        rating : 5.0
    }, {
        id : '2',
        name: 'Number2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1200px-NYCS-bull-trans-2.svg.png',
        rating : 4.8
    }, {
        id : '3',
        name: 'Number3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NYCS-bull-trans-3.svg/600px-NYCS-bull-trans-3.svg.png',
        rating: 4.5
    }
]

Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number,
}

const renderNumber = number => <Food
    key={number.id}
    name={number.name}
    picture={number.image}
    rating={number.rating}
/>


function App() {
    console.log(foodLike.map(renderNumber))
    return (
        <div>
            {foodLike.map(renderNumber)}
        </div>
    );
}

export default App;