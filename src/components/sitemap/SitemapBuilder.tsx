import React from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSitemapStore } from '../../stores/sitemapStore';
import SitemapNode from './SitemapNode';
import SitemapToolbar from './SitemapToolbar';
import SitemapPreview from './SitemapPreview';
import SitemapEditor from './SitemapEditor';

export default function SitemapBuilder() {
  const { nodes, setNodes, selectedNodeId } = useSitemapStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    // Handle reordering logic here
    const reorderNodes = (items: any[], startIndex: number, endIndex: number) => {
      const result = Array.from(items);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    };

    setNodes(reorderNodes(nodes, nodes.findIndex(n => n.id === active.id), nodes.findIndex(n => n.id === over.id)));
  };

  return (
    <div className="flex h-full">
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <SitemapToolbar />
        <div className="flex-1 overflow-y-auto p-4">
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={nodes} strategy={verticalListSortingStrategy}>
              {nodes.map((node) => (
                <SitemapNode key={node.id} node={node} depth={0} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>

      <div className="flex-1 flex">
        <div className="flex-1">
          <SitemapPreview />
        </div>
        {selectedNodeId && (
          <div className="w-96 border-l border-gray-200">
            <SitemapEditor />
          </div>
        )}
      </div>
    </div>
  );
}