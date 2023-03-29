import axios from "axios";
import { useEffect, useState } from "react";
import WeatherPageUI from "./weather.presenter";
import { INowInfo } from "./weather.types";

export default function WeatherPage() {
  // prettier-ignore
  const [nowInfo, setNowInfo] = useState<INowInfo>({
    location: "",    // 현재 위치
    day: "",         // 오늘 날짜
    time: "",        // 최근 업데이트 시간
    weather: "",     // 날씨 코드를 활용한 날씨
    message: "",     // 날씨 코드를 활용한 메세지
  });
  const [week, setWeek] = useState<any>([]); // 일주일 날씨 코드

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const result = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=37.53&longitude=126.85&daily=weathercode&current_weather=true&past_days=7&timezone=auto"
        );

        setNowInfo({
          location: result.data.timezone,
          day: result.data.current_weather.time.split("T")[0],
          time: result.data.current_weather.time.split("T")[1],
        });

        switch (Math.floor(result.data?.current_weather.weathercode / 10)) {
          case 8:
            setNowInfo((prevState: INowInfo) => {
              return {
                ...prevState,
                weather: "raining",
                message: "비가 와요! 우산을 꼭 챙겨야 해요 ☔️",
              };
            });
            break;
          case 7:
            setNowInfo((prevState: INowInfo) => {
              return {
                ...prevState,
                weather: "snowing",
                message: "눈이 내리는 날씨 ☃️",
              };
            });
            break;
          case 6 || 5:
            setNowInfo((prevState: INowInfo) => {
              return {
                ...prevState,
                weather: "rain",
                message: "비가 올 수도 있는 습한 날 ☔️",
              };
            });
            break;
          case 4:
            setNowInfo((prevState: INowInfo) => {
              return {
                ...prevState,
                weather: "cloudy",
                message: "가끔은 흐리지만 대체로 맑음 😌",
              };
            });
            break;
          default:
            setNowInfo((prevState: INowInfo) => {
              return {
                ...prevState,
                weather: "sun",
                message: "오늘 날씨 맑음 😊",
              };
            });
            break;
        }

        for (let i = 8; i <= 13; i++) {
          switch (Math.floor(result.data.daily.weathercode[i] / 10)) {
            case 8:
              setWeek((prevState: any) => [
                ...prevState,
                {
                  daily: result.data.daily.time[i],
                  weather: "raining",
                  message: "비가 와요! 우산을 꼭 챙겨야 해요 ☔️",
                },
              ]);
              break;
            case 7:
              setWeek((prevState: any) => [
                ...prevState,
                {
                  daily: result.data.daily.time[i],
                  weather: "snowing",
                  message: "눈이 내리는 날씨 ☃️",
                },
              ]);
              break;
            case 6 || 5:
              setWeek((prevState: any) => [
                ...prevState,
                {
                  daily: result.data.daily.time[i],
                  weather: "rain",
                  message: "비가 올 수도 있어요 💧",
                },
              ]);
              break;
            case 4:
              setWeek((prevState: any) => [
                ...prevState,
                {
                  daily: result.data.daily.time[i],
                  weather: "cloudy",
                  message: "가끔은 흐리지만 대체로 맑음 😌",
                },
              ]);
              break;
            default:
              setWeek((prevState: any) => [
                ...prevState,
                {
                  daily: result.data.daily.time[i],
                  weather: "sun",
                  message: "오늘 날씨 맑음 😊",
                },
              ]);
              break;
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    void fetchWeather();
  }, []);

  return <WeatherPageUI nowInfo={nowInfo} week={week} />;
}
