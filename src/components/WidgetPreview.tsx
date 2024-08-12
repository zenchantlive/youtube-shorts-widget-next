import React from 'react';

interface WidgetPreviewProps {
  videoId: string;
  widgetSize: number;
  borderColor: string;
  borderRadius: number;
  addShadow: boolean;
}

const WidgetPreview: React.FC<WidgetPreviewProps> = ({
  videoId,
  widgetSize,
  borderColor,
  borderRadius,
  addShadow,
}) => {
  if (!videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div
      className={`youtube-shorts-widget ${addShadow ? 'shadow-box' : ''}`}
      style={{
        maxWidth: `${widgetSize}px`,
        margin: '0 auto',
        ['--border-radius' as string]: `${borderRadius}px`,
        ['--border-color' as string]: borderColor,
      }}
    >
      <style jsx>{`
        .youtube-shorts-container {
          position: relative;
          width: 100%;
          padding-top: 177.78%; /* 9:16 Aspect Ratio */
          border-radius: var(--border-radius);
          overflow: hidden;
          border: 2px solid var(--border-color);
        }
        .youtube-shorts-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        .shadow-box {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
          background-color: transparent;
          border-radius: var(--border-radius);
          padding: 10px;
        }
      `}</style>
      <div className="youtube-shorts-container">
        <iframe src={embedUrl} allowFullScreen />
      </div>
    </div>
  );
};

export default WidgetPreview;