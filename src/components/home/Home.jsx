import React from 'react'
import { Carousel } from 'antd'
import backUno from '../../media/img/back-uno.jpeg'
import backDos from '../../media/img/back-dos.jpeg'
import backThree from '../../media/img/back-three.jpeg'
import './home.scss'

const Home = () => (
    <Carousel 
        className="carousel"
        vertical 
        autoplay
        autoplaySpeed={5000}
        >
        <div className="carousel-container">
        <img src={backUno} alt="Uno"/>
        <p className="absoluto">Hola soy un texto</p>
        </div>
        <div className="carousel-container">
        <img src={backDos} alt="Dos"/>
        <p className="absoluto">Hola soy un texto x2</p>
        </div>
        <div className="carousel-container">
        <img src={backThree} alt="Tres"/>
        <p className="absoluto">Hola soy un texto x3</p>
        </div>
        
    </Carousel>
)

export default Home