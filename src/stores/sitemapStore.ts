import { create } from 'zustand';
import { SitemapNode, SitemapStore } from '../types/sitemap';
import { useEffect } from 'react';

const generateId = () => Math.random().toString(36).substr(2, 9);

export const useSitemapStore = create<SitemapStore>((set) => ({
  nodes: [
    {
      id: 'home',
      title: 'Home',
      path: '/',
      children: [],
      isExpanded: true,
    },
  ],
  selectedNodeId: null,

  setNodes: (nodes) => set({ nodes }),

  addNode: (parentId, node) => set((state) => {
    const newNode: SitemapNode = {
      ...node,
      id: generateId(),
      children: [],
    };

    if (!parentId) {
      return { nodes: [...state.nodes, newNode] };
    }

    const updateChildren = (nodes: SitemapNode[]): SitemapNode[] => {
      return nodes.map((n) => {
        if (n.id === parentId) {
          return { ...n, children: [...n.children, newNode] };
        }
        return { ...n, children: updateChildren(n.children) };
      });
    };

    return { nodes: updateChildren(state.nodes) };
  }),

  updateNode: (id, updates) => set((state) => {
    const updateNodes = (nodes: SitemapNode[]): SitemapNode[] => {
      return nodes.map((node) => {
        if (node.id === id) {
          return { ...node, ...updates };
        }
        return { ...node, children: updateNodes(node.children) };
      });
    };

    return { nodes: updateNodes(state.nodes) };
  }),

  deleteNode: (id) => set((state) => {
    const deleteFromNodes = (nodes: SitemapNode[]): SitemapNode[] => {
      return nodes
        .filter((node) => node.id !== id)
        .map((node) => ({
          ...node,
          children: deleteFromNodes(node.children),
        }));
    };

    return { nodes: deleteFromNodes(state.nodes) };
  }),

  selectNode: (id) => set({ selectedNodeId: id }),

  toggleExpand: (id) => set((state) => {
    const toggleNode = (nodes: SitemapNode[]): SitemapNode[] => {
      return nodes.map((node) => {
        if (node.id === id) {
          return { ...node, isExpanded: !node.isExpanded };
        }
        return { ...node, children: toggleNode(node.children) };
      });
    };

    return { nodes: toggleNode(state.nodes) };
  }),
}));

useEffect(() => {
  console.log('Nodes:', useSitemapStore.getState().nodes);
}, [useSitemapStore.getState().nodes]);
