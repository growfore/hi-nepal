export function getProxyUrl(apiUrl: string) {
  try {
    const url = new URL(apiUrl)

    // Remove the domain part and use the path after /uploads/
    const pathIndex = url.pathname.indexOf('/uploads/')
    if (pathIndex === -1) return apiUrl 
    const imagePath = url.pathname.slice(pathIndex + '/uploads/'.length)
    return `/images/${imagePath}` 
  } catch {
    return apiUrl
  }
}
