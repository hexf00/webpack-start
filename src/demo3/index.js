import('./func.js').then((log) => {
    console.log(log)
    log.default(12333)
}).catch(err => console.error('err', err))

