import React from 'react';

function Card({ user }) {
  return (
    <section className="card">
      <div className="card__body">
        <h1 className="card__title">{user.name}</h1>
        <h5 className="card__subtitle">{user.company.name}</h5>
        <p className="card-text">{user.company.name}</p>
      </div>
    </section>
  );
}

export default Card;
