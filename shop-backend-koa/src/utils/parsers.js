
/**
 * Patch koa-body parser to save files with correct (origin) names
 * @param name {String} - name attribute from file input filed
 * @param file {Object} - upload file data
 */
module.exports.normalizeFileName = (name, file) => {
  const path = file.path.split('/').slice(0, -1);
  path.push(file.name);
  file.path = path.join('/');
};

/**
 * Get path to file in public folder
 * @param host {String} - server host
 * @param fullPath {String} - absolute path to 'public' folder
 * @example 'src/public/images/3NoAwj5r9mQ.jpg' -> images/3NoAwj5r9mQ.jpg
 */
module.exports.getRelativePath = (host, fullPath) => {
  return fullPath ? `http://${host}/${fullPath.path.split('src/')[1]}` : '';
};
