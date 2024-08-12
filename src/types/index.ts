import { NextRequest, NextResponse } from 'next/server';
import { ReactNode } from 'react';

// RootLayout type
export interface RootLayoutProps {
  children: ReactNode;
}

// CustomizationOptions types
export interface CustomizationOptionsProps {
  widgetSize: number;
  setWidgetSize: (size: number) => void;
  borderColor: string;
  setBorderColor: (color: string) => void;
  borderRadius: number;
  setBorderRadius: (radius: number) => void;
  addShadow: boolean;
  setAddShadow: (shadow: boolean) => void;
}

// WidgetCode types
export interface WidgetCodeProps {
  videoId: string;
  widgetSize: number;
  borderColor: string;
  borderRadius: number;
  addShadow: boolean;
  isDarkMode: boolean;
}

// WidgetPreview types
export interface WidgetPreviewProps {
  videoId: string;
  widgetSize: number;
  borderColor: string;
  borderRadius: number;
  addShadow: boolean;
}

// YouTubeShortsWidget types
export interface YouTubeShortsWidgetState {
  youtubeUrl: string;
  videoId: string;
  widgetSize: number;
  borderColor: string;
  borderRadius: number;
  addShadow: boolean;
  errorMessage: string;
  isDarkMode: boolean;
}

// Add any other types used across multiple components here