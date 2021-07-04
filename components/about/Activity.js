const Activity = (d) => (
  <div className="mb-8 mr-4 overflow-hidden">
    <h3 className="text-xl font-bold mb-2">{d.activity.title}</h3>
    <div className="pl-4 mb-1 font-medium">
      <span className="mr-3">
        <i className="fas fa-map-marker-alt fa-sm mr-1"></i>
        {d.activity.at}
      </span>
      <small className="text-gray-700 dark:text-gray-400">
        <i className="fas fa-calendar-alt fa-xs"></i> {d.activity.year}년 {d.activity.month}월
      </small>
    </div>
    <div className="pl-4 mb-3">
      {d.activity.tags.map((tag, i) => {
        return (
          <span
            className="py-1 px-2 mr-2 rounded text-xs font-semibold bg-gray-600 text-white"
            key={i}
          >
            #{tag}
          </span>
        )
      })}
    </div>
    <p className="pl-4 text-sm">{d.activity.content}</p>
  </div>
)

export default Activity
