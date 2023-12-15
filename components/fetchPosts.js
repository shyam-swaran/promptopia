export const fetchPosts = async () => {
  const response = await fetch("/api/prompt", {
    cache: "no-store",
    next: {
      revalidate: 10,
    },
  });
  return await response.json();
};
