export interface ProgressStep {
    label: string;
    status: 'active' | 'completed' | 'pending';
  }