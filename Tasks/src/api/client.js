import {
  CreateTaskReply,
  CreateTaskRequest,
  DeleteTaskReply,
  DeleteTaskRequest,
  GetTaskReply,
  GetTaskRequest,
  ListTasksReply,
  ListTasksRequest,
  TaskListItemReadModel,
  TaskListReadModel,
  TaskReadModel
} from '../protos/task_service_pb';
import { TaskServicePromiseClient } from '../protos/task_service_grpc_web_pb';
import config from '../../config/local';

const TaskService = {
  Client: new TaskServicePromiseClient(config.apiBase),
  CreateTaskReply: new CreateTaskReply(),
  CreateTaskRequest: new CreateTaskRequest(),
  DeleteTaskReply: new DeleteTaskReply(),
  DeleteTaskRequest: new DeleteTaskRequest(),
  GetTaskReply: new GetTaskReply(),
  GetTaskRequest: new GetTaskRequest(),
  ListTasksReply: new ListTasksReply(),
  ListTasksRequest: new ListTasksRequest(),
  TaskListItemReadModel: new TaskListItemReadModel(),
  TaskListReadModel: new TaskListReadModel(),
  TaskReadModel: new TaskReadModel(),
};

export default TaskService;
