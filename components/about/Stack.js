const Stack = ({ stack }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold mb-2">{stack.name}</h3>
    <div className="pl-3">
      {stack.items.map((item, i) => {
        return (
          <div
            className="inline-block py-1 px-3 mr-2 mb-1 text-xs rounded-full border border-gray-700 dark:border-gray-300 break-words"
            key={i}
          >
            {item}
          </div>
        )
      })}
    </div>
  </div>
)

export default Stack
