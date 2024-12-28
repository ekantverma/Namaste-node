// Explore V8 repository and libuv library docs(libuv/src/unix/core)

// How libuv works in nodejs ?
//  |
//  |
//  --> libuv is a C library that provides support for asynchronous I/O operations.
//  --> It is used by Node.js to handle asynchronous tasks such as reading and writing files, network operations, and timers.
//  --> libuv is responsible for scheduling and executing these tasks in the background, allowing Node.js
//      to continue running other code in the main thread.
//  --> libuv uses an event loop to manage asynchronous tasks.
//  --> The event loop is a loop that runs continuously, checking for new tasks to execute and
//      handling completed tasks.
//  --> When a task is completed, libuv notifies Node.js by emitting an event, which triggers the
//      corresponding callback function.
//  --> This allows Node.js to continue running other code while the asynchronous task is being
//      executed
//  --> libuv also provides a thread pool for executing CPU-intensive tasks in the background.
//  --> This allows Node.js to offload CPU-intensive work to separate threads, preventing it from
//      blocking the main thread.
//  --> This is especially useful for applications that perform computationally expensive tasks
//      such as image processing or data analysis.
//  --> By using a thread pool, Node.js can continue running other code while the CPU-intensive
//      task is being executed in the background.
//  --> This helps to improve the performance and responsiveness of Node.js applications.
//  --> libuv also provides a mechanism for handling errors and exceptions that occur during
//      asynchronous tasks.

// Node js is  single threading or multithreading ?
//  |
//  |
//  --> it is both when need as per as sync and async processes.
//  --> it has max default threads count 4.
//  --> if more process are coming symultaneously then it will create new threads / or wait in queue for exmpty first thread
//  --> it is called as thread pool.
//  --> You can change the count of threads in thread pool by setting the environment variable UV_THREADPOOL_SIZE.

// How thread pool works?
//  |
//  |
//  --> It is a pool of threads that are used to execute asynchronous tasks in Node.js.
//  --> By default, the size of the thread pool is 4.
//  --> This means that at any given time, only 4 tasks can be executed asynchronously.
//  --> If there are more than 4 tasks that need to be executed asynchronously, they are added to a queue.
//  --> When a thread is available, the next task from the queue is executed.
//  --> You can change the size of the thread pool by setting the environment variable UV_THREADPOOL_SIZE.
//  --> For example, you can set it to 8 by running the following command: export
//      UV_THREADPOOL_SIZE=8
//  --> This will increase the size of the thread pool to 8, allowing more tasks to
//      be executed asynchronously at the same time.

// Study about Epoll and kqueue (Linus and MacOs)