export default url => {
  const parsedUrl = new URL(url);
  return parsedUrl.hostname.replace('www.', '');
};
