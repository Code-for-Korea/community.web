const Team = ({ team }) => (
  <div className="mb-4">
    <h3 className="text-lg font-bold mb-1">{team.name}</h3>
    <div className="pl-4">
      <h5 className="mb-1 text-l font-semibold">{team.position}</h5>
      <p className="mb-1 italic text-xs">{team.duration}</p>
      <div>
        {team.items.map((item, i) => {
          return (
            <div
              className="inline-block py-1 px-2 mr-1 mb-1 text-xs rounded-lg bg-gray-600 text-white dark:bg-gray-300 dark:text-black"
              key={i}
            >
              #{item}
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default Team
