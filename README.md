# Web Service Name

    RegulonDB GraphQL-API

## Description

    API Web Service to connect RegulonDB MongoDB collections
    Functional services currently: 
     - Gene
    
    Services in Development: 
     - Regulon

## Category

    [RegulonDB database]

## Usage examples

    Starting up server
    $ npm start
    
    Now the GraphQL Playgroud will run at http://localhost:4000/graphql
    
    ## Notes
    - In case that Playground cannot be reached, please reinstall Nodemon, it can be the problem
    - Sometimes Nodemon doesn't restart the port correctly, in that case:
    	-$ lsof -i :4000 to know the PID that use port 4000
    	-$ kill -9 <PID> to terminate process 
    	-Start again the Playground
​    

## License

    Copyright 2020 
    
    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## Author

    Centro de Ciencias Genómicas UNAM
