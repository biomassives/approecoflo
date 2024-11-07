import type { APIRoute } from 'astro';
import type { EndpointsToOperations } from '../../types/entities';

export const endpointsToOperations: EndpointsToOperations = {
  getProducts: async () => {
    return [];
  },
  createProduct: async (product) => {
    return { ...product, id: Date.now() };
  },
  updateProduct: async (id, product) => {
    return { ...product, id } as any;
  },
  deleteProduct: async (id) => {
    // Delete operation
  },

  getUsers: async () => {
    return [];
  },
  createUser: async (user) => {
    return { ...user, id: Date.now() };
  },
  updateUser: async (id, user) => {
    return { ...user, id } as any;
  },
  deleteUser: async (id) => {
    // Delete operation
  },

  'credentials/issue': async (data) => {
    return {
      id: `cred-${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...data
    };
  },
  'credentials/verify': async (id) => {
    return { valid: true };
  },
  'credentials/projects': async () => {
    return [];
  },
  'credentials/media': async (credentialId) => {
    return [];
  },
};

export const get: APIRoute = async ({ params, request }) => {
  const { entity } = params;
  if (!entity || !(entity in endpointsToOperations)) {
    return new Response('Invalid endpoint', { status: 404 });
  }

  try {
    const operation = endpointsToOperations[entity as keyof EndpointsToOperations];
    const result = await operation();
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error(`Error handling ${entity}:`, error);
    return new Response('Internal server error', { status: 500 });
  }
};

export const post: APIRoute = async ({ params, request }) => {
  const { entity } = params;
  if (!entity || !(entity in endpointsToOperations)) {
    return new Response('Invalid endpoint', { status: 404 });
  }

  try {
    const data = await request.json();
    const operation = endpointsToOperations[entity as keyof EndpointsToOperations];
    const result = await operation(data);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error(`Error handling ${entity}:`, error);
    return new Response('Internal server error', { status: 500 });
  }
};