// WidgetCode.tsx

import React, { useEffect, useState } from 'react';

interface WidgetCodeProps {
  videoId: string;
  widgetSize: number;
  borderColor: string;
  borderRadius: number;
  addShadow: boolean;
  isDarkMode: boolean; // Add the isDarkMode property
}

const WidgetCode: React.FC<WidgetCodeProps> = ({
  videoId,
  widgetSize,
  borderColor,
  borderRadius,
  addShadow,
  isDarkMode, // Use the isDarkMode property
}) => {
  const [widgetCode, setWidgetCode] = useState('');

  useEffect(() => {
    if (videoId) {
      const code = generateWidgetCode();
      setWidgetCode(code);
    } else {
      setWidgetCode('');
    }
  }, [videoId, widgetSize, borderColor, borderRadius, addShadow]);

  const generateWidgetCode = () => {
    let shadowBoxClass = '';
    let shadowBoxStyle = '';

    if (addShadow) {
      shadowBoxClass = 'shadow-box';
      shadowBoxStyle = 'padding: 10px;';
    }

    return `
<div class="youtube-shorts-widget ${shadowBoxClass}" style="max-width: ${widgetSize}px; margin: 0 auto; --border-radius: ${borderRadius}px; --border-color: ${borderColor}; ${shadowBoxStyle}">
  <style>
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
    ${addShadow ? `.shadow-box {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
      background-color: transparent;
      border-radius: var(--border-radius);
      padding: 10px;
    }` : ''}
  </style>
  <div class="youtube-shorts-container">
    <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
  </div>
</div>`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(widgetCode).then(() => {
      alert('Widget code copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  const downloadWidgetCode = () => {
    const blob = new Blob([widgetCode], { type: 'text/html' });
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'youtube-shorts-widget.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(downloadUrl);
  };

  if (!videoId) return null;

  return (
    <div className="widget-code mt-8 p-4 border-2 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <svg
          className="w-6 h-6 mr-2 text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-8a1 1 0 112-0 1 1 0 01-2 0zm3.707 1.707a1 1 0 00-1.414 0L8 13.414V10a1 1 0 00-2 0v3.414l-2.293-2.293a1 1 0 00-1.414 1.414l3.707 3.707a1 1 0 001.414 0l3.707-3.707a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
        Widget Code
      </h2>
      <pre className={`p-4 rounded overflow-x-auto ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
        <code>{widgetCode}</code>
      </pre>
      <div className="button-group mt-4 flex justify-between">
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Copy to Clipboard
        </button>
        <button
          onClick={downloadWidgetCode}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Download Widget
        </button>
      </div>
    </div>
  );
};

export default WidgetCode;
