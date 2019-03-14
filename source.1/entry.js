async function main() {
  const { X } = await import('./lib');
  console.log(X);
}

main().catch(e => { throw e; });
