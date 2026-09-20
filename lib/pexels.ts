export type PexelsPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const PEXELS_SEARCH_URL = "https://api.pexels.com/v1/search";

export async function getPexelsPhoto(
  query: string,
  orientation: "landscape" | "portrait" | "square" = "landscape",
): Promise<PexelsPhoto | null> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) return null;

  const params = new URLSearchParams({
    query,
    orientation,
    per_page: "1",
  });

  try {
    const res = await fetch(`${PEXELS_SEARCH_URL}?${params.toString()}`, {
      headers: { Authorization: apiKey },
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    const photo = data.photos?.[0];
    if (!photo) return null;

    return {
      src: photo.src.large2x ?? photo.src.large ?? photo.src.original,
      width: photo.width,
      height: photo.height,
      alt: photo.alt || query,
    };
  } catch {
    return null;
  }
}
