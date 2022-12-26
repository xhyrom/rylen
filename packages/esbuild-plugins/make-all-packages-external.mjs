export default {
    name: 'make-all-packages-external',
    setup(build) {
      // eslint-disable-next-line
      const filter = /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/; // Must not start with '/' or './' or '../'
      build.onResolve({ filter }, args => ({ path: args.path, external: true }));
    },
};