# Unhandled Error in Asynchronous Node.js Express Server

This repository demonstrates a common error in Node.js applications: unhandled errors within asynchronous operations.  The example uses Express.js to create a simple server that simulates an asynchronous task that might throw an unexpected error. The lack of proper error handling leads to the server crashing without informative error messages.

## The Problem

The `bug.js` file contains an Express.js server with a route that simulates an asynchronous operation. This operation randomly throws an error. Without proper error handling, this error will cause the server to crash.

## The Solution

The `bugSolution.js` file demonstrates how to properly handle this error using try...catch blocks within the asynchronous operation, and also demonstrates how to use a process.on('uncaughtException') to handle unexpected errors. This allows the server to gracefully handle the error and continue running or provide informative error messages to the user or logs.