#!/usr/bin/env bash
set -e

PORT=${1:-8080}
HOST="http://localhost:${PORT}"
ROUTES=(
  "/"
  "/services/data-engineering/"
  "/services/data-validation/"
  "/services/data-reconciliation/"
  "/products/"
  "/products/reconciliation/"
  "/products/validation/"
  "/financial-services/"
  "/about/"
  "/contact/"
  "/privacy-policy/"
  "/tos/"
  "/assets/css/site.css"
  "/robots.txt"
  "/sitemap.xml"
  "/404.html"
)

echo "Testing HTTP status for all canonical routes on ${HOST}..."
FAILED=0
for ROUTE in "${ROUTES[@]}"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "${HOST}${ROUTE}")
  if [ "$STATUS" -eq 200 ]; then
    echo "  [OK 200] ${ROUTE}"
  else
    echo "  [FAIL ${STATUS}] ${ROUTE}"
    FAILED=$((FAILED + 1))
  fi
done

if [ $FAILED -gt 0 ]; then
  echo "Tests failed: ${FAILED} routes returned non-200."
  exit 1
else
  echo "All routes returned HTTP 200."
fi
