# mount-tasks

auto mount gulp tasks

## Install

    npm install --save mount-tasks

## Usages

```
var gulp        = require('gulp');

// Require all tasks in vendor/tasks, including subfolders
require('mount-tasks')(__dirname + '/tasks')

// default task
gulp.task('default', ['clean', 'build']);
```

## Api


### load tasks in vendor/tasks directory

    require('mount-tasks')()

### load tasks in custom directory

    require('mount-tasks')(__dirname + '/tasks')

