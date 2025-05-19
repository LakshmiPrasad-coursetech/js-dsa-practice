    class Node {
        constructor(data, left = null, right = null) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
    }
    class BinarySearchTree {

        //this is the methos to create a new node
        constructor() {
            //this is the root of the tree
            this.root = null;
        }

        //new node will be inserted and call function insertNode
        insert(data) {
            //creating a node and initializing it with data
            var newNode = new Node(data);

            //if there is no root node, the new node will be the root node
            if(this.root === null) {
                this.root = newNode;
            }else {
                //if there is a root node, call the insertNode function
                this.insertNode(this.root, newNode);
            }
        }

        //Method to insert a node in the tree
        //this method will be called recursively
        insertNode(node, newNode) {
            //if the new node data is less than the current node data
            //the new node will be inserted in the left subtree
            if(newNode.data < node.data) {
                //if there is no left child, the new node will be inserted here
                if(node.left === null) {
                    node.left = newNode;
                }else {
                    //if there is a left child, call the insertNode function recursively
                    this.insertNode(node.left, newNode);
                }
            } else {
                //if the new node data is greater than the current node data
                //the new node will be inserted in the right subtree
                if(node.right === null) {
                    node.right = newNode;
                }else {
                    //if there is a right child, call the insertNode function recursively
                    this.insertNode(node.right, newNode);
                }
            }
        }

        //Method to search for a node in the tree

    findValue(data) {
        let currentNode = this.root;
        while (currentNode) {
            if (data === currentNode.data) {
                return true;
            } else if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    //Method to delete a node from the tree
    delete(data) {
        const removeNode = (node, data) => {
            if (!node) {
                return null;
            }
            if (data === node.data) {
                // Node to be deleted found
                // Case 1: No children
                if (!node.left && !node.right) {
                    return null;
                }
                // Case 2: One child
                if (!node.left) {
                    return node.right;
                }
                if (!node.right) {
                    return node.left;
                }
                // Case 3: Two children
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
        } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
    }

    //Inorder traversal
    inOrder(){
        if (this.root === null) {
            return null;
    }else {
        var result = [];
        function traverseInOrder(node) {
            node.left && traverseInOrder(node.left);
            result.push(node.data);
            node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;
    }
    }

    //Preorder traversal
    preOrder() {
        if (this.root === null) {
            return null;
    }else {
        var result = [];
        function traverseInOrder(node) {
            result.push(node.data);
            node.left && traverseInOrder(node.left);
            node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;
    }
    }

    //Postorder traversal
    postOrder() {
        if (this.root === null) {
            return null;
    }else {
        var result = [];
        function traverseInOrder(node) {
            node.left && traverseInOrder(node.left);
            node.right && traverseInOrder(node.right);
            result.push(node.data);
        }
        traverseInOrder(this.root);
        return result;
    }
    }
}


    let newBST = new BinarySearchTree();
    newBST.insert(10);
    console.log(newBST);
    newBST.insert(5);
    console.log(newBST);
    newBST.insert(15);
    newBST.delete(15);
    console.log(newBST);
    newBST.insert(3);
    console.log(newBST);