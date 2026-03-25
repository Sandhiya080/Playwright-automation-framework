import { Page, Locator } from "@playwright/test";

const findValidElement = async (page: Page, selectors: string[]): Promise<Locator | null> => {
  for (const selector of selectors) {
    const locator = page.locator(selector);
    if (await locator.count() > 0) {
      return locator;
    }
  }
  return null;
};

export default findValidElement;
