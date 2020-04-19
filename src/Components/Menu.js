import React, { Fragment } from 'react';
import ListGroup from './ListGroup'
import ListGroupItem from './ListGroupItem'
import { Link } from 'react-router-dom';
import './Menu.css'



const Menu = () =>(
            
            <Fragment>
                
                <ListGroup className='TopMenu'>

                    <ListGroupItem><Link to='/'>Главная</Link></ListGroupItem>
                    
                    <ListGroupItem>Противники
                            <ListGroup className = 'SubMenu'>
                                <ListGroupItem>Люди</ListGroupItem>
                                <ListGroupItem>Орки</ListGroupItem>
                                <ListGroupItem>Нежить</ListGroupItem>
                            </ListGroup>
                        </ListGroupItem>
                    
                    <ListGroupItem>Оружие
                            <ListGroup className = 'SubMenu'>
                                <ListGroupItem>Одноручное</ListGroupItem>
                                <ListGroupItem>Двуручное</ListGroupItem>
                                <ListGroupItem>Дистанционное</ListGroupItem>
                            </ListGroup>
                        </ListGroupItem>

                    <ListGroupItem>Броня
                            <ListGroup className = 'SubMenu'>
                                <ListGroupItem><Link to='/LightArmor'>Легкая</Link></ListGroupItem>
                                <ListGroupItem>Средняя</ListGroupItem>
                                <ListGroupItem>Тяжелая</ListGroupItem>
                            </ListGroup>
                        </ListGroupItem>

                </ListGroup>   

            </Fragment>
        )

export default Menu;