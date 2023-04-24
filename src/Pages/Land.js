import '../styles/Land.scss';
import React, { useEffect } from "react";
import { useState } from "react";
import downArrowBlack from "../icons/downArrowBlack";
import downArrowWhite from "../icons/downArrowWhite";

function Land() {
  const theme = 'dark'
  const [Arrow, setArrow] = useState(theme === 'dark' ? downArrowWhite : downArrowBlack)

  function handleScroll1() {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
  function handleScroll2() {
    window.scrollTo({
      top: window.innerHeight * 2,
      left: 0,
      behavior: 'smooth',
    });
  }


  return (
    <div className="App">
      <div className='faceView'>
        <div className='titleView'>
        <p className='faceTitle'>BYStore</p>
        <p className='faceDesc'>премиальная иностранная одежда</p>
        </div>
        <div onClick={handleScroll1}>{Arrow}</div>
      </div>
      <div className='faceItems'>
        <p className='faceTitle'>Новое</p>
        <div className='faceItem'>
            <div className='arrow'><h1>{'<'}</h1></div>
            <img className="faceImg" src="StoneIsland.PNG"/>
            <div className='arrow'><h1>{'>'}</h1></div>
        </div>
        {/* <h1>...</h1> */}
      <div className='faceButtons'>
        <div className='unfill button'  onClick={handleScroll2}>о нас</div>
        <a className='fill button' href="/products">выбрать себе</a>
      </div>
      </div>
      <div className='aboutUs'>
        <p className='faceTitle'>BYStore</p>
        <div className='descView'>
          <p className='desc'>• BYS предлагает вам эксклюзивную коллекцию одежды, созданную лучшими европейскими брендами.</p>
          <p className='desc'>• BYS предоставляет высококачественный сервис, который соответствует уровню качества наших товаров.</p>
          <p className='desc'>• Команда BYS готова оказать помощь в выборе товаров, ответить на ваши вопросы и обеспечить приятный и комфортный опыт покупок.</p>
        </div>
        <div className='up' onClick={handleScroll1}>^</div>
      </div>
    </div>
  );
}

export default Land;
