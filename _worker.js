export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get("url");
    if (!target) return new Response("SatIA Proxy OK", {status:200});
    try {
      const response = await fetch(target, {headers:{"User-Agent":"Mozilla/5.0"}});
      const headers = new Headers();
      headers.set("Access-Control-Allow-Origin","*");
      headers.set("Content-Type", response.headers.get("Content-Type") || "video/mp2t");
      return new Response(response.body, {status:response.status, headers});
    } catch(e) {
      return new Response("Erro: "+e.message, {status:500});
    }
  }
};
