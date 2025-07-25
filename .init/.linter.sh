#!/bin/bash
cd /home/kavia/workspace/code-generation/interactive-3d-portfolio-website-86094/react_js_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

