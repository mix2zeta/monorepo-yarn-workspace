#!/bin/bash

gh workflow run publish-image.yaml --ref $(sh -c 'git branch --show-current')