import { CommitDetails } from './commit-details.dto';
import { PullRequestDetails } from './pull-request-details.dto';
import { PullRequestCommentDetails } from './pull-request-comment-details.dto';

export class CommitCreatedDto {
  buildId: string;
  commit: CommitDetails;
  pullRequest: PullRequestDetails;
  pullRequestComment: PullRequestCommentDetails;
}
