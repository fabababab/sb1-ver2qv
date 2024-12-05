import React, { useEffect } from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSitemapStore } from '../../stores/sitemapStore';
import BuilderNode from './BuilderNode';
import BuilderToolbar from './BuilderToolbar';
import BuilderPreview from './BuilderPreview';
import BuilderEditor from './BuilderEditor';
import ComponentSelector from './ComponentSelector';

export default function Builder() {
  const { nodes, setNodes, selectedNodeId } = useSitemapStore();

  useEffect(() => {
    console.log('Nodes:', nodes);
  }, [nodes]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const reorderNodes = (items: any[], startIndex: number, endIndex: number) => {
      const result = Array.from(items);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    };

    setNodes(reorderNodes(
      nodes,
      nodes.findIndex(n => n.id === active.id),
      nodes.findIndex(n => n.id === over.id)
    ));
  };

  return (
    <div className="flex h-full">
      {/* Left Panel - Page Structure */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <BuilderToolbar />
        <div className="flex-1 overflow-y-auto p-4">
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={nodes} strategy={verticalListSortingStrategy}>
              {nodes.map((node) => (
                <BuilderNode key={node.id} node={node} depth={0} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>

      {/* Center and Right Panels */}
      <div className="flex-1 flex">
        {/* Center Panel - Preview */}
        <div className="flex-1">
          <BuilderPreview />
        </div>

        {/* Right Panel - Editor and Component Selector */}
        {selectedNodeId && (
          <div className="w-96 border-l border-gray-200 flex flex-col">
            <BuilderEditor />
            <ComponentSelector />
          </div>
        )}
      </div>
    </div>
  );
}
