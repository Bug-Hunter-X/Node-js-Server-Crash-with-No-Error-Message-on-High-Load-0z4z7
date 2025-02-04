# Node.js Server Crash Under Load

This repository demonstrates a common yet frustrating issue in Node.js: unexpected server crashes under heavy load without informative error messages.  The `server.js` file contains the problematic code, while `serverSolution.js` offers a solution.

## Problem

The original server (`server.js`) uses a simple `http.createServer` to handle requests.  When subjected to a large number of concurrent requests, it crashes without providing much insight into the cause.

## Solution

The solution (`serverSolution.js`) implements error handling to catch exceptions and gracefully handle unexpected situations, preventing server crashes and providing better diagnostics.