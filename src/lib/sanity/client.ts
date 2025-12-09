import { createClient } from '@sanity/client'
import { cache } from 'react'

// Create client for read-only operations (no token needed for CDN)
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8dj9jthx',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster response, set to false for fresh data
  // Don't include token for read-only operations - CDN doesn't need it
  // token: process.env.SANITY_API_TOKEN, // Only needed for write operations
  perspective: 'published', // Only fetch published documents
})

// Cached client for server-side rendering
export const cachedClient = cache(client.fetch.bind(client))

export default client