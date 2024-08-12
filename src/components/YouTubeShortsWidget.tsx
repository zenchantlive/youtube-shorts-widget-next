// YouTubeShortsWidget.tsx

'use client';

import React, { useState, useCallback, useEffect } from 'react';
import WidgetPreview from './WidgetPreview';
import WidgetCode from './WidgetCode';
import CustomizationOptions from './CustomizationOptions';
import { YouTubeShortsWidgetState } from '@/types';

const YouTubeShortsWidget: React.FC = () => {
  const [state, setState] = useState<YouTubeShortsWidgetState>({
    youtubeUrl: '',
    videoId: '',
    widgetSize: 360,
    borderColor: '#000000',
    borderRadius: 12,
    addShadow: false,
    errorMessage: '',
    isDarkMode: false,
  });

  const extractYoutubeShortsId = useCallback((url: string) => {
    const regExp = /^.*(youtu.be\/|youtube.com\/shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }, []);

  const handleCreateWidget = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      errorMessage: '',
    }));
    if (state.youtubeUrl) {
      const extractedVideoId = extractYoutubeShortsId(state.youtubeUrl);
      if (extractedVideoId) {
        setState(prevState => ({
          ...prevState,
          videoId: extractedVideoId,
        }));
      } else {
        setState(prevState => ({
          ...prevState,
          errorMessage: 'Invalid YouTube Shorts URL',
          videoId: '',
        }));
      }
    } else {
      setState(prevState => ({
        ...prevState,
        errorMessage: 'Please enter a YouTube Shorts URL',
        videoId: '',
      }));
    }
  }, [state.youtubeUrl, extractYoutubeShortsId]);

  const toggleDarkMode = () => {
    setState(prevState => ({
      ...prevState,
      isDarkMode: !prevState.isDarkMode,
    }));
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    if (state.youtubeUrl.trim() === '') {
      setState(prevState => ({
        ...prevState,
        errorMessage: '',
      }));
    } else if (!extractYoutubeShortsId(state.youtubeUrl.trim())) {
      setState(prevState => ({
        ...prevState,
        errorMessage: 'Invalid YouTube Shorts URL',
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        errorMessage: '',
      }));
    }
  }, [state.youtubeUrl, extractYoutubeShortsId]);

  return (
    <div className={`creator-section ${state.isDarkMode ? 'dark' : ''}`}>
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
                value={state.youtubeUrl}
                onChange={(e) => setState(prevState => ({ ...prevState, youtubeUrl: e.target.value }))}
                className="p-2 border rounded w-full"
              />
              <button
                onClick={handleCreateWidget}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-2"
              >
                Create Widget
              </button>
            </div>
            {state.errorMessage && (
              <div className="error-message text-red-500 mb-4" aria-live="polite">
                {state.errorMessage}
              </div>
            )}
            <CustomizationOptions
              widgetSize={state.widgetSize}
              setWidgetSize={(size) => setState(prevState => ({ ...prevState, widgetSize: size }))}
              borderColor={state.borderColor}
              setBorderColor={(color) => setState(prevState => ({ ...prevState, borderColor: color }))}
              borderRadius={state.borderRadius}
              setBorderRadius={(radius) => setState(prevState => ({ ...prevState, borderRadius: radius }))}
              addShadow={state.addShadow}
              setAddShadow={(shadow) => setState(prevState => ({ ...prevState, addShadow: shadow }))}
            />
          </div>
        </div>

        {/* Right Column - Widget Preview in a Card */}
        <div className="w-full md:w-1/2 p-4">
          <div className="card p-4 border-2 rounded-lg">
            <WidgetPreview
              videoId={state.videoId}
              widgetSize={state.widgetSize}
              borderColor={state.borderColor}
              borderRadius={state.borderRadius}
              addShadow={state.addShadow}
            />
          </div>
        </div>
      </div>

      {/* Centered Widget Code Area in a Card */}
      <div className="w-full p-4 mt-8 flex justify-center">
        <div className="max-w-3xl w-full">
          <WidgetCode
            videoId={state.videoId}
            widgetSize={state.widgetSize}
            borderColor={state.borderColor}
            borderRadius={state.borderRadius}
            addShadow={state.addShadow}
            isDarkMode={state.isDarkMode}
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
