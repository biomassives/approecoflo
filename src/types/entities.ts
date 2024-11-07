// src/types/entities.ts

// Base types for existing functionality
export type Products = Product[];
export interface Product {
  name: string;
  category: string;
  technology: string;
  id: number;
  description: string;
  price: string;
  discount: string;
}

export type Users = User[];
export interface User {
  id: number;
  name: string;
  avatar: string;
  email: string;
  biography: string;
  position: string;
  country: string;
  status: string;
}

// Credential System Types
export enum CredentialEndpoints {
  ISSUE = 'credentials/issue',
  VERIFY = 'credentials/verify',
  PROJECTS = 'credentials/projects',
  MEDIA = 'credentials/media',
}

export interface Credential {
  id: string;
  projectName: string;
  recipientDID: string;
  evidenceUrl?: string;
  status: 'active' | 'revoked';
  createdAt: string;
  metadata?: {
    blockchain?: string;
    transactionHash?: string;
    ipfsHash?: string;
  };
}

export interface CredentialMedia {
  id: string;
  credentialId: string;
  type: 'video' | 'image' | 'document';
  url: string;
  createdAt: string;
}

export interface CredentialProject {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'suspended';
  credentialCount: number;
  createdAt: string;
}

// API Operation Types
export type CredentialOperation = {
  issue: (data: Omit<Credential, 'id' | 'createdAt'>) => Promise<Credential>;
  verify: (id: string) => Promise<{ valid: boolean; details?: any }>;
  getProjects: () => Promise<CredentialProject[]>;
  getMedia: (credentialId: string) => Promise<CredentialMedia[]>;
};

// Combined API Operations
export type ApiOperations = {
  // Product operations
  getProducts: () => Promise<Products>;
  createProduct: (product: Omit<Product, 'id'>) => Promise<Product>;
  updateProduct: (id: number, product: Partial<Product>) => Promise<Product>;
  deleteProduct: (id: number) => Promise<void>;
  
  // User operations
  getUsers: () => Promise<Users>;
  createUser: (user: Omit<User, 'id'>) => Promise<User>;
  updateUser: (id: number, user: Partial<User>) => Promise<User>;
  deleteUser: (id: number) => Promise<void>;
  
  // Credential operations
  [CredentialEndpoints.ISSUE]: CredentialOperation['issue'];
  [CredentialEndpoints.VERIFY]: CredentialOperation['verify'];
  [CredentialEndpoints.PROJECTS]: CredentialOperation['getProjects'];
  [CredentialEndpoints.MEDIA]: CredentialOperation['getMedia'];
};

// Export unified types for API endpoints
export type EndpointsToOperations = ApiOperations;
export type Endpoint = keyof EndpointsToOperations;

// Playground types (imported from actions)
import type { playgroundActions } from '../pages/playground/_actions';
export type PlaygroundAction = (typeof playgroundActions)[number];