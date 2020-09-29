class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null
   }

   insert(val) {
       if (this.root) {
           this.insertHelper(this.root, val)

       } else {
           this.root = new TreeNode(val)
       }
   }

   insertHelper(root, val) {
       if (val < root.val) {
           if (root.left) {
               this.insertHelper(root.left, val)
           } else {
               root.left = new TreeNode(val)
           }
       } else {
           if (root.right) {
               this.insertHelper(root.right, val)
           } else {
               root.right = new TreeNode(val)
           }
       }
   }
}

module.exports = {
    TreeNode,
    BST
};