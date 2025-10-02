'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  alt: string
  structuredData?: {
    caption?: string
    credit?: string
  }
  className?: string
}

export default function OptimizedImage({
  alt,
  structuredData,
  className,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <figure className={className} role="img" aria-label={alt}>
      <Image
        {...props}
        alt={alt}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        className={`
          transition-opacity duration-300
          ${isLoading ? 'opacity-0' : 'opacity-100'}
          ${hasError ? 'opacity-50' : ''}
        `}
      />
      {structuredData?.caption && (
        <figcaption className="text-sm text-muted-foreground mt-2 text-center">
          {structuredData.caption}
          {structuredData.credit && (
            <span className="block text-xs mt-1">
              Photo: {structuredData.credit}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}
