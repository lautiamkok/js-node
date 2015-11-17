# Installation (Linux/ Xubuntu)

1. Open a terminal and type the following command:

    `sudo apt-get install nodejs`


2. Then install the node package manager, npm:

    `sudo apt-get install npm`

3. Create a symbolic link for node, as many Node.js tools use this name to execute.

    `sudo ln -s /usr/bin/nodejs /usr/bin/node`

4. Now we should have both the node and npm commands working:

    `node -v`
    v0.10.25

    `npm -v`
    1.3.10

## Ref: http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/#ubuntu-package-manager

# Hello World

1. The interactive node.js shell

If everything worked, you should be able to invoke the interactive node.js shell like this:

    `node`
    > console.log('Hello World');
    Hello World

# First program

Writing a node.js program is as simple as creating a new file with a '.js' extension. For example you could create a simple 'hello_world.js' file with the following content:

    `console.log('Hello World');`

After you have saved the file, you can execute it from your terminal like so:

    `node hello.js`     Hello World

# A hello world http server

Now printing hello world to a terminal isn't all that exciting. Let's take the next step and write a program that responds to hello world via http. We'll call the file 'hello_http.js' and put the following code into it:

    ```
    var http = require('http');

    var server = http.createServer(function(req, res) {
        res.writeHead(200);
        res.end('Hello Http');
    });
    server.listen(8080);
    ```

Now lets run this program from the terminal by typing:

    `node hello_http.js`

The first thing you'll notice is that this program, unlike our first one, doesn't exit right away. That's because a node program will always run until it's certain that no further events are possible. In this case the open http server is the source of events that will keep things going.

Testing the server is as simple as opening a new browser tab, and navigating to the following url:
http://localhost:8080/. As expected, you should see a response that reads: 'Hello Http'.

# The module system

In order to structure your program into different files, node.js provides you with a simple module system.

To illustrate the approach, let's create a new file called 'main.js' with the following content:

    ```
    var hello = require('./hello');
    hello.world();
    ```

As you have probably guessed, the require('./hello') is used to import the contents from another JavaScript file. The initial './' indicates that the file is located in the same directory as 'main.js'. Also note that you don't have to provide the file extension, as '.js' is assumed by default.

So let's go ahead and create our 'hello.js' file, with the following content:

    ```
    exports.world = function() {
      console.log('Hello World');
    }
    ```

What you notice here, is that we are assigning a property called 'world' to an object called 'exports'. Such an 'exports' object is available in every module, and it is returned whenever the require function is used to include the module. If we now go ahead and run our 'main.js' program, we will see the expected output:

    `node main.js`
    Hello World

## Ref: http://nodeguide.com/beginner.html
