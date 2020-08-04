import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/45516090?s=460&u=67689d03212e1da0974abc6eb687af42cedc2650&v=4"
          alt="Guilherme Luís"
        />
        <div>
          <strong>Guilherme Luís</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Tempor officia ipsum est reprehenderit ex enim. Aliquip fugiat
        <br /> <br />
        commodo voluptate sit amet est cillum et aliqua culpa nisi et qui
        veniam. Sint tempor duis dolore nostrud do ipsum enim et labore duis
        reprehenderit commodo. Mollit officia amet in aliqua reprehenderit.
        Excepteur officia magna ipsum fugiat mollit ex nulla dolore. Excepteur
        duis exercitation excepteur eiusmod anim. Ipsum veniam officia irure sit
        dolor nostrud dolor eiusmod in dolore sint consequat.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
