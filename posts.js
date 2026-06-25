const POSTS = [
    // { date: "2026-06-24", title: "My First Post", url: "posts/my-first-post.html" },
];

if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.protocol === "file:")
    POSTS.push({ date: "------", title: "// [template]", url: "posts/template.html" });
