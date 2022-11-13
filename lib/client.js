import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// sanityClient
export const client = sanityClient({
  projectId: "btcnh718",
  dataset: "production",
  apiVersion: "2022-11-02",
  useCdn: "true",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
