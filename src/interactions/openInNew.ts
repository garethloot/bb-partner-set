interface Page {
  name: string;
  resolvePath: (input: Record<string, string>) => string;
  url: string;
}

function openInNew({
  event,
  redirectTo,
}: {
  event: Event;
  redirectTo: Page;
}): void {
  let { url } = redirectTo;

  if (
    typeof event === 'object' &&
    event !== null &&
    typeof (event as any).id === 'number'
  ) {
    url = redirectTo.resolvePath(event as any);
  }

  window.open(url, '_blank');
}
