/**
 * @fileoverview gRPC-Web generated client stub for simba.tasks
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.simba = {};
proto.simba.tasks = require('./task_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.simba.tasks.TaskServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.simba.tasks.TaskServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.simba.tasks.CreateTaskRequest,
 *   !proto.simba.tasks.CreateTaskReply>}
 */
const methodDescriptor_TaskService_CreateTask = new grpc.web.MethodDescriptor(
  '/simba.tasks.TaskService/CreateTask',
  grpc.web.MethodType.UNARY,
  proto.simba.tasks.CreateTaskRequest,
  proto.simba.tasks.CreateTaskReply,
  /**
   * @param {!proto.simba.tasks.CreateTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.simba.tasks.CreateTaskReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.simba.tasks.CreateTaskRequest,
 *   !proto.simba.tasks.CreateTaskReply>}
 */
const methodInfo_TaskService_CreateTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.simba.tasks.CreateTaskReply,
  /**
   * @param {!proto.simba.tasks.CreateTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.simba.tasks.CreateTaskReply.deserializeBinary
);


/**
 * @param {!proto.simba.tasks.CreateTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.simba.tasks.CreateTaskReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.simba.tasks.CreateTaskReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.simba.tasks.TaskServiceClient.prototype.createTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/simba.tasks.TaskService/CreateTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_CreateTask,
      callback);
};


/**
 * @param {!proto.simba.tasks.CreateTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.simba.tasks.CreateTaskReply>}
 *     Promise that resolves to the response
 */
proto.simba.tasks.TaskServicePromiseClient.prototype.createTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/simba.tasks.TaskService/CreateTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_CreateTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.simba.tasks.DeleteTaskRequest,
 *   !proto.simba.tasks.DeleteTaskReply>}
 */
const methodDescriptor_TaskService_DeleteTask = new grpc.web.MethodDescriptor(
  '/simba.tasks.TaskService/DeleteTask',
  grpc.web.MethodType.UNARY,
  proto.simba.tasks.DeleteTaskRequest,
  proto.simba.tasks.DeleteTaskReply,
  /**
   * @param {!proto.simba.tasks.DeleteTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.simba.tasks.DeleteTaskReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.simba.tasks.DeleteTaskRequest,
 *   !proto.simba.tasks.DeleteTaskReply>}
 */
const methodInfo_TaskService_DeleteTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.simba.tasks.DeleteTaskReply,
  /**
   * @param {!proto.simba.tasks.DeleteTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.simba.tasks.DeleteTaskReply.deserializeBinary
);


/**
 * @param {!proto.simba.tasks.DeleteTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.simba.tasks.DeleteTaskReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.simba.tasks.DeleteTaskReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.simba.tasks.TaskServiceClient.prototype.deleteTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/simba.tasks.TaskService/DeleteTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_DeleteTask,
      callback);
};


/**
 * @param {!proto.simba.tasks.DeleteTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.simba.tasks.DeleteTaskReply>}
 *     Promise that resolves to the response
 */
proto.simba.tasks.TaskServicePromiseClient.prototype.deleteTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/simba.tasks.TaskService/DeleteTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_DeleteTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.simba.tasks.GetTaskRequest,
 *   !proto.simba.tasks.GetTaskReply>}
 */
const methodDescriptor_TaskService_GetTask = new grpc.web.MethodDescriptor(
  '/simba.tasks.TaskService/GetTask',
  grpc.web.MethodType.UNARY,
  proto.simba.tasks.GetTaskRequest,
  proto.simba.tasks.GetTaskReply,
  /**
   * @param {!proto.simba.tasks.GetTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.simba.tasks.GetTaskReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.simba.tasks.GetTaskRequest,
 *   !proto.simba.tasks.GetTaskReply>}
 */
const methodInfo_TaskService_GetTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.simba.tasks.GetTaskReply,
  /**
   * @param {!proto.simba.tasks.GetTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.simba.tasks.GetTaskReply.deserializeBinary
);


/**
 * @param {!proto.simba.tasks.GetTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.simba.tasks.GetTaskReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.simba.tasks.GetTaskReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.simba.tasks.TaskServiceClient.prototype.getTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/simba.tasks.TaskService/GetTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_GetTask,
      callback);
};


/**
 * @param {!proto.simba.tasks.GetTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.simba.tasks.GetTaskReply>}
 *     Promise that resolves to the response
 */
proto.simba.tasks.TaskServicePromiseClient.prototype.getTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/simba.tasks.TaskService/GetTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_GetTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.simba.tasks.ListTasksRequest,
 *   !proto.simba.tasks.ListTasksReply>}
 */
const methodDescriptor_TaskService_ListTasks = new grpc.web.MethodDescriptor(
  '/simba.tasks.TaskService/ListTasks',
  grpc.web.MethodType.UNARY,
  proto.simba.tasks.ListTasksRequest,
  proto.simba.tasks.ListTasksReply,
  /**
   * @param {!proto.simba.tasks.ListTasksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.simba.tasks.ListTasksReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.simba.tasks.ListTasksRequest,
 *   !proto.simba.tasks.ListTasksReply>}
 */
const methodInfo_TaskService_ListTasks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.simba.tasks.ListTasksReply,
  /**
   * @param {!proto.simba.tasks.ListTasksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.simba.tasks.ListTasksReply.deserializeBinary
);


/**
 * @param {!proto.simba.tasks.ListTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.simba.tasks.ListTasksReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.simba.tasks.ListTasksReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.simba.tasks.TaskServiceClient.prototype.listTasks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/simba.tasks.TaskService/ListTasks',
      request,
      metadata || {},
      methodDescriptor_TaskService_ListTasks,
      callback);
};


/**
 * @param {!proto.simba.tasks.ListTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.simba.tasks.ListTasksReply>}
 *     Promise that resolves to the response
 */
proto.simba.tasks.TaskServicePromiseClient.prototype.listTasks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/simba.tasks.TaskService/ListTasks',
      request,
      metadata || {},
      methodDescriptor_TaskService_ListTasks);
};


module.exports = proto.simba.tasks;

