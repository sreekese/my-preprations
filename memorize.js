function memoize(fn, resolver) {
  const cache = new Map();

  return function (...args) {
    // Determine cache key: custom resolver or JSON serialization fallback
    const key = resolver 
      ? resolver.apply(this, args) 
      : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}


// 1. Basic usage with primitive multi-arguments
const add = memoize((a, b, c) => {
  console.log('Computing sum...');
  return a + b + c;
});

console.log(add(1, 2, 3)); // Logs "Computing sum...", Returns 6
console.log(add(1, 2, 3)); // Returns 6 (from cache)

// 2. Custom resolver for objects/complex structures
const fetchUserData = memoize(
  (user, config) => {
    console.log(`Fetching data for user: ${user.id}`);
    return { name: user.name, role: config.role };
  },
  (user, config) => `${user.id}:${config.role}` // Custom key generator
);

const user = { id: 101, name: 'Alice' };
fetchUserData(user, { role: 'admin' }); // Logs "Fetching data for user: 101"
fetchUserData(user, { role: 'admin' }); // Returns cached object