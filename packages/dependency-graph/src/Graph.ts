import Node from './Node';
import { PackageConfig, TreeRoot, TreeNode } from './types';

export default class Graph {
  protected cache: Map<string, Node> = new Map();

  protected mapped: boolean = false;

  protected nodes: Set<Node> = new Set();

  protected packages: Map<string, PackageConfig> = new Map();

  constructor(packages: PackageConfig[] = []) {
    packages.forEach(pkg => {
      this.addPackage(pkg);
    });
  }

  /**
   * Add a package by name with an associated `package.json` object.
   * Will map a dependency between the package and its dependees
   * found in `dependencies` and `peerDependencies`.
   */
  addPackage(pkg: PackageConfig): this {
    if (this.mapped) {
      this.resetNodes();
    }

    // Cache package data for later use
    this.packages.set(pkg.name, pkg);

    // Add node to the graph
    this.addNode(pkg.name);

    return this;
  }

  resolveInOrder(): PackageConfig[] {
    this.mapDependencies();

    const order: Set<PackageConfig> = new Set();
    const resolve = (nodes: Set<Node>) => {
      // Add parent nodes first
      nodes.forEach(node => {
        const pkg = this.packages.get(node.name);

        // Only include nodes that have package data
        if (pkg) {
          order.add(pkg);
        }
      });

      // Add children after parents so order is preserved
      nodes.forEach(node => {
        resolve(node.dependents);
      });
    };

    resolve(this.nodes);

    return Array.from(order);
  }

  resolveTree(): TreeRoot {
    this.mapDependencies();

    const seen: Set<string> = new Set();
    const resolve = (node: Node, tree: TreeRoot | TreeNode) => {
      if (seen.has(node.name)) {
        return;
      }

      const pkg = this.packages.get(node.name);

      if (!pkg) {
        return;
      }

      const branch: TreeNode = {
        package: pkg,
      };

      if (node.dependents.size === 0) {
        branch.leaf = true;
      }

      node.dependents.forEach(child => {
        resolve(child, branch);
      });

      if (tree.nodes) {
        tree.nodes.push(branch);
      } else {
        tree.nodes = [branch];
      }

      seen.add(node.name);
    };

    const trunk: TreeRoot = {
      nodes: [],
      root: true,
    };

    this.nodes.forEach(node => resolve(node, trunk));

    return trunk;
  }

  /**
   * Add a node for the defined package name.
   */
  protected addNode(name: string) {
    const node = new Node(name);

    // Cache node for constant lookups
    this.cache.set(name, node);

    // Add to the root as it has no parent yet
    this.nodes.add(node);
  }

  /**
   * Map dependencies between all currently registered packages.
   */
  protected mapDependencies() {
    if (this.mapped) {
      return;
    }

    this.mapped = true;
    this.packages.forEach(pkg => {
      Object.keys({
        ...pkg.dependencies,
        ...pkg.peerDependencies,
      }).forEach(depName => {
        this.mapDependency(pkg.name, depName);
      });
    });
  }

  /**
   * Map a dependency link for a dependent (child) depending on a requirement (parent).
   * Will link the parent and child accordingly, and will remove the child
   * from the root if it exists.
   */
  protected mapDependency(dependentName: string, requirementName: string) {
    const requirement = this.cache.get(requirementName);
    const dependent = this.cache.get(dependentName);

    if (!requirement || !dependent) {
      return;
    }

    // Child depends on parent
    dependent.requirements.add(requirement);

    // Parent is a dependee of child
    requirement.dependents.add(dependent);

    // Remove from the root
    this.nodes.delete(dependent);
  }

  /**
   * Remove all current nodes in the graph and add new root nodes for each package.
   */
  protected resetNodes() {
    this.mapped = false;
    this.cache = new Map();
    this.nodes = new Set();
    this.packages.forEach(pkg => {
      this.addNode(pkg.name);
    });
  }
}
