import Cosmic from "cosmicjs";
const api = Cosmic();

const bucket = api.bucket({
  slug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  read_key: import.meta.env.PUBLIC_COSMIC_READ_KEY,
});

export async function getAllPosts() {
  const data = await bucket.objects
    .find({
      type: "posts",
    })
    .props("title,slug,metadata,created_at")
    .sort("-created_at");
  return data.objects;
}

export async function getFeaturedPost() {
  const data = await bucket.objects
    .find({
      type: "featured-post",
      slug: "set-featured-post",
    })
    .props("metadata");
  return data.objects[0].metadata.post;
}

export async function getConfig() {
  const data = await bucket.objects
    .find({ type: "config", slug: "config" })
    .props("metadata");
  return data.objects[0];
}
