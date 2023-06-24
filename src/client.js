// Here we connect sanity with front end
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: "2022-12-13",
  useCdn: 'true',
  token: process.env.REACT_APP_SANITY_TOKEN,
});

export const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)