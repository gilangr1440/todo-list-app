export interface DueType {
  date?: string;
  isRecurring?: boolean;
  datetime?: string;
  string?: string;
  timezone?: string;
}

export interface TaskType {
  id?: string;
  order?: number;
  content?: string;
  description?: string;
  projectId?: string;
  isCompleted?: boolean;
  labels?: string[];
  priority?: number;
  commentCount?: number;
  createdAt?: string;
  url?: string;
  creatorId?: string;
}

export interface TaskTypes {
  id?: string;
  order?: number;
  content?: string;
  description?: string;
  projectId?: string;
  isCompleted?: boolean;
  labels?: string[];
  priority?: number;
  commentCount?: number;
  createdAt?: string;
  url?: string;
  creatorId?: string;
}
