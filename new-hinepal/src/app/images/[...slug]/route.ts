// app/images/[...slug]/route.ts
import { NextResponse } from 'next/server'
import sharp from 'sharp'

export async function GET(req: Request, { params }: { params: { slug: string[] } }) {
  try {
    const { slug } = params
    const imagePath = slug.join('/') // supports nested folders

    // Map to your backend API
    const apiUrl = `https://api.hinepaltreks.com/uploads/${imagePath}`

    const response = await fetch(apiUrl)
    if (!response.ok) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }

    let buffer = Buffer.from(await response.arrayBuffer())

    // Optional: handle resizing and quality via query params
    const url = new URL(req.url)
    const width = parseInt(url.searchParams.get('w') || '0', 10)
    const quality = parseInt(url.searchParams.get('q') || '75', 10)

    if (width > 0) {
      buffer = await sharp(buffer)
        .resize(width)
        .webp({ quality })
        .toBuffer()
    }

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': response.headers.get('content-type') || 'image/webp',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (err) {
    return NextResponse.json({ error: 'Server error', details: (err as Error).message }, { status: 500 })
  }
}
