const intros: Record<string, string> = {
  "1": "Hi, I'm Sarah from Ntinda. I love watching sunsets over Lake Victoria.",
  "2": "Hi, I'm Moses from Kololo. I graduated from Makerere and enjoy Cafe Javas.",
};

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("id");
  const text = id ? intros[id] : undefined;

  if (!text) {
    return new Response("Unknown profile", { status: 404 });
  }

  const query = new URLSearchParams({ ie: "UTF-8", client: "tw-ob", tl: "en", q: text });

  try {
    const audioResponse = await fetch(`https://translate.google.com/translate_tts?${query.toString()}`);

    if (!audioResponse.ok || !audioResponse.body) {
      return new Response("Voice intro unavailable", { status: 502 });
    }

    return new Response(audioResponse.body, {
      headers: {
        "Content-Type": audioResponse.headers.get("content-type") ?? "audio/mpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new Response("Voice intro unavailable", { status: 502 });
  }
}