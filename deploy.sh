#!/bin/bash

set -x

source .build.properties

# Sample content:
#
#   SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
#   DIST_DIR="${SCRIPT_DIR}/dist/we"
#   SERVER="web1"
#   SERVER_DEPLOY_DIR="/home/welling_economy/public"

rsync -av "${DIST_DIR}" "${SERVER}:${SERVER_DEPLOY_DIR}"
ssh "${SERVER}" "chown -R www-data:www-data ${SERVER_DEPLOY_DIR}"
