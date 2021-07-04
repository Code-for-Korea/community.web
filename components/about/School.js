const School = ({ school }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold mb-2">{school.name}</h3>
    <h5 className="pl-4 text-base mb-2">{school.description}</h5>
    <p className="pl-4 text-sm italic">{school.duration}</p>
  </div>
)

export default School
