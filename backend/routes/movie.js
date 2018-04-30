import express from 'express';
import request from 'request'

const router = express.Router();
const client_id = 'nNEYBFYgQ_70V5gOlw9D';
const client_secret = 'RZYuuzbR5e';

router.get('/hello', function(req, res){
	res.send('hi');
})

router.get('/', (req, res)=> {
	let api_url = 'https://openapi.naver.com/v1/search/movie.json?query=' + encodeURI(req.query.query); // json 결과	
	let options = {
		 url: api_url,
		 headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}       
	};
	request.get(options, (error, response, body) => {
		if (!error && response.statusCode == 200) {
			res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
			console.log(body);
			res.end(body);       
		} else {
			res.status(response.statusCode).end();
			console.log('error = ' + response.statusCode);
		}
	});
});

export default router;