#!/bin/bash
docker-machine ssh test-node1 docker ps -aqf name=master
