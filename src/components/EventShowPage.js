import { useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import axios from 'axios'

const EventShowPage = () => {

    let {id} = useParams()


    ///////// URLs ///////////////
const LOCAL_URL_events = 'http://localhost:8000/api/events'
const LOCAL_URL_employeeitems = 'http://localhost:8000/api/employeeitems'

const HEROKU_URL_events = 'https://co-operate-backend.herokuapp.com/api/events'
const HEROKU_URL_employeeitems = 'https://co-operate-backend.herokuapp.com/api/employeeitems'


///////// Get specific event /////////
const getParty = (id) => {
    axios.get(HEROKU_URL_events + "/" + id)
    .then(response => setPeople(response.data),
    err=> console.error(err)
    )
    .catch(error => console.error(error))
}

    return (
        <div>
            <h1>Event Show Page</h1>
            <h1>{id}</h1>
        </div>
    )
}

export default EventShowPage;
