// CustomizationOptions.tsx

import React from 'react';

interface CustomizationOptionsProps {
  widgetSize: number;
  setWidgetSize: (size: number) => void;
  borderColor: string;
  setBorderColor: (color: string) => void;
  borderRadius: number;
  setBorderRadius: (radius: number) => void;
  addShadow: boolean;
  setAddShadow: (shadow: boolean) => void;
}

const CustomizationOptions: React.FC<CustomizationOptionsProps> = ({
  widgetSize,
  setWidgetSize,
  borderColor,
  setBorderColor,
  borderRadius,
  setBorderRadius,
  addShadow,
  setAddShadow,
}) => {
  return (
    <div className="customization-options mb-4">
      <div className="mb-2 flex items-center">
        <label htmlFor="widget-size" className="block text-sm font-medium text-gray-700 mr-4">
          Widget Size:
        </label>
        <input
          type="range"
          id="widget-size"
          min="200"
          max="500"
          value={widgetSize}
          onChange={(e) => setWidgetSize(Number(e.target.value))}
          className="flex-grow"
        />
        <span className="text-sm text-gray-500 ml-4">{widgetSize}px</span>
      </div>
      
      <div className="mb-2 flex items-center">
        <label htmlFor="border-color" className="block text-sm font-medium text-gray-700 mr-4">
          Border Color:
        </label>
        <input
          type="color"
          id="border-color"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
          className="p-1 border rounded flex-grow"
        />
      </div>
      
      <div className="mb-2 flex items-center">
        <label htmlFor="border-radius" className="block text-sm font-medium text-gray-700 mr-4">
          Border Radius:
        </label>
        <input
          type="range"
          id="border-radius"
          min="0"
          max="20"
          value={borderRadius}
          onChange={(e) => setBorderRadius(Number(e.target.value))}
          className="flex-grow"
        />
        <span className="text-sm text-gray-500 ml-4">{borderRadius}px</span>
      </div>
      
      <div className="mb-2 flex items-center">
        <input
          type="checkbox"
          checked={addShadow}
          onChange={(e) => setAddShadow(e.target.checked)}
          className="mr-2"
        />
        <label className="text-sm font-medium text-gray-700">
          Add Shadow Box
        </label>
      </div>
    </div>
  );
};

export default CustomizationOptions;
