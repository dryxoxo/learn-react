import React from 'react';
import PropTypes from 'prop-types'

function Card({name, age, kata}) {
  return (
    <div className="card col-lg-2 m-3">
      <div className="card-header">anggota</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{name}</p>
          <p>{age}</p>
          <footer className="blockquote-footer">
            {kata}
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
Card.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    kata : PropTypes.string.isRequired
}

Card.defaultProps = {
    name: 'Stranger',
    age: 0,
    kata : "Someone famous in Source Title"
  };

export default Card;
