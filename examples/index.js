const log = require('../lib/umd')

log.useSymbol()

// log.useBackgroundColor()

log.info('Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.')
log.success('Successfully!')
log.warn('This is a warning message.')
log.error('An unexpected error occurred.')
log.debug('This is a debug message.')
log.trace('This is a trace message.')
