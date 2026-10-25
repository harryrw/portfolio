import { ImageResponse } from 'next/og';
import { siteConfig } from '@/data/site';

export const alt = `${siteConfig.name} - ${siteConfig.role} Portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#090d16',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(5, 150, 105, 0.25) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(16, 185, 129, 0.15) 0%, transparent 45%)',
          padding: '64px 72px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        {/* Top Header Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '9999px',
              padding: '8px 20px',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '9999px',
                backgroundColor: '#10b981',
              }}
            />
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: '#34d399',
                letterSpacing: '0.5px',
              }}
            >
              {siteConfig.name} · {siteConfig.role}
            </span>
          </div>

          <span
            style={{
              fontSize: 16,
              color: '#94a3b8',
              fontFamily: 'monospace',
            }}
          >
            portfoliohrw-xi.vercel.app
          </span>
        </div>

        {/* Center Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '1000px',
          }}
        >
          <div
            style={{
              fontSize: 50,
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#f8fafc',
              letterSpacing: '-1px',
            }}
          >
            {siteConfig.hero.heading}
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#cbd5e1',
              lineHeight: 1.4,
            }}
          >
            Systems developer specializing in high-reliability financial web reporting,
            database architecture, and automation pipelines.
          </div>
        </div>

        {/* Bottom Tags */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {['T-SQL', 'VB.NET', 'TypeScript', 'Next.js', 'React', 'Cypress'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '6px 16px',
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#e2e8f0',
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
