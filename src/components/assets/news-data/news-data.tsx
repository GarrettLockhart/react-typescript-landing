type newsDataTypes = {
  id: number;
  title: string;
  content: string;
};

const newsData: newsDataTypes[] = [
  {
    id: 1,
    title: 'Hydrogen VS Electric Cars',
    content: 'Will hydrogen-fueled cars ever catch up to EVs?'
  },
  {
    id: 1,
    title: 'The Downsides of Al Artistry',
    content:
      'What are the possible adverse effects of on-demand Al image generation?'
  },
  {
    id: 1,
    title: 'Is VC Funding Drying Up?',
    content:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means'
  }
];

export default newsData;
