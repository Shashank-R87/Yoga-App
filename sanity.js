import { createClient } from "@sanity/client";

const sanityClient = createClient({
    projectId: "kdx9q0wc",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true,
});

export default sanityClient;