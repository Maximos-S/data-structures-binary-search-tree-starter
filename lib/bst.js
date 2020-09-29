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

   searchRecur(val, root=this.root) {
    if (!root) return false; 
    if (root.val === val) {
        return true; 
    } else if (root.val > val) {
        return this.searchRecur(val, root.left);
    } else {
        return this.searchRecur(val, root.right);
    }
   }

   searchIter(val) {
    if (!this.root) return false; 
    let current = this.root; 
    while(current) {
        if(val < current.val) {
            current = current.left;
        } else if (val > current.val) {
            current = current.right; 
        } else {
            return true; 
        }
    }
    return false; 
   }
}

module.exports = {
    TreeNode,
    BST
};