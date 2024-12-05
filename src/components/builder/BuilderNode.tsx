import React, { useEffect } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ChevronRight, ChevronDown, Trash, Edit, GripVertical, Component } from 'lucide-react';
import { SitemapNode } from '../../types/sitemap';
import { useSitemapStore } from '../../stores/sitemapStore';
import { useComponents } from '../../hooks/useComponents';

interface Props {
  node: SitemapNode;
  depth: number;
}

export default function BuilderNode({ node, depth }: Props) {
  const { deleteNode, selectNode, toggleExpand } = useSitemapStore();
  const { components } = useComponents();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: node.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginLeft: `${depth * 1.5}rem`,
  };

  const component = components.find(c => c.id === node.componentId);

  useEffect(() => {
    console.log('Node:', node);
  }, [node]);

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg group"
        {...attributes}
      >
        <button
          className="p-1 hover:bg-gray-200 rounded"
          {...listeners}
        >
          <GripVertical size={16} className="text-gray-400" />
        </button>

        <button
          onClick={() => toggleExpand(node.id)}
          className="p-1 hover:bg-gray-200 rounded"
        >
          {node.children.length > 0 && (
            node.isExpanded ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )
          )}
        </button>

        <span
          className="flex-1 cursor-pointer flex items-center gap-2"
          onClick={() => selectNode(node.id)}
        >
          {node.title}
          {component && (
            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full flex items-center gap-1">
              <Component size={12} />
              {component.name}
            </span>
          )}
        </span>

        <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1">
          <button
            onClick={() => selectNode(node.id)}
            className="p-1 hover:bg-gray-200 rounded"
            title="Edit page"
          >
            <Edit size={16} className="text-gray-600" />
          </button>
          <button
            onClick={() => deleteNode(node.id)}
            className="p-1 hover:bg-gray-200 rounded"
            title="Delete page"
          >
            <Trash size={16} className="text-red-600" />
          </button>
        </div>
      </div>

      {node.isExpanded && node.children.map((child) => (
        <BuilderNode
          key={child.id}
          node={child}
          depth={depth + 1}
        />
      ))}
    </>
  );
}
