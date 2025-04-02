const DestinationCard = ({ destination }) => {
  return (
    <div className="card">
      <img
        src={destination.image}
        alt={destination.name}
        className="card-image"
      />
      <div className="card-content">
        <h2>{destination.name}</h2>
        <h3>{destination.location}</h3>
        <p>{destination.description}</p>
        <p className="price">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
