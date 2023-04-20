export default function ({ color, name, description }) {
  const borderColor = {
    borderColor: color,
  }
  return (
    <div className=" card testimonial" style={borderColor}>
      <div className="text-centered">
        <h3>{name}</h3>
      </div>
      <div className="card-content">{description}</div>
    </div>
  )
}
