const createEndpoints = (controller: string) => ({
  dig: `${controller}/dig`,
});

export const ENDPOINTS = createEndpoints("user");
