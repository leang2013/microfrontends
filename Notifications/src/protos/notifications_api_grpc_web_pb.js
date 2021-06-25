/**
 * @fileoverview gRPC-Web generated client stub for simba.notifications
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
proto.simba.notifications = require('./notifications_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.simba.notifications.NotificationsApiClient =
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
proto.simba.notifications.NotificationsApiPromiseClient =
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
 *   !proto.simba.notifications.ListenRequest,
 *   !proto.simba.notifications.ListenResponse>}
 */
const methodDescriptor_NotificationsApi_Listen = new grpc.web.MethodDescriptor(
  '/simba.notifications.NotificationsApi/Listen',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.simba.notifications.ListenRequest,
  proto.simba.notifications.ListenResponse,
  /**
   * @param {!proto.simba.notifications.ListenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.simba.notifications.ListenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.simba.notifications.ListenRequest,
 *   !proto.simba.notifications.ListenResponse>}
 */
const methodInfo_NotificationsApi_Listen = new grpc.web.AbstractClientBase.MethodInfo(
  proto.simba.notifications.ListenResponse,
  /**
   * @param {!proto.simba.notifications.ListenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.simba.notifications.ListenResponse.deserializeBinary
);


/**
 * @param {!proto.simba.notifications.ListenRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.simba.notifications.ListenResponse>}
 *     The XHR Node Readable Stream
 */
proto.simba.notifications.NotificationsApiClient.prototype.listen =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/simba.notifications.NotificationsApi/Listen',
      request,
      metadata || {},
      methodDescriptor_NotificationsApi_Listen);
};


/**
 * @param {!proto.simba.notifications.ListenRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.simba.notifications.ListenResponse>}
 *     The XHR Node Readable Stream
 */
proto.simba.notifications.NotificationsApiPromiseClient.prototype.listen =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/simba.notifications.NotificationsApi/Listen',
      request,
      metadata || {},
      methodDescriptor_NotificationsApi_Listen);
};


module.exports = proto.simba.notifications;

