export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    return env.ASSETS.fetch(request);
  }
};