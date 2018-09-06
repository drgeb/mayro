#!/usr/bin/env bash

ls | awk '{printf("<div class=\"container\">\n<img src=\"/images/paellas_and_rice/%s\" class=\"image\" width=\"336\" style=\"width:100%\">\n<div class=\"middle\">\n\n",$1);}'
