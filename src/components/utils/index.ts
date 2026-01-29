export function serializeCookies(cookiesMap: Map<string, Record<string, string>>) {
  const cookies: string[] = [];

  cookiesMap.forEach((domainCookies) => {
    Object.keys(domainCookies).forEach((key) => {
      cookies.push(`${key}=${domainCookies[key]}`);
    });
  });

  return cookies.join("; ");
}

// requestIdleCallback Fallback
const isClient = typeof window !== "undefined";
export const requestIdle =
  isClient && window.requestIdleCallback
    ? window?.requestIdleCallback
    : function (cb: (...args: any[]) => any) {
        const deadline = {
          didTimeout: false,
          timeRemaining: () => 0,
        };

        return setTimeout(() => {
          cb(deadline);
        }, 1000);
      };

export const cancelIdle =
  isClient && window.cancelIdleCallback
    ? window?.cancelIdleCallback
    : function (id: any) {
        clearTimeout(id);
      };
