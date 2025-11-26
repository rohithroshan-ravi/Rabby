import browser from 'webextension-polyfill';

class UserGuideService {
  constructor() {}

  init = () => {
    // No longer manages tabs - onboarding handled within popup
  };

  isStorageExisted = async () => {
    return Boolean(
      Object.keys(await browser.storage.local.get(null)).filter((key) => {
        return !['extensionId', 'openapi'].includes(key);
      }).length
    );
  };

  // Tab-opening methods removed - onboarding flow now renders within popup
  // SortHat component redirects to /welcome when wallet is not booted

  destroy = () => {
    // No cleanup needed - no tab listeners
  };
}

export const userGuideService = new UserGuideService();
