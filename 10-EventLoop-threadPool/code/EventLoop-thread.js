// Explore V8 repository and libuv library docs(libuv/src/unix/core)

// Node js is  single threading or multithreading ?
//  |
//  |
//  --> it is both when need as per as sync and async processes.
//  --> it has max default threads count 4.
//  --> if more process are coming symultaneously then it will create new threads / or wait in queue for exmpty first thread
//  --> it is called as thread pool.
//  --> You can change the count of threads in thread pool by setting the environment variable UV_THREADPOOL_SIZE.