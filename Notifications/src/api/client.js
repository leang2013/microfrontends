import {
  ListenRequest, ListenResponse
} from '../protos/notifications_api_pb';
import { NotificationsApiClient } from '../protos/notifications_api_grpc_web_pb';
import config from '../../config/local';

const client = new NotificationsApiClient(config.apiBase);
const listenRequest = new ListenRequest();
const listenResponse = new ListenResponse();

const NotificationsService = {
  Client: client,
  ListenRequest: listenRequest,
  ListenResponse: listenResponse,
};

export default NotificationsService;
