#!/usr/bin/env bash

GRPC_TOOLS_NODE_PROTOC="./node_modules/grpc-tools/bin/protoc.exe"
PROTOSDIR="../be/src/Api/Protos"
DESTDIR="./src/protos"

  # JavaScript code generating
  ${GRPC_TOOLS_NODE_PROTOC} -I "${PROTOSDIR}" \
      "${PROTOSDIR}"/*.proto \
      --js_out=import_style=commonjs:"${DESTDIR}" \
      --grpc-web_out=import_style=commonjs,mode=grpcwebtext:"${DESTDIR}" \