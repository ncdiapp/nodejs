
Install expressjs reverce proxy on nextjs app (.ts)

1.
    npm install express http-proxy-middleware next react react-dom
    npm install --save-dev typescript @types/node @types/react @types/express
    npm install --save-dev ts-node
    npm install ts-node tsconfig-paths --save-dev   
    npm install ts-node typescript --save-dev
    
2. crate server.mts

3. Update package.json Scripts: 
    
    
    "scripts": {
        "dev": "ts-node --esm server.mts",
        "build": "next build",
        "start": "next start"
    }
