import * as S from "./weather.style";
import { IWeatherPageUI } from "./weather.types";

export default function WeatherPageUI(props: IWeatherPageUI) {
  return (
    <S.Wrapper>
      <S.WeatherLocation>
        📍 현재 위치 <span>{props.nowInfo?.location}</span>
      </S.WeatherLocation>

      <S.NowWeather>
        <S.NowWeatherTitle>Today</S.NowWeatherTitle>
        <img
          src={`/images/weather/${props.nowInfo?.weather}.png`}
          alt="weather"
        />
        <S.WeatherCode>{props.nowInfo?.message}</S.WeatherCode>
        <S.WeatherDate>{props.nowInfo?.day}</S.WeatherDate>
        <S.WeatherUpdate>
          최근 업데이트 <span>{props.nowInfo?.time}</span>
        </S.WeatherUpdate>
      </S.NowWeather>

      <S.WeekWeather>
        <S.WeekWeatherTitle>Week Weather</S.WeekWeatherTitle>

        <S.WeekContainer>
          {props.week.map((el: any, index: any) => (
            <S.WeekItem key={index}>
              <img src={`/images/weather/${el?.weather}.png`} alt="weather" />
              <S.WeekWeatherCode>{el?.weather}</S.WeekWeatherCode>
              <S.WeekWeatherDate>{el?.daily}</S.WeekWeatherDate>
            </S.WeekItem>
          ))}
        </S.WeekContainer>
      </S.WeekWeather>
    </S.Wrapper>
  );
}
