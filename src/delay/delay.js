const delay = (callback, ms) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(callback())
		}, ms)
	})
}

module.exports = delay