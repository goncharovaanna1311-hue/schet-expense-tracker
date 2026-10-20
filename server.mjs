import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer(async(req,res)=>{try{const target=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(target!==root&&!target.startsWith(root+path.sep)){res.writeHead(403).end();return;}const file=target===root?path.join(root,'index.html'):target;const body=await readFile(file);res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json'})[path.extname(file)]||'text/plain; charset=utf-8');res.end(body);}catch{res.writeHead(404).end('Не найдено');}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
