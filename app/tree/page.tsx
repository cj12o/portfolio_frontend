// import { TreeNode } from "@/components/tree/logic"
// import React from "react"
// interface TreeNodeProps {
//   node: TreeNode | null;
//   x: number;
//   y: number;
//   offset: number;
// }

// const makeTree=()=>{
//     const root=TreeNode.root
//     TreeNode.addChild(root,"q",-1)
//     let counter=0
//     const arr=["a","b","c"]
//     while(counter<3){
//         TreeNode.addChild(TreeNode.root,arr[counter],1)
//         counter++
//     }
//     TreeNode.addChild(TreeNode.root,"x",2)
// }


// const RenderTreeNodeComponent: React.FC<TreeNodeProps> = ({ node, x, y, offset,counter}) => {
//     if (!node) return null;

//     const radius = 25;
//     const verticalGap = 80;

//   return (
//     <>
//       {/* Lines to children */}
//       {counter>0 && (
//         <line
//           x1={x}
//           y1={y}
//           x2={x - offset} 
//           y2={y + verticalGap}
//           stroke="#999"
//           strokeWidth="2"
//         />
//       )}
      

//       {/* Node circle */}
//       <circle cx={x} cy={y} r={radius} fill="#4f46e5" stroke="#312e81" strokeWidth="2" />
//       <text
//         x={x}
//         y={y}
//         textAnchor="middle"
//         dy="0.3em"
//         fill="white"
//         fontSize="16"
//         fontWeight="bold"
//       >
//         {node.value}
//       </text>

//       {/* Render children */}
//       {node.left && (
//         <RenderTreeNodeComponent
//           node={node.left}
//           x={x - offset}
//           y={y + verticalGap}
//           offset={offset / 2}
//         />
//       )}
//       {node.right && (
//         <RenderTreeNodeComponent
//           node={node.right}
//           x={x + offset}
//           y={y + verticalGap}
//           offset={offset / 2}
//         />
//       )}
//     </>
//   );
// };

// export default function TechTreeComponent(){
//     makeTree()
//     const root=TreeNode.root
//     const queue: TreeNode[] = [];

//     if(TreeNode.root){
//         queue.push(TreeNode.root);
//     }
//     return(
//         <>
//         <div>hello</div>
//         <Renedertreenode/>
//         </>
//     )
// }
