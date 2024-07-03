#!/bin/bash

PLATFORM=$1
CHANGED_FILES_PATH=$2

EXIT_CODE=0

if [ -n "$CHANGED_FILES_PATH" ]; then
  TAGS=()
  SPEC_FILES=""
  while IFS= read -r FILE; do
    DIRECTORY=$(dirname "$FILE")
    TAG=$(echo "$DIRECTORY" | cut -d '/' -f 3)
    TAGS+=($TAG)
    SPEC_FILES+=" --spec $FILE"
  done <<< "$CHANGED_FILES_PATH"
  TAGS=$(echo "${TAGS[@]}" | tr ' ' '\n' | sort -u | tr '\n' ' ' | xargs)

  if [ -n "$TAGS" ]; then
    echo "Setting BUILD_TAGS to: $TAGS"
    BUILD_TAGS="$TAGS"
    export BUILD_TAGS
  fi

  npm run ${PLATFORM}:browserstack -- $SPEC_FILES || EXIT_CODE=$?
else
  echo "No spec files changed, skipping tests."
fi

exit $EXIT_CODE
