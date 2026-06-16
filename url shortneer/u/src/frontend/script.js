async function shortenUrl() {

    const originalUrl =
        document.getElementById("urlInput").value;

    const response = await fetch(
        "http://localhost:4000/api/url",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                originalUrl
            })
        }
    );

    const data = await response.json();

    document.getElementById("result").innerHTML = `
        <a href="${data.data.shortUrl}"
           target="_blank">
           ${data.data.shortUrl}
        </a>
    `;
}