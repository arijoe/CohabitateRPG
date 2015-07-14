# Schema Information

## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
leader_id   | integer   | not null, foreign key (references users)
type        | string    | not null, restricted_to (daily, weekly, monthly, todo)

## items
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
leader_id   | integer   | not null, foreign key (references users)
completer_id| integer   | not null, foreign key (references users)
label       | string    | not null, unique
duedate     | datetime  | (to-do only)
description | text      | default: [""]
points      | integer   | default: 10

## quests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
leader_id   | integer   | not null, foreign key (references users)
title       | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, unique
picture         | blob      | default: [some_image]
is_leader       | boolean   | not null (set to  'true' if not invited)
leader_id       | integer   | not null (set to user.id if not invited)
password_digest | string    | not null
session_token   | string    | not null, unique
