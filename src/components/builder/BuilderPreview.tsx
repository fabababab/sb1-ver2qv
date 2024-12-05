import React, { useEffect } from 'react';
import { useSitemapStore } from '../../stores/sitemapStore';
import { useComponents } from '../../hooks/useComponents';

export default function BuilderPreview() {
  const { nodes, selectedNodeId } = useSitemapStore();
  const { components } = useComponents();

  const selectedNode = nodes.find(node => node.id === selectedNodeId);
  const selectedComponent = selectedNode?.componentId 
    ? components.find(c => c.id === selectedNode.componentId)
    : null;

  useEffect(() => {
    console.log('Selected component:', selectedComponent);
  }, [selectedComponent]);

  return (
    <div className="h-full flex flex-col">
      <div className="h-12 border-b border-gray-200 flex items-center px-4">
        <h3 className="text-lg font-semibold">Preview</h3>
      </div>
      <div className="flex-1 p-4 bg-gray-50">
        {selectedNode ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 h-full">
            {selectedComponent ? (
              <div dangerouslySetInnerHTML={{ __html: selectedComponent.code }} />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No component selected
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Select a page to preview
          </div>
        )}
      </div>
    </div>
  );
}
