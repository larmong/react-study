import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  color: #333;
  font-size: 18px;
`;

export const WeatherLocation = styled.p`
  margin: 30px 0 70px 0;
  display: flex;
  align-items: center;
  font-size: 20px;
  span {
    display: inline-block;
    margin-left: 10px;
    font-weight: bold;
    color: #3e3e73;
    font-size: 18px;
  }
`;

export const NowWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
    margin: 30px 0;
  }
`;
export const NowWeatherTitle = styled.h3`
  font-size: 40px;
  color: #5b9db7;
  font-weight: bold;
`;
export const WeatherCode = styled.p`
  font-size: 20px;
  color: #ffb03b;
  font-weight: bold;
`;
export const WeatherDate = styled.p`
  font-size: 20px;
  margin: 20px 0 5px 0;
`;

export const WeatherUpdate = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  span {
    display: inline-block;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #3e3e73;
  }
`;

export const WeekWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  img {
    width: 150px;
    margin: 30px 0;
  }
`;
export const WeekWeatherTitle = styled.h3`
  font-size: 40px;
  color: #5b9db7;
  font-weight: bold;
`;
export const WeekContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-around;
`;
export const WeekItem = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeekWeatherCode = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #3e3e73;
  font-weight: bold;
  text-transform: uppercase;
`;
export const WeekWeatherDate = styled.p`
  font-size: 16px;
`;
