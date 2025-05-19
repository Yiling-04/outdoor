interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Outdoor Logs',
  siteUrl: 'https://outdoorlogs.vercel.app/',
  logo: 'https://avatars.githubusercontent.com/u/143258245?v=4',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Podcast',
      url: 'https://yiling615.notion.site/podcast',
    },
    {
      name: 'Run',
      url: 'https://yiling615.github.io/running_page/',
    },
  ],
};

export default data;
