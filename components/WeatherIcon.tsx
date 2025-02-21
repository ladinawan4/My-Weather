 
interface WeatherIconProps {
  iconCode: string
  size: number
}

export default function WeatherIcon({ iconCode, size }: WeatherIconProps) {
  return (
    <img src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} alt="Weather icon" width={size} height={size} />
  )
}

