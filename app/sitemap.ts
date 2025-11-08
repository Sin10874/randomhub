import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://randomhub.io'
  const currentDate = new Date()
  
  // 定义所有页面及其优先级
  const routes = [
    { path: '', priority: 1.0, changeFreq: 'daily' as const },
    { path: '/random-name-generator', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/random-city-generator', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/random-letter-generator', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/random-sentence-generator', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/random-adjective-generator', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/random-job-generator', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/random-website-generator', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/privacy', priority: 0.5, changeFreq: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }))
}

