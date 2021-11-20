#!/bin/bash

gh workflow run lab-publish-image.yaml --ref $(sh -c 'git branch --show-current')