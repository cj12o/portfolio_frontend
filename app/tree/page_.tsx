"use client";
import { useState } from "react";
interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

class BinaryTree {
  root: TreeNode | null = null;

  insert(value: number): void {
    if (this.root === null) {
      this.root = { value, left: null, right: null };
    } else {
      this._insertNode(this.root, value);
    }
  }

  private _insertNode(node: TreeNode, value: number): void {
    if (value < node.value) {
      if (node.left === null) {
        node.left = { value, left: null, right: null };
      } else {
        this._insertNode(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = { value, left: null, right: null };
      } else {
        this._insertNode(node.right, value);
      }
    }
  }

  inorder(node: TreeNode | null = this.root, result: number[] = []): number[] {
    if (node) {
      this.inorder(node.left, result);
      result.push(node.value);
      this.inorder(node.right, result);
    }
    return result;
  }
}

interface TreeNodeProps {
  node: TreeNode | null;
  x: number;
  y: number;
  offset: number;
}

const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node, x, y, offset }) => {
  if (!node) return null;

  const radius = 25;
  const verticalGap = 80;

  return (
    <>
      {/* Lines to children */}
      {node.left && (
        <line
          x1={x}
          y1={y}
          x2={x - offset}
          y2={y + verticalGap}
          stroke="#999"
          strokeWidth="2"
        />
      )}
      {node.right && (
        <line
          x1={x}
          y1={y}
          x2={x + offset}
          y2={y + verticalGap}
          stroke="#999"
          strokeWidth="2"
        />
      )}

      {/* Node circle */}
      <circle cx={x} cy={y} r={radius} fill="#4f46e5" stroke="#312e81" strokeWidth="2" />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dy="0.3em"
        fill="white"
        fontSize="16"
        fontWeight="bold"
      >
        {node.value}
      </text>

      {/* Render children */}
      {node.left && (
        <TreeNodeComponent
          node={node.left}
          x={x - offset}
          y={y + verticalGap}
          offset={offset / 2}
        />
      )}
      {node.right && (
        <TreeNodeComponent
          node={node.right}
          x={x + offset}
          y={y + verticalGap}
          offset={offset / 2}
        />
      )}
    </>
  );
};

export default function BinaryTreeVisualization() {
    const [tree] = useState(() => {
        const newTree = new BinaryTree();
        [50, 30, 70, 20, 40, 60, 80, 10, 25, 35].forEach(val => newTree.insert(val));
        return newTree;
    });


  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex flex-col">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Binary Search Tree</h1>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow-lg overflow-auto">
        <svg width="100%" height="100%" className="min-h-full">
          {tree.root && (
            <TreeNodeComponent
              node={tree.root}
              x={250}
              y={40}
              offset={100}
            />
          )}
        </svg>
      </div>
    </div>
  );
}