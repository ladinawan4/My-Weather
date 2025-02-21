interface UnitToggleProps {
  unit: string
  setUnit: (unit: string) => void
}

export default function UnitToggle({ unit, setUnit }: UnitToggleProps) {
  return (
    <div className="flex bg-white bg-opacity-20 rounded-full p-1">
      <button
        onClick={() => setUnit("C")}
        className={`px-4 py-2 rounded-full transition-colors duration-200 ${
          unit === "C" ? "bg-white text-blue-600" : "text-white"
        }`}
      >
        °C
      </button>
      <button
        onClick={() => setUnit("F")}
        className={`px-4 py-2 rounded-full transition-colors duration-200 ${
          unit === "F" ? "bg-white text-blue-600" : "text-white"
        }`}
      >
        °F
      </button>
    </div>
  )
}

