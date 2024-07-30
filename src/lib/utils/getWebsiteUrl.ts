export const getWebsiteUrl = () => {
  const isDev = ['deploy-preview', 'dev'].includes(process.env.NEXT_PUBLIC_CONTEXT);

  if (isDev) {
    return process.env.NEXT_PUBLIC_DEPLOY_URL || process.env.npm_package_config_base_url || 'https://localhost:3010';
  }

  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
};

export default getWebsiteUrl;
