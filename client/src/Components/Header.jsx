const Header = () => {


    // use state
    const [person, setPerson] = useState([]);


    const uri = `http://localhost:4000/person`

    const getPerson = async () => {
        // 
        const response = await axios.get(uri)
        setPerson(response)
        console.log(response);
    }

    console.log(getPerson);





    return (
        <>
            <div className="links">
                <a href="#">Github</a>
                <a href="#">LinkedIn</a>
                <a href="#">Youtube</a>
            </div>

            <div>
                <h2>Name Surname</h2>
                <p>pronouns</p>
                <p>tagline</p>
                <i class="fas fa-edit"></i>
            </div>

            <div>
                <h3>Overview</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto voluptatum temporibus odit cupiditate quos necessitatibus beatae quibusdam vel debitis soluta dolor delectus culpa, aut placeat repellat harum illo eaque adipisci ducimus maiores veritatis? Facilis, voluptatem et dicta, consequuntur quibusdam recusandae quod reiciendis nesciunt nam iure magnam maiores beatae cupiditate!</p>
            </div>
        </>
    );
}

export default Header