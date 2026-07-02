export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export interface AvatarProps {
  name: string;
  imageSrc?: string;
  status?: 'online' | 'offline' | 'away';
}

export interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export interface TableColumn<T> {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
}

export interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}
