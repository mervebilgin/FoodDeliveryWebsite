import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "eu97po54",
    dataset: 'production',
    apiVersion: '2022-07-16',
    useCdn: true,
    token: 
    "skpxWlNJuR9uUkM6DLeYelHdYF9DMufj4MieSywp5bMoGobcfd9eclgowTWa4m9NGZGgNPGwvKv9RWJl2495QsaaWu3YEbGisDXPD2UeoaNVqxOyr27h8YQRzo9IAhbry7SHeeoUrNmxce6k6AAjpohSQORCITgTYeXaAqYkJ6anNkY1KTk7"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)