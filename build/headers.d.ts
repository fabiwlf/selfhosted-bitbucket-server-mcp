/**
 * Parse a comma-separated "Key=value,Key2=value2" string into a headers object.
 * Values may contain '=' characters (e.g. Base64 tokens).
 * Returns an empty object for undefined or blank input.
 */
export declare function parseCustomHeaders(raw: string | undefined): Record<string, string>;
