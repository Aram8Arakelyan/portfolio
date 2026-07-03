import { ImageResponse } from 'next/og'

import { site } from '@/lib/site'

export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#0a0a0a',
        color: '#fafafa',
        padding: 80,
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ fontSize: 36, color: '#a1a1aa' }}>{site.url.replace('https://', '')}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 92, fontWeight: 600, letterSpacing: '-0.03em' }}>{site.name}</div>
        <div style={{ fontSize: 44, color: '#a1a1aa' }}>{site.role}</div>
      </div>
    </div>,
    { ...size },
  )
}
