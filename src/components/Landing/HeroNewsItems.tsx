import styled from 'styled-components';
import newsData from '../assets/news-data/news-data';

const HeroNewsItems = () => {
  return (
    <div>
      {newsData.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HeroNewsItems;
