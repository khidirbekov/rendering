function Card({ url, title, rating }) {
    return <div className="card">
        <img className="card__poster"
             src={ url }
             alt={ title } />
            <p className="card__title">{ title }</p>
            <span className="card__rating">{ rating }</span>
    </div>
}

export default Card;
