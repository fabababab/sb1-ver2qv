export interface NavItem {
  label: string;
  icon: string;
  path: string;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}