// src/lib/data.ts
import { API_URL, REMOTE_ASSETS_BASE_URL } from '../app/constants.js';
import type { 
  Endpoint, 
  EndpointsToOperations, 
  Credential, 
  CredentialOperation 
} from '../types/entities.js';

// Add credential-specific endpoints
export enum CredentialEndpoints {
  ISSUE = '/credentials/issue',
  VERIFY = '/credentials/verify',
  PROJECTS = '/credentials/projects',
  MEDIA = '/credentials/media',
}

// Extend existing fetch functionality
export async function fetchData<Selected extends Endpoint | CredentialEndpoints>(endpoint: Selected) {
  const apiEndpoint = `${API_URL}${endpoint}`;
  console.info(`Fetching ${apiEndpoint}…`);
  return fetch(apiEndpoint)
    .then(
      (r) =>
        r.json() as unknown as Promise<
          ReturnType<EndpointsToOperations[Selected] | CredentialOperation>
        >,
    )
    .catch((e) => {
      console.error(e);
      throw Error('Invalid API data!');
    });
}

// Add credential-specific data operations
export async function credentialOperation(
  endpoint: CredentialEndpoints,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  data?: any
) {
  const apiEndpoint = `${API_URL}${endpoint}`;
  console.info(`${method} ${apiEndpoint}…`);
  
  try {
    const response = await fetch(apiEndpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (e) {
    console.error(e);
    throw Error('Credential operation failed!');
  }
}

// Keep existing URL helper
export function url(path = '') {
  return `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
}

// Keep existing asset helper
export function asset(path: string) {
  return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}

// Add credential-specific paths helper
export const credentialPaths = {
  issue: url('credentials/issue'),
  verify: url('credentials/verify'),
  projects: url('credentials/projects'),
  media: url('credentials/media'),
} as const;

// Add helper for credential media paths
export function credentialMediaUrl(mediaId: string) {
  return `${API_URL}${CredentialEndpoints.MEDIA}/${mediaId}`;
}

// Add helper for credential verification
export async function verifyCredential(id: string) {
  return credentialOperation(
    CredentialEndpoints.VERIFY,
    'POST',
    { credentialId: id }
  );
}

// Add helper for credential issuance
export async function issueCredential(credentialData: Omit<Credential, 'id' | 'createdAt'>) {
  return credentialOperation(
    CredentialEndpoints.ISSUE,
    'POST',
    credentialData
  );
}
