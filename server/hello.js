import { createServer } from 'node:http';

// Helper: sends a JSON response with the given status code
function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

const server = createServer((req, res) => {
  // Parse the URL so the path is separated from the query (?name=ana)
  const url = new URL(req.url, 'http://localhost');
  const path = url.pathname;

  if (path === '/') {
    sendJson(res, 200, { message: 'Welcome to Campus Events' });
  } else if (path === '/time') {
    sendJson(res, 200, { now: new Date().toISOString() });
  } else {
    sendJson(res, 404, { error: 'Not found' });
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});