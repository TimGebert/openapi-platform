import { isWebUri } from 'valid-url';

/**
 * @return
 * A relevant error message if there was an error that you can display in your UI if one exists
 */
export function urlError(url?: string): string | undefined {
  if (!url) {
    return 'Error: URL cannot be empty';
  } else if (!isWebUri(url)) {
    return 'Error: Invalid URL';
  } else {
    return undefined;
  }
}
