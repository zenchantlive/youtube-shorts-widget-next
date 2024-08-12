// YouTubeShortsWidget.tsx

'use client';

import React, { useState, useCallback, useEffect } from 'react';
import WidgetPreview from './WidgetPreview';
import WidgetCode from './WidgetCode';
import CustomizationOptions from './CustomizationOptions';

const YouTubeShortsWidget: React.FC = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [widgetSize, setWidgetSize] = useState(360);
  const [borderColor, setBorderColor] = useState('#000000');
  const [borderRadius, setBorderRadius] = useState(12);
  const [addShadow, setAddShadow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const extractYoutubeShortsId = useCallback((url: string) => {
    const regExp = /^.*(youtu.be\/|youtube.com\/shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }, []);

  const handleCreateWidget = useCallback(() => {
    setErrorMessage('');
    if (youtubeUrl) {
      const extractedVideoId = extractYoutubeShortsId(youtubeUrl);
      if (extractedVideoId) {
        setVideoId(extractedVideoId);
      } else {
        setErrorMessage('Invalid YouTube Shorts URL');
        setVideoId('');
      }
    } else {
      setErrorMessage('Please enter a YouTube Shorts URL');
      setVideoId('');
    }
  }, [youtubeUrl, extractYoutubeShortsId]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    if (youtubeUrl.trim() === '') {
      setErrorMessage('');
    } else if (!extractYoutubeShortsId(youtubeUrl.trim())) {
      setErrorMessage('Invalid YouTube Shorts URL');
    } else {
      setErrorMessage('');
    }
  }, [youtubeUrl, extractYoutubeShortsId]);

  return (
    <div className={`creator-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex flex-col md:flex-row">
        {/* Left Column - Input and Customization Options in a Card */}
        <div className="w-full md:w-1/2 p-4">
          <div className="card p-4 border-2 rounded-lg">
            <div className="input-container mb-4">
              <input
                type="text"
                id="youtube-url"
                placeholder="Enter YouTube Shorts URL"
                aria-label="YouTube Shorts URL"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                className="p-2 border rounded w-full"
              />
              <button
                onClick={handleCreateWidget}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-2"
              >
                Create Widget
              </button>
            </div>
            {errorMessage && (
              <div className="error-message text-red-500 mb-4" aria-live="polite">
                {errorMessage}
              </div>
            )}
            <CustomizationOptions
              widgetSize={widgetSize}
              setWidgetSize={setWidgetSize}
              borderColor={borderColor}
              setBorderColor={setBorderColor}
              borderRadius={borderRadius}
              setBorderRadius={setBorderRadius}
              addShadow={addShadow}
              setAddShadow={setAddShadow}
            />
          </div>
        </div>

        {/* Right Column - Widget Preview in a Card */}
        <div className="w-full md:w-1/2 p-4">
          <div className="card p-4 border-2 rounded-lg">
            <WidgetPreview
              videoId={videoId}
              widgetSize={widgetSize}
              borderColor={borderColor}
              borderRadius={borderRadius}
              addShadow={addShadow}
            />
          </div>
        </div>
      </div>

      {/* Centered Widget Code Area in a Card */}
      <div className="w-full p-4 mt-8 flex justify-center">
        <div className="max-w-3xl w-full">
          <WidgetCode
            videoId={videoId}
            widgetSize={widgetSize}
            borderColor={borderColor}
            borderRadius={borderRadius}
            addShadow={addShadow}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>

      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 p-2 rounded-full"
        aria-label="Toggle Dark Mode"
      >
        🌓
      </button>
    </div>
  );
};

export default YouTubeShortsWidget;
