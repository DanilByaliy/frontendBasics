import React from "react";
import './style.css';

class Content extends React.Component {

  constructor () {
    super();
    this.state = {
      firstElemBackgroundColor: '#FFFFFF',
      firstElemColor: '#000000',
      secondElemBackgroundColor: '#FFFFFF',
      secondElemColor: '#000000'
    }
    this.changeFirstElem = this.changeFirstElem.bind(this);
    this.changeSecondElem = this.changeSecondElem.bind(this);
  }

  changeFirstElem() {
    this.setState( {
      // ...this.state,
      firstElemBackgroundColor: this.getRandomColor(),
      firstElemColor: this.getRandomColor()
    } )
  }

  changeSecondElem() {
    this.setState( {
      // ...this.state,
      secondElemBackgroundColor: this.getRandomColor(),
      secondElemColor: this.getRandomColor()
    } )
  }

  getRandomColor() {
    return '#' + (Math.random().toString(16) + '000000')
      .substring(2,8).toUpperCase();
  }

  render() {
    return (
      <div>
        <hr />
        <p>Народився 26 червня 2003 року в м. Жмеринка</p> 
        <p>Навчався в ЗОШ 1-3 ст. №4 м. Жмеринки, КПІ ім. Ігоря Сікорського</p>
        <p>Хобі:</p>
        <ul>
          <li>Настільний теніс</li>
          <li>Шахи</li>
          <li>Фільми</li>
          <li>Книги</li>
        </ul>
        <p>Улюблені фільми:</p>
        <ol
          id="list"
          style={{
            color: this.state.firstElemColor, 
            background: this.state.firstElemBackgroundColor
          }}
          onClick={ this.changeFirstElem }
        >
          <li>Fight Club</li>
          <li>Pulp Fiction</li>
          <li>Shutter Island</li>
        </ol>
        <p
          className="text"
          style={{
            color: this.state.secondElemColor, 
            background: this.state.secondElemBackgroundColor
          }}
          onClick={ this.changeSecondElem }
        >
          Вінниця - чудове місто у Центральній Україні, яке славиться не тільки багатою історією, 
          але й безліччю відзнаками, якими її неодноразово нагороджували. Декілька разів Вінницю 
          визнавали найкомфортнішим містом в Україні, багато хто називає Вінницю - містом фонтанів, 
          і є ще чимало досягнень, адже нашому місту безперечно є чим пишатися! Сьогодні місто відоме 
          завдяки своїм світло-музичним фонтанам на набережній Рошен. На світлове шоу щороку до Вінниці 
          приїздять десятки тисяч туристів. Та в місті є ще багато цікавинок окрім фонтану та набережної.
        </p>
      </div>
    );
  }
}

export default Content;
