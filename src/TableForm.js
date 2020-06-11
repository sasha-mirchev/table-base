import React from 'react';
import './App.css';
import EditItems from "./EditItems";

const editItem = () => {
    {}
    console.log ('кнопка работает!')
};

    console.log('LOAD')
function TableForm(props) {
    return (

        <div className="App">


            <table className="table" border='3'>
                <thead className="thead-dark">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Имя Фамилия</th>
                    <th scope="col" >Имя Пользователя</th>
                    <th scope="col">Почта</th>
                    <th scope="col">Адресс</th>
                    <th scope="col">Телефон</th>
                    <th scope="col">Сайт</th>
                    <th scope="col">Компания</th>
                </tr>
                </thead>

                        {  props.usersName.map(el =>
                        <tbody key={el.id}>
                        <tr vertical-align='center'>
                            <th scope="row">{el.id}</th>
                            <td><p className="lead">{el.name}</p></td>
                            <td>{el.username}</td>
                            <td>{el.email}</td>
                            <td align='left'>

                                <tr onDoubleClick={editItem}><small><u>street -</u> </small> {el.address.street}  </tr>
                                <tr><small><u>suite - </u> </small>{el.address.suite} </tr>
                                <tr><small><u>City - </u> </small>{el.address.city} </tr>
                                <tr><small><u>zipcode - </u> </small>{el.address.zipcode}</tr>
                                <tr><small><u>lat: </u> </small>{el.address.geo.lat}</tr>
                                <tr><small><u>lng: </u> </small>{el.address.geo.lng}</tr>
                                </td>
                            <td>{el.phone}</td>
                            <td><a href= {el.website} >{el.website}</a></td>
                            <td align='left'>
                                <tr><small><u>name of company  - </u> </small>
                                 {el.company.name}  </tr>
                                <tr><small><u>catchPhrase - {el.company.catchPhrase}</u></small> </tr>
                                <tr><small><u>bs -</u></small>  {el.company.bs} </tr>
                            </td>

                        </tr>
                        </tbody>
                        )}
                    </table>


<EditItems   editIt = {editItem} />
                </div>
                );
                }

                export default TableForm;
