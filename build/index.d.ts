#!/usr/bin/env node
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
export interface BitbucketServerOptions {
    baseUrl?: string;
    token?: string;
    username?: string;
    password?: string;
    defaultProject?: string;
    maxLinesPerFile?: number;
    readOnly?: boolean;
    customHeaders?: Record<string, string>;
}
export declare class BitbucketServer {
    private readonly server;
    private readonly api;
    private readonly config;
    constructor(options?: BitbucketServerOptions);
    connect(transport: Transport): Promise<void>;
    private isPullRequestInput;
    private setupToolHandlers;
    private listProjects;
    private listRepositories;
    private createPullRequest;
    private updatePullRequest;
    private getPullRequest;
    private mergePullRequest;
    private declinePullRequest;
    private addComment;
    private addCommentInline;
    private editComment;
    private deleteComment;
    private publishReview;
    private getCodeInsights;
    private getDashboardPullRequests;
    private truncateDiff;
    private truncateFileSection;
    private getDiff;
    private getReviews;
    private getActivities;
    private getComments;
    private search;
    private getFileContent;
    private browseRepository;
    private listPullRequests;
    private listBranches;
    private listCommits;
    private deleteBranch;
    private markPullRequestAsDraft;
    private approvePullRequest;
    private unapprovePullRequest;
    run(): Promise<void>;
}
