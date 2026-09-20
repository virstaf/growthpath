import Image from "next/image";
import { getPexelsPhoto } from "@/lib/pexels";

export default async function SectionImage({
  query,
  alt,
  orientation = "landscape",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}: {
  query: string;
  alt?: string;
  orientation?: "landscape" | "portrait" | "square";
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const photo = await getPexelsPhoto(query, orientation);

  if (!photo) {
    return (
      <div
        className={`rounded-3xl bg-gradient-to-br from-sand to-paper ${className}`}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      <Image
        src={photo.src}
        alt={alt ?? photo.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
