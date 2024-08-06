#!/bin/bash

PLATFORM=$1
BUILD_TAGS=$2

if [ "$PLATFORM" = "ios" ] || [ "$PLATFORM" = "android" ]; then
    if [ -n "$BUILD_TAGS" ]; then
        for SUITE in $BUILD_TAGS; do
            export BUILD_TAGS="$SUITE"
            npm run ${PLATFORM}:browserstack -- --suite "$SUITE" || true
        done
    else
        echo "No suites were provided. Please select at least one suite."
        exit 1
    fi
else
    echo "Unsupported operating system selected"
    exit 1
fi
