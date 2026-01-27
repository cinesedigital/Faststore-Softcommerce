function serializeCookies(cookiesMap: Map<string, Record<string, string>>) {
  const cookies: string[] = [];

  cookiesMap.forEach((domainCookies) => {
    Object.keys(domainCookies).forEach((key) => {
      cookies.push(`${key}=${domainCookies[key]}`);
    });
  });

  return cookies.join("; ");
}

export { serializeCookies };
