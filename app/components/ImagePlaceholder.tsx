import Image from 'next/image';

interface ImagePlaceholderProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    fill?: boolean;
    sizes?: string;
    quality?: number;
}

// Generate a gradient based on the image name for consistent colors
function getGradientColors(src: string): [string, string] {
    const hash = src.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue1 = hash % 360;
    const hue2 = (hash + 60) % 360;
    return [`hsl(${hue1}, 40%, 60%)`, `hsl(${hue2}, 40%, 70%)`];
}

// Create an inline SVG placeholder
function createPlaceholder(width: number, height: number, text: string, src: string): string {
    const [color1, color2] = getGradientColors(src);

    const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${src.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad-${src.replace(/[^a-zA-Z0-9]/g, '')})" />
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-family="system-ui, sans-serif"
        font-size="${Math.min(width, height) / 15}"
        font-weight="500"
        fill="white"
        opacity="0.9"
      >
        ${text}
      </text>
    </svg>
  `;

    // Browser-safe base64 encoding
    const encoded = typeof window === 'undefined'
        ? Buffer.from(svg).toString('base64')
        : btoa(unescape(encodeURIComponent(svg)));
    return `data:image/svg+xml;base64,${encoded}`;
}

export default function ImagePlaceholder({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    fill = false,
    sizes,
    quality = 75,
}: ImagePlaceholderProps) {
    // Extract a display name from the src
    const displayName = src
        .split('/')
        .pop()
        ?.replace(/\.[^/.]+$/, '')
        .replace(/[-_]/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') || alt;

    // Default dimensions if not provided
    const imgWidth = width || 1200;
    const imgHeight = height || 800;

    // For now, use placeholder SVG. In production, you'd check if the image exists
    const placeholderSrc = createPlaceholder(imgWidth, imgHeight, displayName, src);

    if (fill) {
        return (
            <Image
                src={placeholderSrc}
                alt={alt}
                fill
                className={className}
                priority={priority}
                sizes={sizes}
                quality={quality}
            />
        );
    }

    return (
        <Image
            src={placeholderSrc}
            alt={alt}
            width={imgWidth}
            height={imgHeight}
            className={className}
            priority={priority}
            quality={quality}
        />
    );
}
