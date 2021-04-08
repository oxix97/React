const About = ({match}) =>{
    return(
        <div>
            <h2>소개</h2>
            <p>Im Router</p>
            <p>My name is {match.params.name}</p>
        </div>
    )
}

export default About;