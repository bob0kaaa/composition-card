import React from 'react';
import PropTypes from 'prop-types';

function Cards({ image, ...props }) {
	return (
		<div className="card" style={{ width: '18rem' }}>
			{<img src={image.src} className="card-img-top" alt={image.alt} />}

			<div className="card-body">
				{props.children}
			</div>
		</div>
	)
}

//2 вариант: если без defaultProps ,  тогда выше условный рендеринг :{image && <img src={image.src} className="card-img-top" alt={image.alt} />}
Cards.defaultProps = {
	image: {
		src: null,
		alt: ''
	}
};

Cards.propTypes = {
	image: PropTypes.object
}

export default Cards