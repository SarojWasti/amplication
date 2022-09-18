export interface CommitContext {
  owner: string;
  repo: string;
  buildId: string;
  commitId: string;
  resourceId: string;
  resourceName: string;
  actionStepId: string;
}
