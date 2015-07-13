# Schema Information

## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
admin_id    | integer   | not null, foreign key (references users)
type        | string    | not null, restricted_to (daily, weekly, monthly, todo)

## items
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
admin_id    | integer   | not null, foreign key (references users)
completer_id| integer   | not null, foreign key (references users)
label       | string    | not null, unique
date        | datetime  | (to-do only)
description | string    | default: [""]
points      | integer   | default: 10

## quests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
admin_id    | integer   | not null, foreign key (references users)
title       | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, unique
picture         | blob      | default: [some_image]
admin           | boolean   | not null
admin_id        | integer   | not null
password_digest | string    | not null
session_token   | string    | not null, unique
