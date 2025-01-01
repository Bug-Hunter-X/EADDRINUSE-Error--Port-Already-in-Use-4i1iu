# Node.js EADDRINUSE Bug

This repository demonstrates a common yet sometimes elusive error in Node.js: the `EADDRINUSE` error. This occurs when your Node.js application tries to bind to a port that's already in use by another process (e.g., another server or application).

## Bug Description
The provided `bug.js` file contains a simple Express.js server. If you attempt to run it while port 3000 is already in use, it will fail to start, showing a cryptic error message about the port being in use.  Debugging this requires understanding that the error is not in the syntax or logic of the code but in the system's resource allocation.

## Solution
The `bugSolution.js` file offers several potential solutions:

1. **Use a different port:**  The simplest solution is to change the port number the server listens on.
2. **Kill the conflicting process:** Identify the process using port 3000 (using tools like `lsof` on Linux/macOS or Task Manager on Windows) and terminate it.
3. **Implement retry logic:**  Advanced applications can include logic to repeatedly try to bind to the port with a delay, potentially handling the error more gracefully.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Start another server (like a simple HTTP server) that listens on port 3000.
4. Run `node bug.js`.  Observe the error.
5. Stop the other server and run `node bugSolution.js` to see the solution in action.