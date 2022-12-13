const fs=require('fs');
const http=require('http');

fs.writeFileSync('index.html',"<h1> Hello World </h1><p> This is Harish... </p>",'utf-8')
const data=fs.readFileSync('index.html','utf-8')
const server=http.createServer((req,res)=>{
    const pathname=req.url;
    if(pathname==='/'){

                res.writeHead(200,{
                    'content-type':'text/html'
                })
                res.end(data)

    }
    else{
        res.writeHead(404,{
            'content-type':'text/html'
        })
        res.end('<center><h1>PAGE IS NOT FOUND......</h1></center>')
    }
})
server.listen(5000,()=>{
    console.log("server is up")
})
