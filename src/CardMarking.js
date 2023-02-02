import React from 'react'

export default function CardMarking(props) {
	return (
		<>
			<h5 className="card-title">{props.title}</h5>
			<p className="card-text">{props.text}</p>
			<a href="/" className="btn btn-primary">Go somewhere</a>
		</>
	)
}