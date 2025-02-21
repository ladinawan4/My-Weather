interface WeatherIconProps {
  iconCode: string;
  size: number;
  className?: string; // ✅ Add className prop
}

export default function WeatherIcon({ iconCode, size, className }: WeatherIconProps) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
      alt="Weather Icon"
      width={size}
      height={size}
      className={className} // ✅ Apply className prop
    />
  );
}
