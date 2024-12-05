import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ChevronRight, ChevronDown, Trash, Edit, GripVertical } from 'lucide-react';
import { SitemapNode as SitemapNodeType } from '../../types/sitemap';
import { useSitemapStore } from '../../stores/sitemapStore';

interface Props {
  node: SitemapNodeType;
  depth: number;
}

export default function SitemapNode({ node, depth }: Props) {
  const { deleteNode, selectNode, toggleExpand } = useSitemapStore();
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
          className="flex-1 cursor-pointer"
          onClick={() => selectNode(node.id)}
        >
          {node.title}
        </span>

        <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1">
          <button
            onClick={() => selectNode(node.id)}
            className="p-1 hover:bg-gray-200 rounded"
          >
            <Edit size={16} className="text-gray-600" />
          </button>
          <button
            onClick={() => deleteNode(node.id)}
            className="p-1 hover:bg-gray-200 rounded"
          >
            <Trash size={16} className="text-red-600" />
          </button>
        </div>
      </div>

      {node.isExpanded && node.children.map((child) => (
        <SitemapNode
          key={child.id}
          node={child}
          depth={depth + 1}
        />
      ))}
    </>
  );
}