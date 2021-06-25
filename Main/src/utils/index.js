export const connectToStore = (globalStore, store, callback) => {
  try {
    globalStore.Subscribe(store, callback);
  } catch (error) {
    console.log(error);
  }
};

export const loadComponent = (scope, module) => async () => {
  await __webpack_init_sharing__('default');
  const container = window[scope]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  const factory = await window[scope].get(module);
  const Module = factory();
  return Module;
};
