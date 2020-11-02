# pretty-log

A prettier log for terminal.

## Install

```sh
npm install -D @foodie/pretty-log

# or

yarn add -D @foodie/pretty-log
```

## Usage

```ts
const log = require("@foodie/pretty-log");

log.log("This is a log message.");
log.success("This is a success message.");
```

## API

### log

```ts
log.log("This is a log message.");
```

### success

```ts
log.success("This is a success message.");
```

### info

```ts
log.info("This is a info message.");
```

### warn

```ts
log.warn("This is a warn message.");
```

### error

```ts
log.error("This is a error message.");
```

### debug

```ts
log.debug("This is a debug message.");
```

### trace

```ts
log.trace("This is a trace message.");
```

### useSymbol

将 `enableSymbol` 设置为 `true`，输出的 message 将会带上对应的标识符。

### useBackgroundColor

将 `enableBackgroundColor` 设置为 `true`，输出的 message label 将会使用背景色。

### setSymbols

设置每种输出类型的标识符。

| 参数 | 类型     |
| ---- | -------- |
| obj  | `Symbol` |

### setColors

设置每种输出类型的颜色

| 参数 | 类型    |
| ---- | ------- |
| obj  | `Color` |

## License

pretty-log is licensed under [Apache 2.0 License](./LICENSE)
