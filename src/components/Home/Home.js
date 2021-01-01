import React from 'react';
import styles from './home.module.css';
import { Link, NavLink } from 'react-router-dom';



const Home = () => {
  return ( <
    div className = { styles.homeWrapper } >
    <
    h1 > Our works < /h1> <
    div className = { styles.home } >

    <
    div className = { styles.article1 } >
    <
    NavLink to = "/article1" > a1 < /NavLink> <
    /div> <
    div className = { styles.article2 } >
    <
    Link to = '/article2'
    className = { styles.login } > a2 < /Link> <
    /div> <
    div className = { styles.article3 } >
    <
    Link to = '/article3'
    className = { styles.login } > a3 < /Link> <
    /div> <
    div className = { styles.article4 } >
    <
    Link to = '/article4'
    className = { styles.login } > a4 < /Link> <
    /div> <
    div className = { styles.article5 } >
    <
    Link to = '/article5'
    className = { styles.login } > a5 < /Link> <
    /div> <
    div className = { styles.article6 } >
    <
    Link to = '/article6'
    className = { styles.login } > a6 < /Link> <
    /div> <
    /div> <
    h2 > Design tendencies < /h2> <
    div className = { styles.mainText } >
    <
    div className = { styles.text1 } >
    The latest lifestyle trend from our friends in northern Europe is lagom, a Swedish concept of living a better life by living with just enough.If you like to keep things simple and natural, the Scandinavian style is perfect
    for you.The use of organic materials reflects the Scandinavian love of nature; their desire
    for laid - back living is underpinned by the simplicity and functionality of the furniture.When most of us consider Scandinavian design, IKEA and interior design are probably what comes to mind.However, this design aesthetic is just as powerful
    for graphic design projects, and can allow you to pack a powerful punch with anything from your branded marketing materials to your social media presence. <
    /div> <
    div className = { styles.text2 } >
    Scandinavian interior design is known
    for its minimalist color palettes, cozy accents,
    and striking modern furniture.Designs often play with natural light which is a hot commodity in Nordic countries.High contrasts are the hallmark of Scandinavian interior design.In this all - white dining room, stark black sculptural furniture helps create a dramatic,
    impactful statement.Modern furniture also contrasts with the ornate architectural details that are common in historic buildings in northern Europe. <
    /div> <
    div className = { styles.text3 } >
    The Scandinavian Home focus on turning your house into a light - filled, cozy nest and emphasize the importance of finding beauty and balance in everyday living.Multi - functionality is very important here.Finding pieces that do more than one thing are imperative.For example, tables that tuck into
    each other and sofa beds are very common here.The use of natural light is also quite important.Placing your furniture to get the most natural light and using curtains that allow the light to filter through will leave your home feeling more cozy and comfortable.Using ambient light and candlelight at night will make your place feel more relaxed. <
    /div> <
    /div>

    <
    /div>
  )
}

export default Home;