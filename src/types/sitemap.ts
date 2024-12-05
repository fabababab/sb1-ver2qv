export interface SitemapNode {
  id: string;
  title: string;
  path: string;
  componentId?: string;
  children: SitemapNode[];
  isExpanded?: boolean;
}

export interface SitemapStore {
  nodes: SitemapNode[];
  selectedNodeId: string | null;
  setNodes: (nodes: SitemapNode[]) => void;
  addNode: (parentId: string | null, node: Omit<SitemapNode, 'id' | 'children'>) => void;
  updateNode: (id: string, updates: Partial<SitemapNode>) => void;
  deleteNode: (id: string) => void;
  selectNode: (id: string | null) => void;
  toggleExpand: (id: string) => void;
}

export interface DraggableNodeProps {
  node: SitemapNode;
  depth: number;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}