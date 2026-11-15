import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { personalInfo } from '@/data/personal';

export const alt = `${personalInfo.fullName} — ${personalInfo.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Social share card, generated at build time. */
export default async function OpengraphImage() {
  const portrait = await readFile(path.join(process.cwd(), 'public/portrait.jpg'));
  const src = `data:image/jpeg;base64,${portrait.toString('base64')}`;

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: '#171F20', color: '#F4F1E9' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, flex: 1 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: '#B58A55', textTransform: 'uppercase' }}>Portfolio</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 96, letterSpacing: -4, lineHeight: 1, fontWeight: 700 }}>
              {personalInfo.fullName}
            </div>
            <div style={{ marginTop: 36, fontSize: 32, color: '#B9B6AD' }}>
              {`${personalInfo.title} | ${personalInfo.subtitle}`}
            </div>
          </div>
          <div style={{ fontSize: 24, color: '#B9B6AD' }}>{`Leading a team of ${personalInfo.teamSize} engineers`}</div>
        </div>
        <img src={src} alt="" width={504} height={630} style={{ objectFit: 'cover' }} />
      </div>
    ),
    size,
  );
}
