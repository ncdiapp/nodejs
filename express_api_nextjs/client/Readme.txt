Main host for public is "client", on port 3000 by default.
internal api call host is "server", on port 5000 by defaut.



*** Method A. Install expressjs reverce proxy on nextjs app (.ts)

1.
    npm install express http-proxy-middleware next react react-dom
    npm install --save-dev typescript @types/node @types/react @types/express
    npm install --save-dev ts-node
    npm install ts-node tsconfig-paths --save-dev   
    npm install ts-node typescript --save-dev

2. crate server.mts
 --- Solution for node 18 ts-node --esm myfile.mts,  
 ---  node version 20 need to sue load : "dev": "node --loader ts-node/esm server.mts",

3. Update package.json Scripts: 
    "scripts": {
        "dev": "ts-node --esm server.mts",
        "build": "next build",
        "start": "next start"
    }



**** Method B. Use nextjs buit in reverse proxy
 1.  Update package.json Scripts: 
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start"
    }


2. Edit next.config.mjs
    /** @type {import('next').NextConfig} */
    const nextConfig = {
        async rewrites() {
            return [
            {
                source: "/api/:path*",
                destination: "http://localhost:5000/api/:path*",
            },
            ];
        },

    };

    export default nextConfig;