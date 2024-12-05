import React, { useEffect } from 'react';
import { Code, Settings } from 'lucide-react';

export default function CodePanel() {
  const code = `import React from 'react';

export default function Component() {
  return (
    <div className="p-4">
      <h1>Hello World</h1>
    </div>
  );
}`;

  useEffect(() => {
    console.log('Code:', code);
  }, [code]);

  return (
    <div className="w-96 bg-gray-900 text-white h-full flex flex-col">
      <div className="h-12 border-b border-gray-700 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Code size={18} />
          <span>Editor</span>
        </div>
        <button className="p-2 hover:bg-gray-800 rounded-lg">
          <Settings size={18} />
        </button>
      </div>
      <div className="flex-1 p-4">
        <pre className="font-mono text-sm">
          <code className="text-gray-300">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
