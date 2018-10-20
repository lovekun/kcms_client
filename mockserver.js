/*
 * mock 服务
 * 提供一些自定义的请求接口
 */
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./mocker/db.json')
const middlewares = jsonServer.defaults({
	"logger": true,
	"static": "./mocker"
})

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
	console.log("aaa");
	res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
	if (req.method === 'POST') {
		req.body.createdAt = Date.now()
	}
	// Continue to JSON Server router
	next()
})

server.post('/echo', (req, res) => {
	console.log(req);
	res.jsonp(req.query)
})

// Use default router
server.use(router)
server.listen(3000, () => {
	console.log('JSON Server is running')
})
