(async () => {
  for (let i = 0; i < 600; i++) {
    process.stdout.write(`${i}|`)
    await new Promise(resolve => setTimeout(resolve, 500))
  }
})()