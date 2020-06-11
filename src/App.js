import React, {useState}  from 'react';
import logo from './logo.svg';

import TableForm from './TableForm';
import axios from 'axios';

function App(props) {

    const [users, setUsers] = useState([]);

    const load = () => {

        console.log('LOAD')
        //     fetch('https://jsonplaceholder.typicode.com/users')
        //        .then(response => response.json())
        //         .then(json =>  setUsers(json))


        //   }

        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
        })
            .then((response) => {
                setUsers(response.data);
            });

    }
    return (

       <div className="App">
                    <button onClick={load}>load</button>


<TableForm usersName ={users} />
        </div>
    );

}

    export default App;
